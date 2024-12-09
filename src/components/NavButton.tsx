import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavButton.css"; // Optional: Add custom styles if needed

interface NavButtonProps {
  to: string; // Target route
  label: string; // Button text
  className?: string; // Optional for custom styles
}

const NavButton: React.FC<NavButtonProps> = ({ to, label, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button onClick={handleClick} className={`nav-button ${className || ""}`}>
      {label}
    </button>
  );
};

export default NavButton;
