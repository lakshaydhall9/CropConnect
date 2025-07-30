const nodemailer = require("nodemailer");

const sendMail = async (receiverEmailAddress, content, subject) => {
  const userEmail = receiverEmailAddress;

  let config = {
    service: "gmail",
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  };

  let transporter = nodemailer.createTransport(config);

  let message = {
    from: process.env.GMAIL_ID,
    to: userEmail,
    subject: subject,
    html: content,
  };

  try {
    await transporter.sendMail(message);
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.log("error is", error.message);
    return false;
  }
};

module.exports = sendMail;
