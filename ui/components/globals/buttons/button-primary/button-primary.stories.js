import ButtonPrimary from ".";

export default {
  title: "globals/buttons/button-primary",
  component: ButtonPrimary,
  argTypes: {
    tag: {
      control: false
    },
    size: { options: ["s", "m"], control: { type: "radio" } },
    disabled: { control: { type: "boolean" }, defaultValue: false }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonPrimary },
  template: `<button-primary v-bind='$props'>Découvrir</button-primary>`
});

export const Story = Template.bind({});
Story.storyName = "default";
