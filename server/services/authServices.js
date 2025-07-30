const sendMail = require("./mailServices");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Seller = require("../models/sellerSchema");
const User = require("../models/userSchema");
const capitalizeFirstLetter = require("../helper/capitalizeFirstLetter");

const saveAndSendVerficationToken = async (id, type, origin) => {
  var salt = await bcrypt.genSalt(0);
  var verificationToken = await bcrypt.hash(id, salt);
  console.log("Verification Token: ", verificationToken);
  let Model = authModelSelector(type);

  const data = await Model.findById(id);
  console.log("Data: ", data);
  data.verificationToken = verificationToken;
  data.verificationTokenExpiry = Date.now() + 3600000;

  const encodedToken = encodeURIComponent(verificationToken);
  console.log("Encoded Token: ", encodedToken);
  await data.save();

  const verificationTokenLink = `${origin}/${type}/verify/${encodedToken}`;
  console.log("Verification Token Link: ", verificationTokenLink);
  const mailRes = await sendMail(
    data.email,
    `Click <a href=${verificationTokenLink}>here</a> to verify your account`,
    `Verify your ${capitalizeFirstLetter(type)} account`
  );

  return mailRes;
};

const authModelSelector = (type, res) => {
  if (type === "seller") {
    return Seller;
  } else if (type === "user") {
    return User;
  } else {
    return res.status(400).send({ message: "Invalid type" });
  }
};

const generateAccessToken = (type, id) => {
  const access_token = jwt.sign({ [type]: id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return access_token;
};

module.exports = {
  saveAndSendVerficationToken,
  authModelSelector,
  generateAccessToken,
};
