<template>
  <div class="card">
    <div class="card--front">
      <span>{{ card.title }}</span>
    </div>
    <div class="card--back">
      <ul>
        <li v-for="link in card.links" :key="link.id">{{ link.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ilCardItem",
  props: {
    card: Object
  }
};
</script>

<style lang="scss" scoped>
div.card {
  border: 1px solid #000;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
  position: relative;
  perspective: 1000px;
  &:hover {
    & .card--front {
      transform: rotateY(180deg);
    }
    & .card--back {
      transform: rotateY(360deg);
    }
  }
  .card--front,
  .card--back {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 1s;
    backface-visibility: hidden;
  }
  .card--front {
    background: yellow;
    span {
      font-size: 2rem;
    }
  }
  .card--back {
    background: blue;
    transform: rotateY(180deg);
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      li {
        width: 100%;
        text-align: center;
        color: #fff;
      }
    }
  }
}
</style>
