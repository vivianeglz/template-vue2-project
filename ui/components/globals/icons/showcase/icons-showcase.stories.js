import Showcase from ".";

export default {
  title: "globals/icons/showcase",
  component: Showcase,
  argTypes: {
    color: {
      options: ["dark", "light", "colored"],
      control: { type: "select" }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Showcase },
  template: `<showcase v-bind='$props'/>`
});

export const Story = Template.bind({});
Story.storyName = "default";
Story.args = {
  color: "dark"
};
