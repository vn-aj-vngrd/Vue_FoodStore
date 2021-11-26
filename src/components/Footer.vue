<template>
     
  <footer class="footer">
      <hr />
      <h6 class="text-muted">{{ text }}</h6>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    text: String,
  },
};
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
hr {
    margin-bottom: 5px
}
</style>
