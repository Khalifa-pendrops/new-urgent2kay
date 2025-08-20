import React from "react";
import preloader from "../assets/preloader.png";

export const Preloader = () => {
  return (
    // Preloader.component.tsx
    <div className="fixed inset-0 flex items-start mt-[5%] justify-center z-50">
      <div className="animate-spin rounded-full">
        <img src={preloader} className="h-12 w-12" alt="Loading..." />
      </div>
    </div>
  );
};
