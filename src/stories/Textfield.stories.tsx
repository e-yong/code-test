import Textfield from "../components/Textfield";
import "../styles/Textfield.css";

export default {
  tags: ["autodocs"],
  title: "Textfield",
  component: Textfield,
};

export const Template = (args: {
  maxLength: number;
  minLength: number;
  placeholder: string;
  size: string;
}) => <Textfield {...args} />;

export const TemplateTextfield1 = Template.bind({
  maxLength: 20,
  minLength: 10,
  placeholder: "this is template 1 placeholder",
  size: "14",
  className: "textfield-style",
});
