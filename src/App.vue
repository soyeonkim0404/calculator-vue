<template>
  <div id="app">
    <Calculator/>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>

<style>
#app{
display:flex;
justify-content:center;
align-items:center;
min-height: 100vh;
}
</style>
