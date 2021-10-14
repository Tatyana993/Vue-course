<template>
  <div id="app">
    <header class="link">
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/about">about</router-link>
      <div @click="goToPage('NotFound')">404</div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <transition name="fade">
      <modal-window-add-payment v-if="modalIsShow" :settings="modalSettings" />
    </transition>
  </div>
</template>

<script>
//import ModalWindowAddPayment from "./components/ModalWindowAddPayment.vue";
export default {
  name: "App",
  components: {
    ModalWindowAddPayment: () =>
      import("./components/ModalWindowAddPayment.vue"),
  },
  data: () => ({
    modalSettings: {},
    modalIsShow: false,
  }),
  computed: {},
  methods: {
    openPayment() {
      this.modalIsShow = true;
      this.modalSettings = {
        title: "Add Payment Form",
        content: "AddPaymentForm",
      };
    },
    openAuth() {
      this.modalIsShow = true;
      this.modalSettings = {
        title: "Auth",
        content: "Auth",
      };
    },
    goToPage(pageName) {
      this.$router.push({
        name: pageName,
      });
    },

    onShown(settings) {
      this.modalSettings = settings;
      this.modalIsShow = true;
    },
    onHide() {
      this.modalSettings = {};
      this.modalIsShow = false;
    },
  },
  mounted() {
    this.$modal.EventBus.$on("onShown,", this.onShown);
    this.$modal.EventBus.$on("onHide,", this.onHide);
  },

  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("fetchCategoryList");
    console.log(this.$modal);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .header {
    font-size: 28px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  a {
    padding-left: 10px;
    padding-bottom: 10px;
  }
}
</style>
