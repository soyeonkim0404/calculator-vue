<template>
  <div>
    <form name="form" id="form" method="post">
      <input type="text" v-model="keyword" />
      <input type="button" @click="enterSearch" value="검색" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyword: "",
      tests: [],
    };
  },
  methods: {
    getData() {
      let vm = this;
      axios
        .get(
          "https://www.juso.go.kr/addrlink/addrLinkApi.do?comfmKey=devU01TX0FVVEgyMDIxMTEyNDE3MjYxMDExMTkzODE="
        )
        .then(function (response) {
          vm.tests = response.data;
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    enterSearch() {
      this.getData();
    },
  },
};
</script>

<style scoped></style>
