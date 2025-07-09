import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "../features/auth/Signup";

const OurRoute = () => {
  return (
    <Routes>
      {/* Default route */}
      {/* <Route path="/" element={<LandingPage />} /> */}

      {/* Public pages go here*/}
      <Route path="/sign-up" element={<Signup label="Click Me" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default OurRoute;
