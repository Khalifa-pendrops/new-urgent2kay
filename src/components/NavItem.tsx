import React from "react";

interface NavItemProps {
  icon: React.ReactNode;
  name: string;
}

function NavItem({ icon, name }: NavItemProps) {
  return (
    <div className="flex items-center gap-2 p-4 hover:bg-primary-900 hover:translate-x-3 rounded-md cursor-pointer transition-transform duration-300">
      <div className="text-white text-3xl">{icon}</div>
      <div className="text-md  text-white ml-2">{name}</div>
    </div>
  );
}

export default NavItem;
