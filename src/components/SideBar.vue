<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <link-az :title="title" to="/" />
    </div>
    <div class="sidebar-body">
      <slot name="default" />
    </div>
    <div class="sidebar-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const title = ref(import.meta.env.VITE_APP_NAME);
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 200px;
  @apply h-full;
  .sidebar-header {
    @apply text-center whitespace-nowrap text-2xl p-2 bg-slate-200;
  }
}
</style>
