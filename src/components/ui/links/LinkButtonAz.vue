<template>
  <router-link class="hover:text-slate-50 hover:bg-opacity-80 bg-opacity-10 rounded px-2 py-1" :to="{path:to}">{{title}}</router-link>
</template>

<script>
export default {
  name: "LinkButtonAz",
  props:{
    title:{
      type:String,
      default:'Title'
    },
    to:{
      type:String,
      default:'#'
    }
  }
};
</script>
