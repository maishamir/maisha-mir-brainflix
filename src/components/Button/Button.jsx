import "./Button.scss";

function Button({ buttonText}) {
  return (
    <button className="button">
      <p className="button__text">{buttonText}</p>
    </button>
  );
}

export default Button;
