<template>
  <router-link :to="{ path: to }" class="hover:underline">{{ title }}</router-link>
</template>

<script>
export default {
  name: "LinkAz",
  props: {
    title: {
      type: String,
      default: "LinkAz",
    },
    to:{
        type:String,
        default:"#"
    }
  },
};
</script>
