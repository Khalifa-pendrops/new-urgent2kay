import React from "react";

function MiniCard({
  title,
  icon,
  value,
}: {
  title: string;
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="bg-white rounded-2xl px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col ">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-gray-800 text-5xl mt-4">{value}</p>
        </div>
        <div className="text-5xl mr-2 text-warning-500 ">{icon}</div>
      </div>
    </div>
  );
}

export default MiniCard;
