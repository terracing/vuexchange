<template>
  <table class="w-full">
    <thead>
      <tr class="border-b-2 border-gray-400">
        <th></th>
        <th :class="{ up: this.sortOrder == 1, down: this.sortOrder == -1 }">
          <span @click="changeSortOrder" class="underline cursor-pointer"
            >Ranking</span
          >
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            type="text"
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block"
            id="filter"
            placeholder="search..."
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in filteredAssets"
        :key="a.id"
        class="border-b border-gray-300 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <img
            :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
            :alt="a.name"
          />
        </td>
        <td>
          <strong># {{ a.rank }}</strong>
        </td>
        <td>
          <router-link
            :to="{ name: 'coin-detail', params: { id: a.id } }"
            class="hover:text-green-800 hover:underline"
            >{{ a.name }} </router-link
          ><small class="ml-1 text-gray-500">{{ a.symbol }}</small>
        </td>
        <td>{{ a.priceUsd | dollar }}</td>
        <td>{{ a.marketCapUsd | dollar }}</td>
        <td
          :class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-700'
              : 'text-green-700'
          "
        >
          {{ a.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block">
          <vx-button @custom-click="goToCoin(a.id)">Details</vx-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import VxButton from "@/components/VxButton";
export default {
  name: "PxAssetsTable",

  components: { VxButton },

  data() {
    return {
      filter: "",
      sortOrder: "",
    };
  },

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    filteredAssets() {
      const altOrder = this.sortOrder == 1 ? -1 : 1;

      return this.assets
        .filter(
          (a) =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder;
          }

          return altOrder;
        });
    },
  },

  methods: {
    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id } });
    },

    changeSortOrder() {
      this.sortOrder = this.sortOrder == 1 ? -1 : 1;
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
