<template>
  <div id="app" class="container mx-auto bg-gray-200">
    <vx-header :links="links" />
    <router-view class="p-4" />
  </div>
</template>

<script>
import VxHeader from "@/components/VxHeader";

export default {
  name: "App",
  components: { VxHeader },

  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } },
        },
        {
          title: "ETH",
          to: { name: "coin-detail", params: { id: "ethereum" } },
        },
        {
          title: "XRP",
          to: { name: "coin-detail", params: { id: "xrp" } },
        },
      ],
    };
  },
};
</script>

<style>
#app {
}
</style>
