import axios from "axios";
import { IoIosMailUnread } from "react-icons/io";
import { Button } from "../../components/Button.component";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const baseUrl = "https://urgent2kay.onrender.com/api/auth";
function VerifyEmail() {
  const [countdownTimer, setCountdownTimer] = useState(30);
  const [countdownActive, setCountdownActive] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const storedEmail = localStorage.getItem("signupEmail");
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
    // This could be an API call that checks the user's verification status
    axios
      .get(`${baseUrl}/check-verification?email=${email}`)
      .then((response) => {
        return response.data.isVerified; // Assuming the API returns an object with isVerified property
      })
      .catch((error) => {
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
    setCountdownTimer(30); // Reset the timer to 30 seconds
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
    <div className="flex flex-row min-h-screen w-screen bg-gray-100 transition-all duration-300 ease-in-out">
      <div className=" h-screen bg-gray-100 w-[50%]"></div>
      {/* ==========================Image================================== */}
      <div className=" h-screen w-[50%] bg-gray-100 flex flex-col items-center p-32">
        <div className="flex flex-col items-center justify-center w-[80%] h-full shadow-2xl bg-white rounded-2xl p-8">
          <h1 className="text-2xl font-bold mb-4">Verify Your Email</h1>
          <p className="text-gray-600 mb-4">
            Please check your email for a verification link.
          </p>
          <p className="text-gray-600 mb-4">
            If you didn't receive an email, you can request a new one.
          </p>
          <IoIosMailUnread className="text-6xl text-blue-500 mb-4" />
          <Button
            className="bg-blue-500 p-2 rounded-full text-semibold w-[70%] mt-4"
            label={"Resend Verification Email"}
            type="button"
            onClick={() => {
              handleResendVerificationEmail();
            }}
            disabled={countdownActive && countdownTimer > 0}
          ></Button>
          <div
            className={`mt-4 ${
              countdownActive
                ? "text-red-500 visible"
                : "text-gray-500 invisible"
            }`}
          >
            Resend email: <span id="countdown">{countdownTimer}</span> seconds
          </div>
        </div>
      </div>
    </div>
  );
}
export default VerifyEmail;
