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
      className={` text-white flex justify-center items-center p-4 rounded-full mb-4 text-lg 
        ${
          disabled
            ? "bg-neutral-400 hover:cursor-disabled rounded-full"
            : "bg-primary-500 hover:bg-primary-700 cursor-pointer rounded-full transition-all duration-300 ease-in-out"
        } ${className}`}
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
      {label}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};
