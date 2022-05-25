<template>
  <svg
    :width="width"
    :height="height"
    :class="className"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class="icon"
  >
    <polygon :opacity="getOpacity(1)" points="7 10 12 3 17 10" class="icon__path" />
    <polygon :opacity="getOpacity(-1)" points="7 21 12 14 17 21" transform="rotate(180 12 17.5)" class="icon__path" />
  </svg>
</template>

<script>
import IconBase from "../icon-base";

export default {
  name: "IconClose",
  extends: IconBase,
  props: {
    direction: {
      type: Number
    }
  },
  methods: {
    getOpacity(value) {
      return this.direction?.value === value ? 1 : 0.35;
    }
  }
};
</script>
