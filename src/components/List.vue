<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" v-bind:key="index">
        {{ todoItem }}
        <span
          class="removeBtn"
          type="button"
          @click="removeTodo(todoItem, index)"
          >x</span
        >
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  name: "List",
  props: ["propsdata"],
  methods: {
    removeTodo(todoItem, index) {
      this.$emit("removeTodo", todoItem, index);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 30px;
  text-align: left;
}
li {
  display: flex;
  height: 45px;
  margin: 0.5rem 0;
  padding: 0 10px;
  background: #fff;
  box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.checkBtn {
  color: brown;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: cadetblue;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
