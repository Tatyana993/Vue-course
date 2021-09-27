<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>

    <payments-display v-if="show" />
    <button @click="show = !show">ADD NEW COST+</button>

    <main>
      <PaymentsDisplay showItems :items="paymentsList" />
      <AddPaymentForm @addNewPayment="addNewPayment" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data: () => ({
    paymentsList: [],
    show: true,
  }),

  methods: {
    fetchData() {
      return [
        {
          id: 1,
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 2,
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 3,
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
    addNewPayment(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
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
