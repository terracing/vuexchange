<template>
  <div id="app" class="container mx-auto bg-gray-200">
    <vx-header />
    <router-view class="p-4 min-height-3/4" />
  </div>
</template>

<script>
import VxHeader from "@/components/VxHeader"

export default {
  name: "App",
  components: { VxHeader },
};
</script>

<style>
#app {
  
}
</style>
