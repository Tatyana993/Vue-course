<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    {{ message }}
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input type="text" placeholder="text" @blur="blurMethod" />
    <button @click="c = a + b">Click</button>
    <button @click="doThat">Clear</button>
    {{ c }}
    <Calc />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Calc from "./components/Calc.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Calc
  },
  data: () => ({
    message: "Привет, VUE",
    c: 0,
    a: 1,
    b: 1
  }),
  methods: {
    doThat() {
      this.c = 0;
    },
    blurMethod() {
      console.log("blur");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
