import React from "react";
import { FaRegEye, FaRegEyeSlash, FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Preloader } from "../../components/Preloader.component";

import { Button } from "../../components/Button.component";
import whiteLogo from "../../assets/white-logo.svg";
import purpleLogo from "../../assets/purple-logo.svg";
function Signup() {
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
      const response = await axios.post(
        `${baseUrl}/api/auth/register`,
        signupData
      );
      // localStorage.setItem("signupEmail", email); // Store email in localStorage for later use
      console.log("Signup successful:", response.data);
      setIsLoading(false);
      setSuccessMessage("Signup successful! Please log in.");
      setTimeout(() => {
        navigate("/verify-email", { state: { email } }); // Redirect to verify email page after successful signup
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
    <div className="grid grid-cols-2 w-screen min-h-screen max-sm:grid-cols-1">
      <div className="bg-[url(/src/assets/image_fx.png)] bg-no-repeat bg-cover min-sm:bg-none min-md:bg-[url(/src/assets/image_fx.png)]">
        <div className="px-8 pt-8 w-full min-h-screen flex flex-col max-sm:hidden md:visible">
          <div className="flex flex-row justify-start">
            <Link className="" to="/">
              <img
                src={whiteLogo}
                alt="White logo"
                className="w-[200px] mb-7"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center  ">
            <div className="border-2 border-solid border-neutral-200 px-12 pt-12 rounded-4xl bg-amber-50/70 min-h-[80vh] w-[80%] max-sm:hidden min-md:w-[80%]">
              <p>
                Welcome to{" "}
                <span className="font-bold text-neutral-800">Urgent 2Kay</span>
              </p>
              <h2 className="mb-4 text-5xl text-neutral-800 italic my-8">
                Skip the hassle. <br />
                send & pay bills in one click.
              </h2>
              <p>
                No more scattered requests or late fees - just simple, direct
                payment
              </p>
            </div>
          </div>
        </div>
        {/* <img src={heroLogo} alt="hero logo" className="sm:w-[100%] sm:m-auto" /> */}
      </div>
      <div className="bg-primary-50 px-6 rounded shadow-md w-full min-h-screen flex flex-col items-center justify-center min-sm:hidden min-md:flex">
        <div className="flex flex-row justify-start min-sm:hidden">
          <img src={purpleLogo} alt="Purple logo" className="w-[200px] mb-3" />
        </div>
        <h2 className="mb-4 text-lg text-neutral-800 italic min-sm:hidden">
          Skip the hassle & pay bills in one click.
        </h2>
        {isLoading && <Preloader />}
        {successMessage && (
          <div className="text-green-500 font-semibold">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 font-semibold">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit} className=" max-w-md">
          <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
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
          <div className="text-sm text-gray-500 relative ">
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
            <span
              className={`text-red-500 text-sm absolute ${
                password.length > 0 && password.length < 6
                  ? "visible"
                  : "invisible"
              }`}
            >
              Password must be at least 6 characters long.
            </span>
          </div>
          <br />
          <label className="">Confirm Password</label>
          <br />
          <div className="text-sm text-gray-500">
            <div className="relative">
              <input
                required
                className="border-gray-300 border-2 p-2 w-full rounded-full "
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
            <span
              className={`text-red-500 text-sm absolute mb-4 ${
                confirmPassword.length > 0 && password !== confirmPassword
                  ? "visible"
                  : "invisible"
              }`}
            >
              Passwords do not match.
            </span>
          </div>
          <br />
          <div className="text-sm text-gray-500 w-full ">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="text-primary-700 font-bold">
              Terms and Conditions
            </Link>
            <br />
            <Button
              label="Sign Up"
              className="my-4 w-full"
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
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-primary-700 font-bold " to="/login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
