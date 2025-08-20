import axios from "axios";
import { IoIosMailUnread } from "react-icons/io";
import { Button } from "../../components/Button.component";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { useLocation } from "react-router-dom";

import whiteLogo from "../../assets/white-logo.svg";
import purpleLogo from "../../assets/purple-logo.svg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Preloader } from "../../components/Preloader.component";
const baseUrl = "https://urgent2kay.onrender.com/api/auth";
function VerifyEmail() {
  const [countdownTimer, setCountdownTimer] = useState(59);
  const [countdownActive, setCountdownActive] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    const storedEmail = location.state?.email;
    // const storedEmail = localStorage.getItem("signupEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      // Check if the email is verified
      checkVerificationStatus().then((isVerified) => {
        if (isVerified) {
          navigate(`${baseUrl}/login`); // Redirect to login if email is verified
        }
      });
    }
  }, []);

  function checkVerificationStatus() {
    // Logic to check if the email is verified
    setIsLoading(true);
    axios
      .get(`${baseUrl}/check-verification?email=${email}`)
      .then((response) => {
        setIsLoading(false);
        setSuccessMessage("Email is verified.");
        return response.data.isVerified; // Assuming the API returns an object with isVerified property
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(
          "Error checking verification status. Please try again."
        );
        console.error("Error checking verification status:", error);
        return false; // Assume not verified if there's an error
      });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(false); // Simulate that the email is not verified
      }, 2000);
    });
  }
  function handleResendVerificationEmail() {
    // Logic to resend the verification email
    setCountdownActive(true);
    // setIsLoading(false);
    setCountdownTimer(59); // Reset the timer to 59 seconds
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownActive && countdownTimer > 0) {
        setCountdownTimer((prev) => prev - 1);
      } else if (countdownTimer === 0) {
        setCountdownActive(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownActive, countdownTimer]);
  return (
    <div className="grid relative grid-cols-2 w-screen min-h-screen max-sm:grid-cols-1">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 z-10">
          <Preloader />
        </div>
      )}
      <div className="bg-[url(/src/assets/image_fx.png)] bg-no-repeat bg-cover min-sm:bg-none min-md:bg-[url(/src/assets/image_fx.png)]">
        <div className="px-8 pt-8 w-full min-h-screen flex flex-col max-sm:hidden md:visible">
          <div className="flex flex-row justify-start">
            <img src={whiteLogo} alt="White logo" className="w-[200px] mb-7" />
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
      <div className="bg-primary-50 px-6 rounded shadow-md w-full min-h-screen flex flex-col items-center justify-center max-sm:flex max-sm:flex-col max-sm:justify-start min-md:flex">
        <div className="flex flex-row justify-start max-sm:my-10">
          <img src={purpleLogo} alt="Purple logo" className="w-[200px] mb-3" />
        </div>
        <h2 className="mb-4 text-lg text-neutral-800 italic max-sm:hidden">
          Skip the hassle & pay bills in one click.
        </h2>
        {isLoading && <Preloader />}
        {successMessage && (
          <div className="text-green-500 font-semibold">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 font-semibold">{errorMessage}</div>
        )}
        <h1 className="text-2xl font-bold mb-4">Verify Your Email</h1>{" "}
        <p className="text-gray-600 mb-4 max-sm:text-sm">
          You are almost there! We've sent a verification link to
          a*****@gmail.com. <br />
          You need to verify your email address to log into your urgent 2kay
          account
        </p>{" "}
        <p className="text-gray-600 mb-4">
          If you didn't receive an email, you can request a new one.{" "}
        </p>
        <IoIosMailUnread className="text-6xl text-warning-500 mb-4 animate-pulse" />
        <Button
          label="Resend Email"
          className="my-4 w-[20vw] max-sm:w-[70vw]"
          icon={<FaArrowAltCircleRight />}
          type={"button"}
          disabled={countdownActive && countdownTimer > 0}
          onClick={() => {
            handleResendVerificationEmail();
          }}
        />
        Already have an account?{" "}
        <Link className="text-primary-700 font-bold " to="/login">
          Log in
        </Link>
        <div
          className={`mt-4 ${
            countdownActive ? "text-red-500 visible" : "text-gray-500 invisible"
          }`}
        >
          Resend email: <span id="countdown">{countdownTimer}</span> seconds
        </div>
      </div>
    </div>
    // <div className="flex flex-row min-h-screen w-screen bg-gray-100 transition-all duration-300 ease-in-out">
    //   <div className=" h-screen bg-gray-100 w-[50%]"></div>
    //   {/* ==========================Image================================== */}
    //   <div className=" h-screen w-[50%] bg-gray-100 flex flex-col items-center p-32">
    //     <div className="flex flex-col items-center justify-center w-[80%] h-full shadow-2xl bg-white rounded-2xl p-8">
    //       <h1 className="text-2xl font-bold mb-4">Verify Your Email</h1>
    //       <p className="text-gray-600 mb-4">
    //         Please check your email for a verification link.
    //       </p>
    //       <p className="text-gray-600 mb-4">
    //         If you didn't receive an email, you can request a new one.
    //       </p>
    //       <IoIosMailUnread className="text-6xl text-blue-500 mb-4" />
    //       <Button
    //         className="bg-blue-500 p-2 rounded-full text-semibold w-[70%] mt-4"
    //         label={"Resend Verification Email"}
    //         type="button"
    //         onClick={() => {
    //           handleResendVerificationEmail();
    //         }}
    //         disabled={countdownActive && countdownTimer > 0}
    //       ></Button>
    //       <div
    //         className={`mt-4 ${
    //           countdownActive
    //             ? "text-red-500 visible"
    //             : "text-gray-500 invisible"
    //         }`}
    //       >
    //         Resend email: <span id="countdown">{countdownTimer}</span> seconds
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default VerifyEmail;
