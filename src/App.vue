<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const route = useRoute();
const layout = computed(() => {
  return route.meta.layout || "default-layout";
});
</script>

<style lang="scss" scoped>
div{
  @apply text-slate-700
}
</style>