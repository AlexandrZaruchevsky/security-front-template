<template>
  <div>
    <label>{{ label }}</label>
    <input :type="type" :placeholder="placeHolder" v-model="inputValue" />
  </div>
</template>

<script>
import { computed, watch } from "vue";
export default {
  name: "InputWithLabelAz",
  props: {
    label: {
      type: String,
      default: "Label",
    },
    type: {
      type: String,
      default: "text",
    },
    placeHolder: {
      type: String,
      default: "placeHolder",
    },
    modelValue: String,
  },
  emits:["update:modelValue"],
  setup(props, { emit }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
      // set: (value) => console.log(value),
    });
    return {
      inputValue,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  @apply flex items-center;
  label {
    @apply pr-1 w-full;
  }
  input {
    @apply px-2 py-1 border rounded border-slate-500 border-opacity-20 focus:outline-none focus:border-opacity-80 hover:shadow focus:shadow-md;
  }
}
</style>
