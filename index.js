import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
    },
    addDataToPaymentsList(state, payload) {
      state.paymentsList.push(payload);
    },
    setCategories(state, payload) {
      state.categoryList = payload;
    },
  },
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 1; i < 101; i++) {
            items.push({
              date: "27.09.2021",
              category: "Education",
              amount: i,
            });
          }
          resolve(items);
        }, 2000);
      }).then((res) => {
        commit("setPaymentsListData", res);
      });
    },
    fetchCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(["Food", "Transport", "Education", "Sport"]);
        }, 1000);
      }).then((res) => {
        commit("setCategories", res);
      });
    },
  },

  getters: {
    getPaymentsList: (state) => state.paymentsList,
    getCategoryList: (state) => state.categoryList,
  },
});
