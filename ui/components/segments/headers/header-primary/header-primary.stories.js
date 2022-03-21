import HeaderPrimary from ".";

export default {
  title: "segments/headers/header-primary",
  component: HeaderPrimary,
  argTypes: {
    title: { control: "text", defaultValue: "Title" },
    description: { control: "text", defaultValue: "Description" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderPrimary },
  template: `<header-primary v-bind='$props'/>`
});

export const Story = Template.bind({});
Story.storyName = "default";
