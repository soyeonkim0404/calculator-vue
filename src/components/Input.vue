<template>
  <div class="inputBox">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="add" v-on:click="addTodo">+</span>
  </div>
</template>

<script>
export default {
  name: "Input.vue",
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        let value = this.newTodoItem;
        this.$emit("addTodo", value);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
.inputBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
}
input {
  outline: none;
  border: 1px solid black;
  flex: 1;
  height: 45px;
  padding: 10px;
  box-sizing: border-box;
}
.add {
  width: 45px;
  height: 45px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  cursor: pointer;
}
</style>
