<template>
  <header class="header">
    <h1 class="header__title">Links</h1>
    <LHeaderNavButton
      class="header__btn"
      :class="{ active: showNav }"
      :state="showNav"
      @click.native="showNav = !showNav"
    />
    <nav id="nav" class="header__nav">
      <label
        class="nav__item"
        :class="{ active: category.active }"
        v-for="category in categories"
        :key="category.id"
      >
        <input
          type="radio"
          :id="category.title"
          :value="category.id"
          v-model="currentCategory"
        />
        {{ category.title }}
      </label>
    </nav>
  </header>
</template>

<script>
import slide from "@/assets/js/slide.js";

import LHeaderNavButton from "@/components/LHeaderNavButton";

export default {
  name: "LHeader",
  components: {
    LHeaderNavButton
  },
  props: {
    categories: Array
  },
  data: () => ({
    currentCategory: null,
    showNav: false
  }),
  mounted() {
    this.currentCategory = 1;
  },
  watch: {
    currentCategory(newVal, oldVal) {
      const newCategory = this.categories.find(
        category => category.id === newVal
      );
      const prevCategory = this.categories.find(
        category => category.id === oldVal
      );
      newCategory.active = true;
      if (prevCategory) {
        prevCategory.active = false;
      }
    },
    showNav(open) {
      if (open) {
        slide(window.nav).down();
      } else {
        slide(window.nav).up();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: $lightblack;
  color: $white;
  .header__title {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    height: 100%;
    font-weight: 500;
  }
  .header__btn {
    transition: $normal;
    &.active {
      background: $primary;
    }
  }
  .header__nav {
    display: flex;
    flex-direction: column;
    text-align: center;
    flex-basis: 100%;
    height: 0;
    overflow: hidden;
    .nav__item {
      padding: 1rem 0;
      transition: $normal;
      position: relative;
      font-size: 1.3rem;
      font-weight: 300;
      cursor: pointer;
      z-index: 1;
      &::before {
        mix-blend-mode: overlay;
        transition: $normal;
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        height: 100%;
        width: 100%;
        transform: scale(0);
        z-index: 0;
      }
      &.active {
        &::before {
          background: $primary;
          transform: scale(1);
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@include media(md) {
  .header {
    .header__btn {
      display: none;
    }
    .header__nav {
      flex-direction: row;
      flex-basis: auto;
      height: auto;
      flex-grow: 1;
      justify-content: center;
      .nav__item {
        padding: 1rem;
      }
    }
  }
}
</style>
