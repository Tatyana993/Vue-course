<template>
  <div>
    <PaymentsDisplay show-items :items="curentElements" />
    <pagination
      :cur="page"
      :n="n"
      :length="getPaymentsList.length"
      @paginate="changePage"
    />
    <button @click="addPayment">add</button>
    <button @click="addEdit">menu</button>
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
    addEdit() {
      this.$edit.showedit({
        title: "Edit Window",
        content: "EditWindow",
      });
    },
  },

  created() {
    this.page = Number(this.$route.params.page);
    this.$store.dispatch("fetchData");
    this.$store.dispatch("fetchCategoryList");
  },
};
</script>

<style></style>
