// please ignore. was trying out something
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";

const ResultPage: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center mt-20">
        <p>No result data found. Please complete the evaluation form first.</p>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => navigate("/sign-up")}
        >
          Go Back
        </button>
      </div>
    );
  }

  const { formData, score, result } = state;

  const downloadPDF = () => {
    const content = document.getElementById("pdf-content");
    if (content) {
      const opt = {
        margin: 0.5,
        filename: "petition-result.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      setTimeout(() => {
        html2pdf().set(opt).from(content).save();
      }, 500);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border rounded shadow">
      {/* Printable content */}
      <div
        id="pdf-content"
        style={{
          width: "100%",
          maxWidth: "700px",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          lineHeight: "1.6",
          margin: "0 auto",
          backgroundColor: "#fff",
        }}
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Full Evaluation Result
        </h2>

        <table
          style={{
            width: "100%",
            marginBottom: "20px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "left", paddingBottom: "8px" }}>
                Question
              </th>
              <th style={{ textAlign: "left", paddingBottom: "8px" }}>
                Answer
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(formData).map(([key, value]) => (
              <tr key={key}>
                <td style={{ paddingBottom: "6px" }}>
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (s) => s.toUpperCase())}
                </td>
                <td style={{ paddingBottom: "6px" }}>{value ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p>
          <strong>Score:</strong> {score}/100
        </p>
        <p>
          <strong>Result:</strong>{" "}
          {result === "pass" ? "✅ Eligible" : "❌ Not Eligible"}
        </p>
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Download PDF
        </button>
        <button
          onClick={() => navigate("/sign-up")}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Back to Evaluation
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
