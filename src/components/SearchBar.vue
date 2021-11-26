<template>
  <div class="d-flex justify-content-center">
    <div class="d-flex form-group">
      <input
        type="text"
        class="form-control"
        v-model="inputText"
        name="inputText"
      />
      <Button @on-click="onSubmit" btnStyle="btn btn-outline-primary" btnTitle="Search"/>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "SearchBar",
  components: {
    Button,
  },
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    onSubmit() {

      const inputData = this.inputText;
      this.$emit("search", inputData);

      this.inputText = "";
    },
  },
};
</script>

<style scoped>
.form-group {
  width: 400px;
}
.btn {
  margin-left: 20px;
}
.d-flex {
  margin-top: -30px;
  margin-bottom: 30px;
}
</style>
