<template>
  <header
    class="
      d-flex
      flex-wrap
      align-items-center
      justify-content-center justify-content-md-between
      py-3
      mb-4
      border-bottom
    "
  >
    <router-link
      to="/"
      class="
        d-flex
        align-items-center
        col-md-3
        mb-2 mb-md-0
        text-dark text-decoration-none
      "
    >
      Food.
    </router-link>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <router-link to="/" class="nav-link px-2 link-secondary"
          >Menu</router-link
        >
      </li>
    </ul>

    <div class="col-md-3 text-end">
      <router-link to="/Cart" class="nav-link px-2 link-secondary"
        >Cart</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
header {
  padding-left: 150px;
  padding-right: 150px;
  font-weight: bold;
  font-size: 20px;
}
</style>
