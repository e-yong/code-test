const Textfield = (props: TextfieldProps) => {
  props;
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      minLength={props.minLength}
      maxLength={props.maxLength}
      size={props.size}
    ></input>
  );
};

export default Textfield;

interface TextfieldProps {
  maxLength: number;
  minLength: number;
  placeholder: string;
  size: number;
}
