<template>
  <div class="system">
    <div class="system-Charging-box">
      <div class="system-Charging-box-A">
        <span class="system-Charging-box-A-title"> 充电柜A </span>
        <div>
          <span class="system-Charging-box-A-title-info">充电枪信息</span>
          <div class="system-Charging-box-item-all">
            <div
              class="system-Charging-box-item"
              v-for="(item, index) in 10"
              :key="index"
            >
              <div class="system-Charging-box-item-logo">
                <span class="iconfont icon-suoding"></span>
              </div>
              <div class="system-Charging-box-item-info-1">
                <span>充电枪{{ 5 }}</span>
                <span>当前状态:{{ "已充满" }}</span>
                <span>充电电流:{{ "10.00Kwh" }}</span>
                <span>已充时间:{{ "53分钟" }}</span>
              </div>
              <div class="system-Charging-box-item-info-2">
                <span>当前温度:{{ "20°" }}</span>
                <span>当前充电电度数:{{ "20000.32Kwh" }}</span>
                <span>当前电压:{{ "0V" }}</span>
                <span>充电功率:{{ "30.0KW" }}</span>
                <span>剩余充电时间:{{ "116分钟" }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="system-Charging-box-B">
        <span class="system-Charging-box-B-title"> 充电柜B </span>
        <div>
          <span class="system-Charging-box-B-title-info">充电枪信息</span>
          <div class="system-Charging-box-item-all">
            <div
              class="system-Charging-box-item"
              v-for="(item, index) in 10"
              :key="index"
            >
              <div class="system-Charging-box-item-logo">
                <span class="iconfont icon-suoding"></span>
              </div>
              <div class="system-Charging-box-item-info-1">
                <span>充电枪{{ 5 }}</span>
                <span>当前状态:{{ "已充满" }}</span>
                <span>充电电流:{{ "10.00Kwh" }}</span>
                <span>已充时间:{{ "53分钟" }}</span>
              </div>
              <div class="system-Charging-box-item-info-2">
                <span>当前温度:{{ "20°" }}</span>
                <span>当前充电电度数:{{ "20000.32Kwh" }}</span>
                <span>当前电压:{{ "0V" }}</span>
                <span>充电功率:{{ "30.0KW" }}</span>
                <span>剩余充电时间:{{ "116分钟" }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="system-environment">
      <span class="system-environment-title">环境</span>
      <div class="system-environment-all">
        <div
          class="system-environment-item"
          v-for="(item, index) in 10"
          :key="index"
        >
          <span class="system-environment-item-title">电池舱温度传感器</span>
          <div class="system-environment-item-info">
            <div
              class="system-environment-item-logo iconfont icon-caozuo-wendu"
            />
            <div class="system-environment-item-data">
              <span>当前最高温度:{{ "28°" }}</span>
              <span>当前平均温度:{{ "25°" }}</span>
              <span>当前最低温度:{{ "20°" }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="system-sensor">
      <span class="system-sensor-title">视觉传感器</span>
      <div class="system-sensor-all">
        <div
          @click.stop="showVideo"
          class="system-sensor-item"
          v-for="(item, index) in 12"
          :key="index"
        >
          <span class="system-sensor-item-title">入口视觉传感器</span>
          <div>
            <video
              class="system-sensor-item-video"
              src="../assets/video.mp4"
              controls
              autoplay
            ></video>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isShowVideo" class="system-sensor-item-video-opacity"></div>
    <videoshow
      :class="
        isShowVideo
          ? 'system-sensor-item-video-show-popore'
          : 'system-sensor-item-video-unshow-popore'
      "
      @closeshowvideo="closeshowvideo"
    />
  </div>
</template>

<script>
import videoshow from "../components/VideoPopover.vue";

export default {
  components: {
    videoshow,
  },
  data() {
    return {
      isShowVideo: false,
    };
  },
  methods: {
    //展开查看视频
    showVideo() {
      this.isShowVideo = !this.isShowVideo;
    },
    // 关闭展开查看视频
    closeshowvideo(res) {
      this.isShowVideo = res;
      console.log(res);
    },
  },
};
</script>

<style scoped>
.system {
  user-select: none;
  color: #8ad9e1;
  margin-top: 2.5rem;
  height: 86vh;
  position: relative;
  display: flex;
  flex-direction: row;
}

.system-Charging-box {
  width: 50%;
  height: 100%;
  border: 0.125rem solid #1e365f;
  display: flex;
  flex-direction: row;
}

.system-Charging-box-A {
  width: 50%;
  height: 100%;
  border-right: 0.125rem solid #1e365f;
  padding: 0.3125rem 0.9375rem;
  box-sizing: border-box;
}

.system-Charging-box-A-title,
.system-Charging-box-B-title {
  font-size: 1.125rem;
  margin-bottom: 1.25rem;
}

.system-Charging-box-A-title-info,
.system-Charging-box-B-title-info {
  font-size: 1rem;
  color: #dbdce2;
}

.system-Charging-box-B {
  width: 50%;
  height: 100%;
  height: 100%;
  padding: 0.3125rem 0.9375rem;
  box-sizing: border-box;
}

.system-Charging-box-item-all {
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
  overflow: auto;
}

.system-Charging-box-item {
  cursor: pointer;
  width: 98%;
  font-size: 0.75rem;
  background: #0b1143;
  border-radius: 0.3125rem;
  box-sizing: border-box;
  margin: 0.625rem 0;
  display: flex;
  flex-direction: row;
}

.system-Charging-box-item-logo {
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.system-Charging-box-item-logo > span {
  font-size: 1.875rem;
}

.system-Charging-box-item-info-1 {
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.system-Charging-box-item-info-2 {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.system-environment {
  width: 25%;
  height: 100%;
  border: 0.125rem solid #1e365f;
  padding: 0.3125rem 0.9375rem;
  box-sizing: border-box;
  margin: 0 1%;
}

.system-environment-title {
  font-size: 1.125rem;
}

.system-environment-all {
  width: 100%;
  height: 82vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.system-environment-item {
  cursor: pointer;
  margin: 0.625rem 0;
  box-sizing: border-box;
  width: 98%;
}

.system-environment-item-title {
  font-size: 1rem;
  color: #dbdce2;
}

.system-environment-item-info {
  width: 100%;
  height: 4.375rem;
  background: #0b1143;
  margin-top: 0.625rem;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  border: 0.125rem solid #0d1745;
  box-sizing: border-box;
  border-radius: 0.3125rem;
  padding: 0.625rem;
}

.system-environment-item-logo {
  width: 20%;
  text-align: center;
  padding-right: 10px;
  box-sizing: border-box;
  border-right: 0.125rem solid #1a3059;
  font-size: 3.75rem;
}

.system-environment-item-data {
  width: 40%;
  font-size: 1rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.system-sensor {
  width: 25%;
  height: 100%;
  border: 0.125rem solid #1e365f;
  padding: 0.3125rem 0.9375rem;
  box-sizing: border-box;
}

.system-sensor-title {
  font-size: 1.125rem;
}

.system-sensor-all {
  height: 84vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
}

.system-sensor-item {
  margin: 0.3125rem 0;
}

.system-sensor-item-title {
  font-size: 1rem;
  color: #fff;
}

.system-sensor-item-video {
  cursor: pointer;
  width: 12.5rem;
  height: 6.25rem;
}
.system-sensor-item-video-opacity {
  width: 100%;
  height: 100%;
  background: #060e33;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
}

.system-sensor-item-video-unshow-popore {
  display: none;
}

.system-sensor-item-video-show-popore {
  width: 40%;
  height: 60%;
  background: #9e9e9e;
  position: absolute;
  left: 30%;
  top: 10%;
  z-index: 9999;
}

/* 
.system-sensor-item-video-show {
  width: 100%;
  height: 100%;
  background: #060e33;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}

.system-sensor-item-video-unshow {
  display: none;
}

.system-sensor-item-video-show-content {
  position: relative;
  margin: 3.125rem auto;
  z-index: 999;
}

.system-sensor-item-video-show-icon {
  color: #fff;
  z-index: 9999;
  font-size: 1.875rem;
  position: absolute;
  top: -1.5625rem;
  left: 45%;
}

.system-sensor-item-video-show-video {
  width: 1200px;
  border-radius: 1.25rem;
  overflow: hidden;
  z-index: 9999;
} */
</style>