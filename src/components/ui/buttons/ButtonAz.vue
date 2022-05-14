<template>
  <button 
    class="px-2 py-1 bg-opacity-10 rounded focus:outline-none hover:shadow hover:bg-opacity-70" 
  >{{ title }}</button>
</template>
<script>
export default {
  name: "ButtonAz",
  props: {
    title: {
      type: String,
      default: "ButtonAz",
    },
  },
};
</script>
