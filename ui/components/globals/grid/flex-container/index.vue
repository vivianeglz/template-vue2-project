<script>
import mapPropsToGridClasses from "@ui/components/globals/grid/_helpers/mapPropsToGridClasses";

export default {
  name: "FlexContainer",
  functional: true,
  render(h, { props, listeners, children, data }) {
    const tagProp = props.tag || "div";
    return h(
      tagProp,
      {
        attrs: {
          class: `grid ${mapPropsToGridClasses(props, "grid")} ${data.staticClass || ""}`
        },
        on: listeners
      },
      children
    );
  }
};
</script>
