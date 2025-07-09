import React from "react";

interface ButtonProps {
  label: string;
}

const Signup = (props: ButtonProps) => {
  return (
    <div className="flex items-center justify-center h-screen p-4">
      <form>
        <h2>This na sign up form!</h2>
        <button>if you touch: {props.label}</button>
      </form>
    </div>
  );
};

export default Signup;
