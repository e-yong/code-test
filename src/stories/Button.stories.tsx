import Button from "../components/Button";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/Button.css";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    iconClass: {
      options: ["fa fa-home", "fa fa-bars", "fa fa-trash"],
      control: { type: "select" },
    },
    clickHandler: { action: "handleClick" },
  },
};

export const Template = (args: {
  backgroundColor: string;
  iconClass: string;
  label: string;
  clickHandler: () => void;
  size: string;
}) => <Button {...args} />;

export const TemplateButton1 = Template.bind({
  backgroundColor: "",
  iconClass: "",
  label: "Template Button 1 label",
  clickHandler: () => {},
  size: "small",
});
