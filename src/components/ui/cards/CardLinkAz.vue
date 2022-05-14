<template>
  <div class="card-link" :class="bgColor">
    <div class="card-link-header">
      <slot name="header" />
    </div>
    <div class="card-link-body">
      <slot name="body" />
    </div>
    <div class="card-link-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardLinkAz",
  props: {
    bgColor: {
      type: String,
      default: "bg-teal-800",
    },
  },
};
</script>

<style lang="scss" scoped>
.card-link {
  @apply border rounded bg-opacity-80 text-teal-50;
  .card-link-header {
    @apply p-4 border-b;
  }
  .card-link-body{
    @apply p-4
  }
}

.card-link:hover {
  @apply shadow-md cursor-pointer;
}
</style>
