<template>
  <div class="card">
    <div class="card-header">{{ header }}</div>
    <div class="card-body">
      <slot name="default"/>
    </div>
    <div class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name:"CardAuthAz",
  props: {
    header: {
      type: String,
      default: "Auth header",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {

  @apply bg-white;

  .card-header{
    @apply px-2 py-1 bg-gradient-to-r from-slate-600 to-slate-400 text-white text-lg;
  }

}
</style>
