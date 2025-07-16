import { Routes, Route, Navigate } from "react-router-dom";
import EvaluationForm from "../features/auth/EvaluationForm";
import LandingPage from "../layouts/LandingPage";
import ResultPage from "../features/auth/ResultPage";

const OurRoute = () => {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<LandingPage />} />

      {/* Public pages go here*/}
      <Route path="/sign-up" element={<EvaluationForm />} />
      <Route path="/result-page" element={<ResultPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default OurRoute;
