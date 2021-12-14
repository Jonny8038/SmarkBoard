<template>
  <div>
    <div class="system-sensor-item-video-show">
      <div class="system-sensor-item-video-show-content">
        <span class="iconfont icon-guanbi system-sensor-item-video-show-icon" @click="closeShowVideo">
        </span>
        <video
          class="system-sensor-item-video-show-video"
          src="../assets/video.mp4"
          controls
          autoplay
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowVideo: true,
    };
  },
  methods: {
    closeShowVideo() {
      this.$emit('closeshowvideo',false)
    }
  },
};
</script>

<style scoped>
.system-sensor-item-video-show {
  width: 100%;
  height: 100%;
  background: #060e33;
  display: flex;
  justify-content: center;
  align-items: center;
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
}
</style>