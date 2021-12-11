<template>
  <button class="rounded bg-green-500 text-gray-200 p-2" @click="buttonClick">
    <beat-loader :loading="isLoading" :color="'#68d391'" :size="8" />
    <span v-show="!isLoading"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "VxButton",

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    buttonClick() {
      this.$emit("custom-click");
    },
  },
};
</script>
