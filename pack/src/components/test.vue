<template>
  <div>test</div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    send() {
      axios
        .get(
          "http://oovxtczv.yangguanghulian.cn/business/t-req-re/re?tk=d9c9154c-6afc-4276-855c-b95e3739f38b&page=pay"
        )
        .then((res) => console.log(res));
    },
  },
};
</script>

<style scoped>
</style>