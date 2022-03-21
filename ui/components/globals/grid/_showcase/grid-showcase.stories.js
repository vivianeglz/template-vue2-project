import GridShowcase from "@ui/components/globals/grid/_showcase";

export default {
  title: "globals/grid/showcase",
  component: GridShowcase,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GridShowcase },
  template: "<grid-showcase v-bind='$props' />"
});

export const Story = Template.bind({});
Story.storyName = "default";
