<template>
  <div id="app">
    <LHeader :categories="categories" />
    <main>
      <transition appear name="fade" mode="out-in">
        <CardsList
          :category="currentCategory"
          :key="currentCategory ? currentCategory.id : 0"
        />
      </transition>
    </main>
    <LFooter />
  </div>
</template>

<script>
import categories from "@/assets/data/cards.json";
import LHeader from "@/components/LHeader";
import LFooter from "@/components/LFooter";
import CardsList from "@/components/CardsList";
export default {
  name: "App",
  data: () => ({
    categories: categories
  }),
  components: {
    LHeader,
    CardsList,
    LFooter
  },
  computed: {
    currentCategory() {
      return this.categories.find(category => category.active);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_reset.scss";
html,
body {
  background-color: $black;
  main {
    overflow: hidden;
  }
}
</style>

<style lang="scss" scoped>
.fade-enter-active {
  animation: fade 0.5s;
}
.fade-leave-active {
  animation: fade 0.5s reverse;
}
@keyframes fade {
  0% {
    transform: translateY(-150vh);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
