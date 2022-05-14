<template>
  <div class="dashboard">
    <div class="dashboard-header">{{title}}</div>
    <div class="dashboard-body">
      <slot />
    </div>
    <div class="dashboard-footer"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Dashboard",
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  @apply flex flex-col border w-full;
  .dashboard-header {
    @apply flex border-b p-4 justify-center text-2xl;
  }
  .dashboard-body{
    @apply flex p-4 gap-2;
  }
}
</style>
