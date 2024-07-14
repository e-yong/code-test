import "../styles/Textfield.css";
import { useState, useEffect } from "react";

/** A reusable textfield component for user input */
const Textfield = (props: {
  /** placeholder value for the text input before user input any values */
  maxLength: number;
  /** minimum length of text the user needs to input */
  minLength: number;
  /** maximum length of text the user needs to input */
  placeholder: string;
  /** size controls the size of font of the input textfield */
  size: string;
}) => {
  const {
    placeholder = "initial placeholder",
    minLength = 0,
    maxLength = 10,
    size = 20,
  } = props;

  const [color, setColor] = useState("");

  useEffect(() => {}, [color]);

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const event = e.target as HTMLTextAreaElement;
    if (event.value.length < minLength) {
      setColor("red");
    } else {
      setColor("black");
    }
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      style={{ fontSize: `${size}px`, color: `${color}` }}
      className="textfield-style"
      onChange={(e) => {
        onChangeHandler(e);
      }}
    ></input>
  );
};

export default Textfield;
