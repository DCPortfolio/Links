<template>
  <button>
    <svg
      :class="{ active: state }"
      class="ham hamRotate"
      viewBox="0 0 100 100"
      height="10vh"
    >
      <path
        class="line top"
        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
      />
      <path class="line middle" d="m 70,50 h -40" />
      <path
        class="line bottom"
        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "LHeaderNavButton",
  props: {
    state: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.ham {
  cursor: pointer;
  transition: transform $normal;
  .top,
  .bottom {
    stroke-dasharray: 40 121;
  }
  &.active {
    transform: rotate(45deg);
    .top,
    .bottom {
      stroke-dashoffset: -68px;
    }
    .line {
      stroke: $white;
    }
  }
}

.line {
  fill: none;
  transition: $normal;
  stroke: $white;
  stroke-width: 2.5;
  stroke-linecap: round;
}
</style>
