<template>
  <div>
    <div v-for="(item, idx) in items" :key="idx">
      <tr>
        <th>№</th>
        <th>DATE</th>
        <th>CATEGORY</th>
        <th>VALUE</th>
      </tr>
      <tr>
        <td>{{ item.id }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.value }}</td>
      </tr>
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
};
</script>

<style></style>
