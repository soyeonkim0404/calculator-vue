import axios from "axios";

const config = {
  baseUrl:
    "https://www.juso.go.kr/addrlink/addrLinkApi.do?comfmKey=devU01TX0FVVEgyMDIxMTEyNDE5NTcwMDExMTkzODY=",
};

function jusoList() {
  return axios.get(`${config.baseUrl}`);
}

export { jusoList };
