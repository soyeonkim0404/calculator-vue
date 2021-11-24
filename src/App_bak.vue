<template>
  <div id="app">
    <section className="col">
      <Input v-on:addTodo="addTodo" />
      <List v-bind:propsdata="todoItems" @removeTodo="removeTodo" />
      <Footer v-on:removeAll="clearAll" v-if="todoItems.length >= 2" />
    </section>
  </div>
</template>

<script>
import Input from "./components/Input.vue";
import List from "@/components/List";
import Footer from "@/components/Footer";

export default {
  name: "App",
  data() {
    return {
      todoItems: [],
    };
  },
  components: {
    Footer,
    List,
    Input,
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (
          localStorage.key(i) != "loglevel:webpack-dev-server" &&
          localStorage.key(i) != "ACTUUID"
        ) {
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
};
</script>

<style>
#app {
  width: 400px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
