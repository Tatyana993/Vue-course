<template>
  <div>
    <input placeholder="Amount" v-model="amount" />
    <input placeholder="Type" v-model="type" />
    <input placeholder="Date" v-model="date" />
    <select v-model="type">
      <option v-for="option in categoryList" :key="option">
        {{ option }}
      </option>
    </select>
    <button @click="onSaveClick">Save!</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",

  data() {
    return {
      amount: "",
      type: "",
      date: "",
    };
  },
  computed: {
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSaveClick() {
      const data = {
        amount: +this.amount,
        type: this.type,
        date: this.date || this.getCurrentDate,
      };
      this.addData(data);
    },
    addData(data) {
      this.$store.commit("addDataToPaymentsList", data);
    },
  },
  created() {
    this.category = this.$route.params.category;
  },
};
</script>

<style></style>
