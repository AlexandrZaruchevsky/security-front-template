<template>
  <div>
    <app-bar />
    <div class="p-2">
      <slot />
    </div>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
export default {
  components: { AppBar },
  name: "DefaultLayout",
};
</script>
