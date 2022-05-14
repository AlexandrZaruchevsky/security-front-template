<template>
  <div class="inline-block relative">
    <div  class="" :class="{'bg-slate-100 rounded-t':isView}" @mouseenter="isView = true" @mouseleave="isView = false">
      <div class="hover:cursor-pointer" >
        <slot name="title" />
      </div>
      <div v-if="isView" class="flex flex-col absolute w-full bg-slate-100 rounded-b">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: {},
  setup() {
    const isView = ref(false);
    return {
      isView,
    };
  },
};
</script>
