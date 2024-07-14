const Button = (props: ButtonProps) => {
  const { backgroundColor, buttonClass, iconClass, label, onClickFunction } =
    props;
  return (
    <button
      style={{ backgroundColor: `${backgroundColor}` }}
      className={buttonClass}
      onClick={onClickFunction}
    >
      <i className={iconClass} />
      {label}
    </button>
  );
};

export default Button;

interface ButtonProps {
  backgroundColor: string;
  buttonClass: string;
  iconClass: string;
  label: string;
  onClickFunction: () => void;
}
