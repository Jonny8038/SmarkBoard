<template>
  <div id="app">
    <el-container>
      <el-header>
        <Nav />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import "./until/flexible";
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<style>
html {
  background: #060e33;
}

.el-header {
  padding: 0px 0.625rem !important;
}
.el-main {
  padding-left: 0.625rem !important;
  margin-left: 0px !important;
}

.el-step__title {
  font-size: 0.625rem !important;
}

.el-step__title.is-process {
  color: #67c23a !important;
}

.el-step__head.is-process {
  color: #57c23a !important;
}
</style>
