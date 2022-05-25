<template>
  <div>
    <h1 class="margin--top--null margin--bottom--s">{{ title }}</h1>
    <p class="margin--null">{{ description }}</p>
    <button-primary class="margin--top--s">Voir plus</button-primary>
  </div>
</template>

<script>
import { ButtonPrimary } from "@ui/components/globals/buttons";

export default {
  name: "HeaderPrimary",
  components: {
    ButtonPrimary
  },
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    }
  }
};
</script>
