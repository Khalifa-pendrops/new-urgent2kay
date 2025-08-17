import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Card({
  title,
  content,
  icon,
  color,
  hoverColor,
}: {
  title: string;
  content: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
}) {
  return (
    <div
      className={`group rounded-2xl p-6 shadow-md hover:shadow-2xl hover:translate-y-2 transition-all duration-300 cursor-pointer text-white ${color} hover:${hoverColor}`}
    >
      <div className="text-4xl p-4 text-warning-500">{icon}</div>
      <h3 className="font-semibold text-2xl p-4">{title}</h3>
      <p className="p-4">{content}</p>
      <button className="mt-2 text-white  py-1 px-2 cursor-pointer">
        Get Started
        <FaArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform duration-300" />
      </button>
    </div>
  );
}

export default Card;
