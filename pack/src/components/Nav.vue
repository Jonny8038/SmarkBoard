<template>
  <div class="nav">
    <div class="nav-left">
      <img class="nav-left-logo" src="../assets/logo.png" />
      <h1 class="nav-left-title">广远咔咔换电后台监控看板</h1>
      <div class="nav-left-nav-tab">
        <span>首页</span>
        <span>电池状态信息</span>
        <span>运维服务信息</span>
        <span>系统监测信息</span>
        <span>营运财务信息</span>
        <span>报警状态信息</span>
      </div>
      <div class="nav-left-button" circle>
        <i class="el-icon-message-solid"></i>
      </div>
      <div class="nav-left-error">
        <span class="nav-left-error-count">2个</span>
        <span>站内报警</span>
      </div>
    </div>
    <div class="nav-right">
      <div class="nav-right-date">
        <div class="nav-right-date-time">16:16:20</div>
        <div>2021/12/9 星期三</div>
      </div>
      <div class="nav-right-weather">
        <div>晴天 30°-38°</div>
        <div>空气指数: 优</div>
      </div>
      <div class="nav-right-stationID">
        <div>站点ID编号: 110105001</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  user-select: none;
  color: aliceblue;
  width: 100%;
  height: 5rem;
  border-bottom: 0.0625rem solid #4c97c5;
  display: flex;
  flex-direction: row;
}
.nav-left {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.nav-left-logo {
  width: 3.75rem;
  height: 3.75rem;
  margin-right: 1.25rem;
}

.nav-left-title {
  font-size: 1.875rem;
  color: #8bf2fa;
  margin-right: 1.25rem;
}

.nav-left-nav-tab {
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.nav-left-nav-tab span {
  display: block;
  overflow: hidden;
  width: 12.5rem;
  height: 1.25rem;
  font-size: 1rem;
  font-weight: 520;
  line-height: 1.25rem;
  text-align: center;
  border-radius: 0.1875rem;
  padding: 0.1875rem;
  border: 0.0625rem solid #8bf2fa;
  margin: 0 0.625rem;
}

.nav-left-button {
  width: 2.1875rem;
  height: 2.1875rem;
  border-radius: 50%;
  font-size: 1.125rem;
  background: #cd2631;
  margin: 0 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-left-error {
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
}
.nav-left-error-count {
  font-size: 1.25rem;
}

.nav-right {
  width: 20%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav-right-date {
  height: 3.125rem;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.875rem;
  border-left: 0.125rem solid #8bf2fa;
}
.nav-right-date-time {
  color: #8bf2fa;
  font-size: 1.25rem;
}

.nav-right-weather {
  height: 3.125rem;
  padding: 0 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.75rem;
  border-left: 0.125rem solid #8bf2fa;
}

.nav-right-stationID {
  height: 3.125rem;
  padding: 0 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.625rem;
  border-left: 0.125rem solid #8bf2fa;
}
</style>