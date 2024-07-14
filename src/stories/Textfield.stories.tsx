import Textfield from "../components/Textfield";
import "../styles/Textfield.css";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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

Template.play = async ({ canvasElement }) => {
  let canvas = within(canvasElement);
  let textfield = await canvas.getByTestId("textbox");

  await expect(textfield.innerText).toBe("");
  await expect(textfield).toHaveStyle("fontsize: 20px");
};
