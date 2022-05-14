<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default{
  name:'AuthLayout'
}
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
  @apply bg-slate-800 bg-opacity-10 flex justify-center items-start pt-10;
}
</style>
