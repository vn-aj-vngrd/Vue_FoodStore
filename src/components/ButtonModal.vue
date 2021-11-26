<template>
  <button
    @click="$emit('add-to-cart')"
    type="submit"
    :class="btnClass"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    {{ btnName }}
  </button>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">{{ text }}</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonModal",
  props: {
    text: String,
    title: String,
    btnName: String,
    btnClass: String,
  },
  emits: ["add-to-cart"],
};
</script>
