<template>
  <button @click="onClick()" type="button" :class="btnStyle">
    {{ btnTitle }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnTitle: String,
    btnStyle: String,
    itemId: Number,
  },
  methods: {
    onClick() {
      this.$emit("on-click", this.itemId);
    },
  },
};
</script>
