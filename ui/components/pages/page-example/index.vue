<template>
  <div>
    <header-primary title="Example" description="Page's description" />
    <flex-container class="margin--top--l">
      <flex-item xs12 s6>
        <p>Bloc TEST</p>
      </flex-item>
      <flex-item xs12 s6>
        <p>Bloc TEST</p>
      </flex-item>
    </flex-container>
  </div>
</template>

<script>
import HeaderPrimary from "@ui/components/segments/headers/header-primary";
import { FlexContainer, FlexItem } from "@ui/components/globals/grid";

export default {
  name: "PageExemple",
  components: {
    HeaderPrimary,
    FlexContainer,
    FlexItem
  }
};
</script>
