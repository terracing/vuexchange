<template>
  <button class="rounded" @click="buttonClick"><slot></slot></button>
</template>

<script>
export default {
  name: "VxButton",

  methods: {
    buttonClick() {
      this.$emit("custom-click");
    },
  },
};
</script>
