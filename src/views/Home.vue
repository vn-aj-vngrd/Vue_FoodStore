<template>
  <div class="container">
    <SearchBar @search="toggleSearch" />
    <Card :foods="showFiltered? filteredFood : foods" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    Card,
    SearchBar,
  },
  props: ["foods"],
  data() {
    return {
      filteredFood: [],
      showFiltered: false,
    };
  },
  methods: {
    toggleSearch(inputData) {
      if (inputData == "") {
        this.showFiltered = false;
      } else {
        this.filteredFood = this.foods.filter(
          (val) => val.name.toLowerCase().match(inputData.toLowerCase()) != null
        );
        this.showFiltered = true;
      }
    },
  },
};
</script>

<style>
.container {
  margin-top: 100px;
}
</style>
