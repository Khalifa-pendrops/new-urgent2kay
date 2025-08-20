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
    <div className="bg-white rounded-2xl p-2.5 max-md:h-[100px] max-md:relative md:px-6 py-1 md:py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col ">
          <h3 className="md:text-lg text-md font-semibold">{title}</h3>
          <p className="text-gray-800 text-2xl md:text-5xl mt-4 max-md:bottom-5 max-md:left-5 max-md:absolute">
            {value}
          </p>
        </div>
        <div className="text-3xl md:text-5xl mr-2 text-warning-500 max-md:mt-4 ">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
