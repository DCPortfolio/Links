<template>
  <section class="card-list">
    <ilCardItem v-for="card in cards" :key="card.id" :card="card" />
  </section>
</template>

<script>
import ilCardItem from "@/components/Cards/ilCardItem.vue";
export default {
  name: "ilCardList",
  props: {
    cards: Array
  },
  components: {
    ilCardItem
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";
section.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 33.3%);
  grid-template-rows: $cardHeight;
  grid-auto-rows: $cardHeight;
}
</style>
