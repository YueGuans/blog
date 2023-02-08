<template>
  <button @click="getData">发送请求</button>
</template>

<script>
import http from "../request/axios"
export default {
    data() {
        return {

        };
    },
    created() {

    },
    methods: {
      getData() {
        http.get("/get/list").then(  data => {
          console.log(data);
        })
      }
       
    }
}

</script>

<style scoped lang="less">

</style>
