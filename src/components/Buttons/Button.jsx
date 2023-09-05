import "./Button.scss";

export default function Button({ backgroundColor, onClick, text }) {
  return (
    <button
      className="button-component"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
