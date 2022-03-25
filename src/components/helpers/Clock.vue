<template>
  <div>
  <clock>
  <span  class="ma-1">วันที่ {{ time }} </span>  
  </clock>
  </div>
</template>

<script>
import moment from "moment";
export default {

  data() {
    return {
      time: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.time = moment(Date()).format(" MMMM DD YYYY, h:mm:ss a");
    }, 1000);
  },
};
</script>

<style></style>
