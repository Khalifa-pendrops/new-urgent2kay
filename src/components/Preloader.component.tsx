import React from "react";

export const Preloader = () => {
  return (
    <div className="flex items-center justify-center mb-4">
      <svg
        className="animate-spin h-6 w-6 text-blue-600 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8z"
        ></path>
      </svg>
      <span className="text-blue-600 font-semibold">Submitting...</span>
    </div>
  );
};
