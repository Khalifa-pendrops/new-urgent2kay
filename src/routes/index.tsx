import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "../features/auth/Signup";
import VerifyEmail from "../features/auth/VerifyEmail";

const OurRoute = () => {
  return (
    <Routes>
      {/* Default route */}
      {/* <Route path="/" element={<LandingPage />} /> */}

      {/* Public pages go here*/}
      <Route
        path="/sign-up"
        element={
          <Signup
            label="Sign Up"
            className="bg-blue-500 font-semibold text-xl cursor-pointer rounded-full w-full h-full"
            // icon={<span className="ml-2">→</span>}
          />
        }
      />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default OurRoute;
