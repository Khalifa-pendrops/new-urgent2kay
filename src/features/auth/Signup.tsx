import React from "react";
import { FaRegEye, FaRegEyeSlash, FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Preloader } from "../../components/Preloader.component";

import { Button, type ButtonProps } from "../../components/Button.component";

function Signup(props: ButtonProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const baseUrl = "https://urgent2kay.onrender.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    const signupData = {
      firstName,
      lastName,
      email,
      phone,
      password,
    };
    try {
      // Replace with your API endpoint
      const response = await axios.post(
        `${baseUrl}/api/auth/register`,
        signupData
      );
      localStorage.setItem("signupEmail", email); // Store email in localStorage for later use
      console.log("Signup successful:", response.data);
      setIsLoading(false);
      setSuccessMessage("Signup successful! Please log in.");
      setTimeout(() => {
        navigate("/verify-email"); // Redirect to verify email page after successful signup
      }, 2000);
      // Handle successful signup (e.g., redirect to login page)
    } catch (error: unknown) {
      console.error("Error during signup:", error);
      let message = "Signup failed. Please try again.";
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        message = error.response.data.message;
      }
      setIsLoading(false);
      setErrorMessage(message);
    } finally {
      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setShowPassword(false);
      setShowConfirmPassword(false);
    }
  };

  return (
    <div className="flex h-screen p-4 m-0 w-full items-center justify-center bg-gray-50">
      <div className="bg-gray-100 p-6 rounded shadow-md w-[50%] h-full">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Our App</h2>
        <p className="mb-4">Please sign up to continue</p>
      </div>
      <div className="bg-gray-100 p-6 rounded shadow-md w-[50%] h-full flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold mb-4">Sign Up</h2>
        {isLoading && <Preloader />}
        {successMessage && (
          <div className="text-green-500 font-semibold">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 font-semibold">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <label>First Name</label>
          <br />
          <input
            required
            className="mb-4 border-gray-300 border-2 p-2 w-full rounded-full"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <label>Last Name</label>
          <br />
          <input
            required
            className="mb-4 border-gray-300 border-2 p-2 w-full rounded-full"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            required
            className="mb-4 border-gray-300 border-2 p-2 w-full rounded-full"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Phone Number</label>
          <br />
          <input
            required
            className="mb-4 border-gray-300 border-2 p-2 w-full rounded-full"
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <div className="text-sm text-gray-500 relative mb-0">
            <div className="relative">
              <input
                required
                className="border-gray-300 border-2 p-2 w-full rounded-full"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? (
                  <FaRegEye className="h-5 w-5" />
                ) : (
                  <FaRegEyeSlash className="h-5 w-5" />
                )}
              </span>
            </div>
            {password.length > 0 && password.length < 6 && (
              <span className="text-red-500 text-sm mt-0 ">
                Password must be at least 6 characters long.
              </span>
            )}
          </div>
          <br />
          <label className="mt-4">Confirm Password</label>
          <br />
          <div className="text-sm text-gray-500 mb-2 ">
            <div className="relative">
              <input
                required
                className="border-gray-300 border-2 p-2 w-full rounded-full"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showConfirmPassword ? (
                  <FaRegEye className="h-5 w-5" />
                ) : (
                  <FaRegEyeSlash className="h-5 w-5" />
                )}
              </span>
            </div>
            {confirmPassword.length > 0 && password !== confirmPassword && (
              <span className="text-red-500 text-sm">
                Passwords do not match.
              </span>
            )}
          </div>
          <br />
          <div className="text-sm text-gray-500 mb-4">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="text-blue-500">
              Terms and Conditions
            </Link>
            <br />
            <Button
              label={props.label}
              className={props.className}
              icon={<FaArrowAltCircleRight />}
              type={"submit"}
              disabled={
                isLoading ||
                !firstName ||
                !lastName ||
                !email ||
                !phone ||
                password.length < 6 ||
                password !== confirmPassword
              }

              // onClick={handleSubmit}
            />
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-blue-500" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
