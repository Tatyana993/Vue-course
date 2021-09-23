<template>
  <div class="calc">
    <div class="main">
      <input v-model.number="op1" type="number" />
      <input v-model.number="op2" type="number" />
      = {{ result }}
      <div class="error" v-if="error">Ошибка: {{ error }}</div>
    </div>
    <div class="keyboard">
      <button
        v-for="operand in operands"
        :key="operand"
        :title="operand"
        @click="calculate(operand)"
      >
        {{ operand }}
      </button>
    </div>
    <div class="scrKey">
      <input type="checkbox" id="checkbox" v-model="numberKey" />
      <div v-if="numberKey">
        <button
          v-for="numberKey in keyboard"
          :key="numberKey"
          :title="numberKey"
          @click="appKey(numberKey)"
        >
          {{ numberKey }}
        </button>
      </div>
      {{ msg2 }}
      <label for="checkbox">{{ checked }}</label>
      <br />
      <input
        type="radio"
        id="one"
        value="op1"
        v-model="checkApp"
        @click="checkOn(op1, op2)"
      />
      <label for="one">Операнд 1</label>
      <input
        type="radio"
        id="two"
        value="op2"
        v-model="checkApp"
        @click="checkOn(op1, op2)"
      />
      <label for="two">Операнд 2</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      op1: 0,
      op2: 0,
      operands: ["+", "-", "/", "*"],
      keyboard: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "←"],
      msg2: "Отобразить экранную клавиатуру",
      result: 0,
      numberKey: false,
      checkApp: []
    };
  },
  methods: {
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.sub();
          break;
        case "/":
          this.div();
          break;
        case "*":
          this.multi();
          break;
      }
    },
    appKey(numberKey) {
      if (this.op1) {
        this.op1 = numberKey;
      } else this.op2 = numberKey;
    },
    checkOn() {},

    add() {
      const { op1, op2 } = this;
      this.result = op1 + op2;
    },
    sub() {
      const { op1, op2 } = this;
      this.result = op1 - op2;
    },

    div() {
      const { op1, op2 } = this;
      if (op2 === 0) {
        this.error = "Делить на 0 нельзя!";
        return;
      }
      this.result = op1 / op2;
    },
    multi() {
      const { op1, op2 } = this;
      this.result = op1 * op2;
    }
  }
};
</script>
