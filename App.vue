<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main>
      <add-payment-form
        @addNewPayment="addNewPayment"
        :categoryList="getCategoryList"
      />
      <button @click="show = !show">ADD NEW COST+</button>
      <PaymentsDisplay v-show="show" show-items :items="curentElements" />
      <pagination
        :cur="page"
        :n="n"
        :length="getPaymentsList.length"
        @paginate="changePage"
      />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import Pagination from "./components/Pagination.vue";
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data: () => ({
    show: true,
    page: 1,
    n: 10,
  }),
  computed: {
    ...mapGetters(["getPaymentsList", "getCategoryList"]),
    paymentsList() {
      return this.$store.getters.getPaymentsList;
    },
    curentElements() {
      const { n, page } = this;
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n);
    },
  },

  methods: {
    ...mapMutations(["setPaymentsListData", "setCategories"]),

    addNewPayment(data) {
      this.$store.commit("addDataToPaymentsList", data);
    },
    changePage(p) {
      this.page = p;
    },
  },

  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("fetchCategoryList");
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
}
</style>
