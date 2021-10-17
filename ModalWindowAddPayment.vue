<template>
  <div class="wrapper">
    <div class="overlay"></div>
    <div class="header">{{ settings.title }}</div>
    <div class="content">
      <add-payment-form v-if="settings.content === 'AddPaymentForm'" />
      <auth v-if="settings.content === 'Auth'" />
      <div class="footer">
        <button @click="onCloseClick">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
import Auth from "./Auth.vue";
export default {
  components: { AddPaymentForm, Auth },
  name: "ModalWindowAddPayment",
  props: {
    content: String,
    settings: Object,
  },
  methods: {
    onCloseClick() {
      this.$modal.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid red;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.overlay {
  z-index: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgb(68, 61, 61, 0.5);
}
.content {
  position: relative;
  z-index: 100;
}
</style>

