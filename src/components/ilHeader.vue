<template>
  <header>
    <nav>
      <a
        v-for="category in categories"
        :key="category.id"
        :class="{ active: category.active }"
        @click="switchCategory(category)"
      >
        {{ category.title }}
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "ilHeader",
  props: {
    categories: Array
  },
  methods: {
    switchCategory(newCategory) {
      this.categories.forEach(category => {
        category.active = false;
      });
      newCategory.active = true;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  background: yellow;
  a {
    display: inline-block;
    color: rgba(black, 0.2);
    cursor: pointer;
    transition: 0.3s;
    margin: 0 1rem;
    &.active {
      color: rgba(black, 1);
      border-top: 2px solid #000;
      border-bottom: 2px solid #000;
    }
  }
}
</style>
