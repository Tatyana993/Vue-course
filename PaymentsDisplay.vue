<template>
  <div>
    <div v-for="(item, idx) in items" :key="idx">
      <span>{{ item.id }}</span
      >-<span>{{ item.category }}</span
      >-<span>{{ item.date }}</span
      >-<span>{{ item.value }}</span
      >-<span>{{ item.amount }}</span
      >-<span @click="addEdit($event, item)" class="contextevent">...</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: [],
    },
    showItems: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    addEdit(event, item) {
      this.$edit.showedit({
        title: "Edit Window",
        content: "EditWindow",
      });
    },
  },
};
</script>

<style>
.contextevent {
  cursor: pointer;
}
</style>
