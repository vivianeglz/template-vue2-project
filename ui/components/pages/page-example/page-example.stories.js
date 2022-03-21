import PageExample from ".";

export default {
  title: "pages/page-example",
  component: PageExample,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageExample },
  template: `<page-example v-bind='$props'/>`
});

export const Story = Template.bind({});
Story.storyName = "default";
