<template>
  <div class="card">
    <div class="card-header">{{title}}</div>
    <div class="card-body">
      <slot name="default"/>
    </div>
    <div class="card-footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default{
  name:'CardAz',
  props:{
    title:{
      type:String,
      default:'Card header'
    }
  }
}
</script>
<style lang="scss" scoped>
.card{
  @apply bg-white;
  .card-header{
    @apply flex justify-center px-2 py-1 text-xl;
    @apply bg-gradient-to-r from-teal-700 to-slate-400 text-slate-50;
  }
  .card-body{
    @apply p-2;
  }
}
</style>