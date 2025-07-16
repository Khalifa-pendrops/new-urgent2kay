// please ignore. was trying out something
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormData = {
  phd: boolean;
  experience: boolean;
  publications: boolean;
  employerSupport: boolean;
  under40: boolean;
  jobOffer: boolean;
};

const defaultData: FormData = {
  phd: false,
  experience: false,
  publications: false,
  employerSupport: false,
  under40: false,
  jobOffer: false,
};

const EvaluationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(defaultData);
  const [score, setScore] = useState<number | null>(null);
  const [result, setResult] = useState<"pass" | "fail" | null>(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const calculateScore = () => {
    let total = 0;
    if (formData.phd) total += 20;
    if (formData.experience) total += 15;
    if (formData.publications) total += 15;
    if (formData.employerSupport) total += 20;
    if (formData.under40) total += 10;
    if (formData.jobOffer) total += 20;

    setScore(total);
    setResult(total >= 70 ? "pass" : "fail");
    setShowModal(true);

    // 🔁 Send data to backend (placeholder)
    fetch("/api/save-result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formData,
        total,
        result: total >= 70 ? "pass" : "fail",
      }),
    }).catch(console.error);
  };

  const goToResult = () => {
    navigate("/result-page", {
      state: {
        formData,
        score,
        result,
      },
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow relative bg-primary">
      <h2 className="text-xl font-bold mb-4">Free Eligibility Evaluation</h2>

      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="mb-2">
          <label className="flex items-center gap-2 capitalize">
            <input
              type="checkbox"
              name={key}
              checked={value}
              onChange={handleChange}
            />
            {key.replace(/([A-Z])/g, " $1")}
          </label>
        </div>
      ))}

      <button
        onClick={calculateScore}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>

      {/* Modal */}
      {showModal && score !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg relative w-[90%] max-w-md">
            {/* Cancel Button */}
            <button
              className="absolute top-2 right-3 text-xl text-gray-600"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-2 text-center">Your Result</h3>
            <p className="text-center text-lg">
              Score: <strong>{score}/100</strong>
            </p>
            <p
              className={`text-center mt-2 ${
                result === "pass" ? "text-green-600" : "text-red-600"
              }`}
            >
              {result === "pass"
                ? "🎉 You are likely eligible!"
                : "😢 Not likely eligible."}
            </p>

            <button
              onClick={goToResult}
              className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Full Result
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvaluationForm;
