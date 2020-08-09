<template>
  <footer>
    <a href="https://github.com/DeCyberPrince">
      &copy; DeCyberPrince {{ date }}
    </a>
  </footer>
</template>

<script>
export default {
  name: "LFooter",
  data: () => ({
    date: ""
  }),
  mounted() {
    setInterval(() => {
      this.date = new Date().toLocaleString("ru-RU", {
        hour12: true,
        timeZone: "Asia/Yekaterinburg",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
footer {
  padding: 1rem;
  color: $secondary;
  text-align: center;
  transition: $normal;
  font-weight: 300;
  &:hover {
    color: $white;
  }
}
</style>
