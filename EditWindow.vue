<template>
  <div class="wrapper_edit">
    <p class="text_edit" @click="addForm">Редактировать</p>
    <p class="text_edit">Удалить</p>
  </div>
</template>

<script>
import Dashboard from "../views/Dashboard.vue";

export default {
  components: { Dashboard },

  name: "EditWindow",
  methods: {
    addForm() {
      this.$edit.showedit({ content: "Pagination" });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper_edit {
  background: #f5f3f3;
  width: 150px;
  height: 100px;
}
.text_edit {
  text-align: center;
}
</style>
