<template>
  <div>
    <vx-assets-table :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import VxAssetsTable from "@/components/VxAssetsTable";

export default {
  name: "Home",
  components: { VxAssetsTable },
  data() {
    return {
      assets: [],
    };
  },
  created() {
    api.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>
