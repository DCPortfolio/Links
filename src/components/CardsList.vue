<template>
  <div class="cards-list">
    <CardsItem v-for="card in category.cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import CardsItem from "@/components/CardsItem";

export default {
  name: "CardsList",
  components: {
    CardsItem
  },
  props: {
    category: {
      type: Object,
      default: () => ({ cards: [] })
    }
  }
};
</script>

<style lang="scss">
.cards-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
