<template>
  <div id="app">
    <ilHeader :categories="categories" />
    <main>
      <ilCardList :cards="currentCards" />
    </main>
  </div>
</template>

<script>
import ilHeader from "@/components/ilHeader.vue";
import ilCardList from "@/components/Cards/ilCardList.vue";
export default {
  name: "App",
  data() {
    return {
      categories: []
    };
  },
  computed: {
    currentCategory() {
      return this.categories.find(category => {
        return category.active;
      });
    },
    currentCards() {
      return this.currentCategory ? this.currentCategory.cards : [];
    }
  },
  components: {
    ilHeader,
    ilCardList
  },
  async mounted() {
    const response = await fetch("/data/categories.json");
    const data = await response.json();
    this.categories = data;
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  font-family: sans-serif;
}
</style>
