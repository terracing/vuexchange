<template>
  <div>
    <div class="flex justify-center">
      <bounce-loader
        :loading="isLoading"
        :color="'#68d391'"
        :size="100"
      ></bounce-loader>
    </div>
    <vx-assets-table v-if="!isLoading" :assets="assets" />
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
      isLoading: false,
      assets: [],
    };
  },
  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
