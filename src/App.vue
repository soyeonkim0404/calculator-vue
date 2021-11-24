<template>
  <div>
    <!--    <form name="form" id="form" method="post">
      <input type="text" />
      <input type="button" @click="showModal = true" value="우편번호" />
    </form>-->

    <form name="form" id="form" method="post">
      <input type="text" v-model="text" />
      <input type="button" @click="enterSearch" value="검색" />
    </form>

    <!--    <div id="list">
      <ul>
        <li v-for="sh in shs" :key="sh">
          {{ sh }}
        </li>
      </ul>
    </div>-->

    <modal v-if="showModal" @close="showModal = false">
      <div slot="body">
        <input type="text" v-model="text" />
      </div>
    </modal>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "@/components/common/Modal";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      text: "",
      test: [],
      showModal: false,
    };
  },
  // created() {
  //   let vm = this;
  //   axios
  //     .get("https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do")
  //     .then(function (response) {
  //       console.log(response);
  //       vm.test = response.data;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // },
  methods: {
    getData() {
      let vm = this;
      axios
        .get("https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do")
        .then(function (response) {
          //console.log(response);
          vm.text = response.data;
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
