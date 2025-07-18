export interface ButtonProps {
  label: string;
  className?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  icon,
  type,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={` text-white  ${className}`}
      type={type ?? "button"}
      onClick={() => {
        if (type === "submit") {
          return;
        }
        if (typeof onClick === "function") {
          onClick();
        }
      }}
      disabled={disabled}
      // onClick={onClick ? onClick : undefined}
    >
      <span
        className={`flex items-center justify-center cursor-pointer p-4 max-w-full h-full  ${
          disabled
            ? "bg-gray-400 cursor-disabled hover:bg-gray-400 rounded-full"
            : " hover:bg-blue-700 cursor-pointer rounded-full transition duration-300 ease-in-out"
        } `}
      >
        {label}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    </button>
  );
};
