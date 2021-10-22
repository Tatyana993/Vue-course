<template>
  <div>
    <PaymentsDisplay show-items :items="curentElements" />
    <router-link to="/dashboard/add/payment/Sport/?value=400"
      >Sport400</router-link
    >
    <router-link to="/dashboard/add/payment/Education?value=500"
      >Education500</router-link
    >
    <router-link to="/dashboard/add/payment/Transport?value=600"
      >Transport600</router-link
    >
    <pagination
      :cur="page"
      :n="n"
      :length="getPaymentsList.length"
      @paginate="changePage"
    />
    <button @click="addPayment">add</button>
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    PaymentsDisplay,
    Pagination,
  },
  name: "Dashboard",

  data: () => ({
    page: 1,
    n: 10,
  }),
  watch: {
    $route(to, from) {
      if (to.name === "AddPaymentFromUrl") console.log(to, from);
      this.CheckUrl();
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
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

    changePage(p) {
      this.page = p;
    },
    addPayment() {
      this.$modal.show({
        title: "Add Payment Form",
        content: "AddPaymentForm",
      });
    },

    CheckUrl() {
      const { action, category, section } = this.$route.params;
      this.$modal.show({
        title: "Add Payment Form",
        content: "AddPaymentForm",
        data: {
          action: action || "",
          category: category || "",
          section: section || "",
          amount: this.$route.query?.value || "",
        },
      });
    },
  },

  async created() {
    if (this.$route.params.page) {
      this.page = Number(this.$route.params.page);
    }

    await this.$store.dispatch("fetchData");
    await this.$store.dispatch("fetchCategoryList");
    if (this.$route.name === "AddPaymentFromUrl") {
      this.CheckUrl();
    }
  },
};
</script>

<style></style>
