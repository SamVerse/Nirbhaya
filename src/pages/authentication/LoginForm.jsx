import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [isOtpSent, setIsOtpSent] = useState(false);

  const validatePhoneNumber = () => {
    let formErrors = {};
    // Check if the phone number is 10 digits long, excluding the + symbol if present
    const digitsOnly = phoneNumber.replace(/\D/g, ""); // Remove non-digit characters
    if (!phoneNumber) {
      formErrors.phoneNumber = "Phone number is required";
    } else if (digitsOnly.length !== 10) {
      formErrors.phoneNumber = "Enter a valid 10-digit phone number";
    }
    return formErrors;
  };

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    const formErrors = validatePhoneNumber();
    if (Object.keys(formErrors).length === 0) {
      setIsOtpSent(true);
      // Mock sending OTP
      console.log("OTP sent to:", phoneNumber);
    } else {
      setErrors(formErrors);
    }
  };

  const validateOtp = () => {
    let formErrors = {};
    if (!otp) {
      formErrors.otp = "OTP is required";
    }
    return formErrors;
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateOtp();
    if (Object.keys(formErrors).length === 0) {
      // Mock submitting OTP for verification
      console.log("Submitting OTP:", otp);
      // Redirect or handle successful OTP submission here
    } else {
      setErrors(formErrors);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Ensure only numbers and + symbol can be entered, and restrict to 10 digits (excluding +)
    const digitsOnly = value.replace(/\D/g, ""); // Remove non-digit characters
    if (/^\+?[0-9]*$/.test(value) && digitsOnly.length <= 10) {
      setPhoneNumber(value);
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('your-image-url')" }}
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-lg w-11/12 sm:w-96 ">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <p className="text-center text-gray-600 mb-4">Access your account</p>

        {!isOtpSent ? (
          <form onSubmit={handlePhoneNumberSubmit}>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="+1234567890"
                title="Please enter a valid phone number with numbers only, optionally starting with a +."
                maxLength="15"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold p-2 rounded-xl mt-4 transition duration-200 ease-in-out"
            >
              Submit
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <div className="mb-4">
              <label htmlFor="otp" className="block text-gray-700">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                placeholder="Enter your Otp"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="6"
              />
              {errors.otp && (
                <p className="text-red-500 text-xs mt-1">{errors.otp}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded-xl mt-4 transition duration-200 ease-in-out"
            >
              Verify OTP
            </button>
          </form>
        )}
        <div className=" flex items-center justify-center gap-2 mt-5">
          <span className="">Don't have an account?</span>
        <Link
          to="/userSignup"
          className="text-blue-600 hover:text-blue-800 underline transition duration-200"
        >
          Signup here
        </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
