import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import InputTag from "../../components/input/InputTag";
import SubmitButton from "../../components/button/SubmitButton";
import FormSwitch from "../../components/account/FormSwitch";
import SideImage from "../../components/account/SideImage";
import FormHeading from "../../components/account/FormHeading";
import useEmailAuth from "../../hooks/auth/useEmailAuth";

function LoginAndSignup() {
  const { type } = useParams();  // 'seller' or 'buyer'
  const [isSignInForm, setIsSignInForm] = useState(true);
  const { isLoading, handleSignup, handleLogin } = useEmailAuth();

  // Form state data
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    brandName: "",
    email: "",
    password: "",
  });

  // Handle form submission (sign up or login)
  const handleAuth = async (e) => {
    e.preventDefault();  // Prevent the default form submission

    if (isSignInForm) {
      // Sign in
      handleLogin(type, formData);
    } else {
      // Sign up
      handleSignup(type, formData);
    }
  };

  // Reset form data when toggling between Sign Up / Sign In
  useEffect(() => {
    if (isSignInForm) {
      setFormData((prevData) => ({
        ...prevData,
        email: "",
        password: "",
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, email: "", password: "" }));
    }
  }, [isSignInForm]);

  return (
    <section className="flex flex-col-reverse md:flex-row md:h-screen bg-gradient-to-r from-teal-200 via-blue-200 to-indigo-200">
      {/* Side Image Component */}
      <SideImage type={type} />

      {/* Main Form Section */}
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-center px-8 py-12 lg:py-16">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md lg:p-10">
          {/* Form Heading (e.g., "Sign In" or "Create Account") */}
          <FormHeading type={type} isSignInForm={isSignInForm} />

          <form
            className="space-y-6"
            onSubmit={handleAuth}  // Pass the submit handler here
          >
            {/* Conditional Fields for Sign Up (Only show if not SignIn) */}
            {!isSignInForm && (
              <>
                <InputTag
                  label={"Full Name"}
                  placeholder={"John Doe"}
                  type={"text"}
                  outlineColor={type === "seller" ? "outline-teal-600" : "outline-blue-600"}
                  value={formData.name}
                  setFormData={setFormData}
                  toUpdate={"name"}
                />
                <InputTag
                  label={"Contact No."}
                  placeholder={"9876543210"}
                  type={"text"}
                  outlineColor={type === "seller" ? "outline-teal-600" : "outline-blue-600"}
                  value={formData.contact}
                  setFormData={setFormData}
                  toUpdate={"contact"}
                />
                {type === "seller" && (
                  <InputTag
                    label={"Brand Name"}
                    placeholder={"JohnVeggies"}
                    type={"text"}
                    outlineColor={type === "seller" ? "outline-teal-600" : "outline-blue-600"}
                    value={formData.brandName}
                    setFormData={setFormData}
                    toUpdate={"brandName"}
                  />
                )}
              </>
            )}

            {/* Email and Password Fields (common for both Sign Up and Sign In) */}
            <InputTag
              label={"Email"}
              placeholder={"john@doe.com"}
              type={"email"}
              outlineColor={type === "seller" ? "outline-teal-600" : "outline-blue-600"}
              value={formData.email}
              setFormData={setFormData}
              toUpdate={"email"}
            />
            <InputTag
              label={"Password"}
              placeholder={"••••••••"}
              type={"password"}
              outlineColor={type === "seller" ? "outline-teal-600" : "outline-blue-600"}
              value={formData.password}
              setFormData={setFormData}
              toUpdate={"password"}
            />

            {/* Submit Button */}
            <SubmitButton
              text={isSignInForm ? "Sign In" : "Create Account"}
              bgColor={type === "seller" ? "bg-teal-600" : "bg-blue-600"}
              hoverBgColor={type === "seller" ? "bg-teal-500" : "bg-blue-500"}
              isLoading={isLoading}
            />

            {/* Switch between Sign Up and Sign In */}
            <FormSwitch
              type={type}
              isSignInForm={isSignInForm}
              setIsSignInForm={setIsSignInForm}
            />

            {/* Additional info */}
            {isSignInForm && (
              <div className="text-xs font-medium text-blue-500 mt-2">
                *It is recommended to use a temporary email for creating an account.{" "}
                <Link
                  className="underline text-teal-500"
                  to={"https://temp-mail.org/en/10minutemail"}
                  target="_blank"
                >
                  Click here to go to 10-minute mail
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginAndSignup;
