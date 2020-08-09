<template>
  <div
    class="card-list__card"
    @click="fliped = true"
    @mouseleave="fliped = false"
  >
    <div class="card-list__card--front" :class="{ fliped: fliped }">
      {{ card.title }}
    </div>
    <div class="card-list__card--back" :class="{ fliped: fliped }">
      <ul class="card__links">
        <li class="links__item" v-for="link in card.links" :key="link.id">
          <a :href="link.link" target="_blank"> {{ link.title }} </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsItem",
  props: {
    card: Object
  },
  data: () => ({
    fliped: false
  })
};
</script>

<style lang="scss">
.card-list__card {
  border-radius: 2rem;
  margin: 1rem;
  width: 100%;
  height: 30rem;
  position: relative;
  perspective: 1000px;
  .card-list__card--front,
  .card-list__card--back {
    border-radius: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: $normal;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    text-align: center;
    cursor: pointer;
  }
  .card-list__card--front {
    padding: 2rem;
    background-color: $lightblack;
    font-size: 3rem;
    font-weight: 100;
    color: $secondary;
    &:hover {
      color: $white;
    }
    &.fliped {
      transform: rotateY(180deg);
    }
  }
  .card-list__card--back {
    overflow: hidden;
    background-color: $lightblack;
    font-weight: 300;
    transform: rotateY(180deg);
    &.fliped {
      transform: rotateY(360deg);
    }
    .card__links {
      width: 100%;
      .links__item {
        font-size: 1.5rem;
        padding: 0.5rem 0;
        color: $secondary;
        width: inherit;
        transition: $normal;
        &:hover {
          color: $white;
          background: $primary;
        }
      }
    }
  }
}
</style>

<style lang="scss">
@include media(md) {
  .card-list__card {
    width: calc(100vw / 2 - 2rem);
    height: 32rem;
    .card-list__card--back {
      .card__links {
        .links__item {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>

<style lang="scss">
@include media(xl) {
  .card-list__card {
    width: calc(100vw / 3 - 2.5rem);
    height: 32rem;
    .card-list__card--back {
      .card__links {
        .links__item {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
