import "../styles/Button.css";

/** A reusable Button component for user interactions */
export const Button = (props: {
  /** this is to change the background color of the button */
  backgroundColor: string;
  /** this is to configure the icons for the button */
  iconClass: string;
  /** this is to change the label-text showed on the button */
  label: string;
  /** this is to handle what happens when a user trigger the button */
  clickHandler: () => void;
  /** size controls the size of the button */
  size: string;
}) => {
  const {
    backgroundColor,
    iconClass,
    label = "initial value",
    clickHandler = () => {},
    size = "small",
  } = props;
  let buttonSize = "";

  if (size == "small") {
    buttonSize = "20px 20px";
  } else if (size == "large") {
    buttonSize = "60px 60px";
  } else {
    buttonSize = "40px 40px";
  }
  return (
    <button
      name={"buttonName"}
      style={{
        backgroundColor: `${backgroundColor}`,
        padding: `${buttonSize}`,
      }}
      className={"button-style"}
      onClick={clickHandler}
    >
      <i className={iconClass} />
      {label}
    </button>
  );
};

export default Button;
