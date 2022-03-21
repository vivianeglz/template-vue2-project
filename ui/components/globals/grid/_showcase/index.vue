<template>
  <div class="showcase-container">
    <p class="text-heading--s margin--top--s margin--bottom--s">Default</p>
    <flex-container>
      <flex-item s1>
        <div class="inner">s1</div>
      </flex-item>
      <flex-item s2>
        <div class="inner">s2</div>
      </flex-item>
      <flex-item s3>
        <div class="inner">s3</div>
      </flex-item>
      <flex-item s6>
        <div class="inner">s6</div>
      </flex-item>
    </flex-container>
    <flex-container class="margin--bottom--m">
      <flex-item s12 m6 l4>
        <div class="inner">s12 m6 l4</div>
      </flex-item>
      <flex-item s12 m6 l4>
        <div class="inner">s12 m6 l4</div>
      </flex-item>
      <flex-item s12 m6 l4>
        <div class="inner">s12 m6 l4</div>
      </flex-item>
    </flex-container>

    <p class="text-heading--s margin--top--s margin--bottom--s">No gutter</p>
    <flex-container no-gutter class="margin--bottom--m">
      <flex-item s12 m6 l4>
        <div class="inner">s12 m6 l4</div>
      </flex-item>
      <flex-item s12 m6 l4>
        <div class="inner">s12 m6 l4</div>
      </flex-item>
      <flex-item s12 m6 l4>
        <div class="inner">s12 m6 l4</div>
      </flex-item>
    </flex-container>

    <p class="text-heading--s margin--top--s margin--bottom--s">Gutter M</p>
    <flex-container gutter-m class="margin--bottom--m">
      <flex-item s12 m6 l4>
        <div class="inner">s12 m6 l4</div>
      </flex-item>
      <flex-item s12 m6 l4>
        <div class="inner">s12 m6 l4</div>
      </flex-item>
      <flex-item s12 m6 l4>
        <div class="inner">s12 m6 l4</div>
      </flex-item>
    </flex-container>

    <p class="text-heading--s margin--top--s margin--bottom--s">Gutter L</p>
    <flex-container gutter-l class="margin--bottom--m">
      <flex-item s12 m6 l4>
        <div class="inner">s12 m6 l4</div>
      </flex-item>
      <flex-item s12 m6 l4>
        <div class="inner">s12 m6 l4</div>
      </flex-item>
      <flex-item s12 m6 l4>
        <div class="inner">s12 m6 l4</div>
      </flex-item>
    </flex-container>

    <p class="text-heading--s margin--top--s margin--bottom--s">Offset</p>
    <flex-container gutter-m class="margin--bottom--m">
      <flex-item s1 v-for="i in 12" :key="i">
        <div class="inner">s1</div>
      </flex-item>
      <flex-item s4 offset2>
        <div class="inner">s4 offset2</div>
      </flex-item>
    </flex-container>
  </div>
</template>

<script>
import { FlexContainer, FlexItem } from "@ui/components/globals/grid";

export default {
  name: "GridShowcase",
  components: {
    FlexItem,
    FlexContainer
  }
};
</script>

<style scoped>
.showcase-container {
  border: 1px dashed #bbb;
}

.inner {
  background-color: #ddd;
  margin-bottom: 1rem;
  border-radius: 4px;
  padding: 0.5rem;
}
</style>
