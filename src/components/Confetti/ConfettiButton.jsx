import { useState } from "react";
import Confetti from "react-confetti";
import "./confetti.scss";

const ConfettiButton = ({ text }) => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleClick = () => {
    setIsConfettiActive(true);
    setTimeout(() => {
      setIsConfettiActive(false);
    }, 5000);
  };

  return (
    <div>
      <button className="about-page-confetti" onClick={handleClick}>
        {text}
      </button>
      {isConfettiActive && (
        <Confetti
          width={window.innerWidth - 50}
          height={window.innerHeight + 350}
          recycle={false}
        />
      )}
    </div>
  );
};

export default ConfettiButton;
