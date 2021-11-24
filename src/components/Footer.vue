<template>
  <div class="clearAll" @click="clearTodo">
    <span class="clearAllBtn">Clear All</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    clearTodo() {
      this.$emit("removeAll");
    },
  },
};
</script>

<style scoped>
.clearAll {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: black;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
}

.clearAllBtn {
  color: #fff;
  display: block;
  text-align: center;
}
</style>
