<template>
  <div class="home">
    <div class="home-left">
      <div class="home-left-sensor">
        <span class="home-left-sensor-title">传感器信息</span>
        <div>
          <div
            :class="
              showsensorData
                ? 'home-left-sensor-item-show'
                : 'home-left-sensor-item'
            "
          >
            <div class="home-left-sensor-item-logo">
              <i class="iconfont icon-caozuo-wendu"></i>
              <span>温度</span>
            </div>
            <div class="home-left-sensor-item-info">
              <span>最高值: 40.3°</span>
              <span>平均值: 31.5°</span>
              <span>最低值: 28.6°</span>
            </div>
            <div class="home-left-sensor-item-info-open">
              <i class="el-icon-arrow-down" @click="showData"></i>
            </div>

            <div
              class="home-left-sensor-item-show-alldata"
              v-show="showsensorData"
            >
              <div class="home-left-sensor-item-show-alldata-item">
                <span class="home-left-sensor-item-show-alldata-item-name"
                  >1号传感器</span
                >
                <span class="home-left-sensor-item-show-alldata-item-num"
                  >数值:36.2°</span
                >
              </div>
              <div class="home-left-sensor-item-show-alldata-item">
                <span class="home-left-sensor-item-show-alldata-item-name"
                  >2号传感器</span
                >
                <span class="home-left-sensor-item-show-alldata-item-num"
                  >数值:36.2°</span
                >
              </div>
              <div class="home-left-sensor-item-show-alldata-item">
                <span class="home-left-sensor-item-show-alldata-item-name"
                  >3号传感器</span
                >
                <span class="home-left-sensor-item-show-alldata-item-num"
                  >数值:36.2°</span
                >
              </div>
              <div class="home-left-sensor-item-show-alldata-item">
                <span class="home-left-sensor-item-show-alldata-item-name"
                  >4号传感器</span
                >
                <span class="home-left-sensor-item-show-alldata-item-num"
                  >数值:36.2°</span
                >
              </div>
              <div class="home-left-sensor-item-show-alldata-item">
                <span class="home-left-sensor-item-show-alldata-item-name"
                  >5号传感器</span
                >
                <span class="home-left-sensor-item-show-alldata-item-num"
                  >数值:36.2°</span
                >
              </div>
              <div class="home-left-sensor-item-show-alldata-item">
                <span class="home-left-sensor-item-show-alldata-item-name"
                  >6号传感器</span
                >
                <span class="home-left-sensor-item-show-alldata-item-num"
                  >数值:36.2°</span
                >
              </div>
              <div class="home-left-sensor-item-show-alldata-item">
                <span class="home-left-sensor-item-show-alldata-item-name"
                  >7号传感器</span
                >
                <span class="home-left-sensor-item-show-alldata-item-num"
                  >数值:36.2°</span
                >
              </div>
              <div class="home-left-sensor-item-show-alldata-item">
                <span class="home-left-sensor-item-show-alldata-item-name"
                  >8号传感器</span
                >
                <span class="home-left-sensor-item-show-alldata-item-num"
                  >数值:36.2°</span
                >
              </div>
              <div class="home-left-sensor-item-show-alldata-item">
                <span class="home-left-sensor-item-show-alldata-item-name"
                  >8号传感器</span
                >
                <span class="home-left-sensor-item-show-alldata-item-num"
                  >数值:36.2°</span
                >
              </div>
            </div>
          </div>

          <div class="home-left-sensor-item">
            <div class="home-left-sensor-item-logo">
              <i class="iconfont icon-IOTtubiao_huabanfuben"></i>
              <span>湿度</span>
            </div>
            <div class="home-left-sensor-item-info">
              <span>最高值: 40.3°</span>
              <span>平均值: 31.5°</span>
              <span>最低值: 28.6°</span>
            </div>
            <div class="home-left-sensor-item-info-open">
              <i class="el-icon-arrow-down" @click="showData"></i>
            </div>
          </div>
          <div class="home-left-sensor-item">
            <div class="home-left-sensor-item-logo">
              <i class="iconfont icon-dianya"></i>
              <span>电压</span>
            </div>
            <div class="home-left-sensor-item-info">
              <span>最高值: 40.3°</span>
              <span>平均值: 31.5°</span>
              <span>最低值: 28.6°</span>
            </div>
            <div class="home-left-sensor-item-info-open">
              <i class="el-icon-arrow-down" @click="showData"></i>
            </div>
          </div>
          <div class="home-left-sensor-item">
            <div class="home-left-sensor-item-logo">
              <i class="iconfont icon-shexiangtou"></i>
              <span>视觉</span>
            </div>
            <div class="home-left-sensor-item-info">
              <span>最高值: 40.3°</span>
              <span>平均值: 31.5°</span>
              <span>最低值: 28.6°</span>
            </div>
            <div class="home-left-sensor-item-info-open">
              <i class="el-icon-arrow-down" @click="showData"></i>
            </div>
          </div>
          <div class="home-left-sensor-item">
            <div class="home-left-sensor-item-logo">
              <i class="iconfont icon-huoyanjiare"></i>
              <span>火焰</span>
            </div>
            <div class="home-left-sensor-item-info">
              <span>最高值: 40.3°</span>
              <span>平均值: 31.5°</span>
              <span>最低值: 28.6°</span>
            </div>
            <div class="home-left-sensor-item-info-open">
              <i class="el-icon-arrow-down" @click="showData"></i>
            </div>
          </div>
          <div class="home-left-sensor-item">
            <div class="home-left-sensor-item-logo">
              <i class="el-icon-sunny"></i>
              <span>温度</span>
            </div>
            <div class="home-left-sensor-item-info">
              <span>最高值: 40.3°</span>
              <span>平均值: 31.5°</span>
              <span>最低值: 28.6°</span>
            </div>
            <div class="home-left-sensor-item-info-open">
              <i class="el-icon-arrow-down" @click="showData"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="home-left-nowinfo">
        <span class="home-left-nowinfo-title">实时换电信息</span>
        <div class="home-left-nowinfo-conter">
          <div class="home-left-nowinfo-left">
            <div
              class="home-left-nowinfo-left-caricon iconfont icon-xiaoche"
            ></div>
            <div class="home-left-nowinfo-left-info">
              <span>车牌号码: 粤B16822</span>
              <span>车辆类型: 营运车辆</span>
              <span>车辆品牌: 特斯拉</span>
              <span>剩余电量: 10%/10Kwh</span>
            </div>
          </div>
          <div class="home-left-nowinfo-right">
            <div class="home-left-nowinfo-right-info">
              <span>换电次数:5次</span>
              <span>上次换电时间:2021/12/9</span>
              <span>预计换电量:90%90Kwh</span>
              <span>预计换电费用:90元</span>
              <span>账户余额:165.20元</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-center">
      <div class="home-center-content">
        <div class="home-center-title">
          <span>实时监控</span>
          <span class="home-center-title-station-monitor">站内监控</span>
        </div>
        <div class="home-center-content-video">
          <div class="home-center-content-video-item">
            <div class="home-center-content-video-item-name-up">
              <div>换电站入口</div>
              <span></span>
            </div>
            <video src="../assets/video.mp4" controls autoplay></video>
          </div>
          <div class="home-center-content-video-item">
            <div class="home-center-content-video-item-name-up">
              <div>换电平台入口</div>
              <span></span>
            </div>
            <video src="../assets/video.mp4" controls autoplay></video>
          </div>
          <div class="home-center-content-video-item">
            <div class="home-center-content-video-item-name-up">
              <div>车辆定位</div>
              <span></span>
            </div>
            <video src="../assets/video.mp4" controls autoplay></video>
          </div>
          <div class="home-center-content-video-item">
            <video src="../assets/video.mp4" controls autoplay></video>
            <div class="home-center-content-video-item-name-dowm">
              <div>举升平台</div>
              <span></span>
            </div>
          </div>
          <div class="home-center-content-video-item">
            <video src="../assets/video.mp4" controls autoplay></video>
            <div class="home-center-content-video-item-name-dowm">
              <div>换电站出口</div>
              <span></span>
            </div>
          </div>
          <div class="home-center-content-video-item">
            <video src="../assets/video.mp4" controls autoplay></video>
            <div class="home-center-content-video-item-name-dowm">
              <div>换电站全景</div>
              <span></span>
            </div>
          </div>
        </div>
        <div class="home-center-content-step">
          <el-steps :active="6" align-center>
            <el-step title="等待车辆"></el-step>
            <el-step title="车辆识别"></el-step>
            <el-step title="道闸打开"></el-step>
            <el-step title="车辆进站"></el-step>
            <el-step title="车辆到位"></el-step>
            <el-step title="拆卸电池"></el-step>
            <el-step title="拆卸完成"></el-step>
            <el-step title="安装电池"></el-step>
            <el-step title="安装完成"></el-step>
            <el-step title="扣费中"></el-step>
            <el-step title="扣费完成"></el-step>
            <el-step title="道闸打开"></el-step>
            <el-step title="车辆出站"></el-step>
          </el-steps>
        </div>
      </div>
    </div>
    <div class="home-right">
      <div class="home-right-warning">
        <span class="home-right-warning-title">告警状态信息</span>
        <div class="home-right-warning-item">
          <div class="home-right-warning-item-left">
            <span></span>
            <div class="home-right-warning-item-left-tis">
              <span>车辆入口警告</span>
              <span>设备类型: 道闸</span>
            </div>
          </div>
          <div class="home-right-warning-item-right">
            <span>告警原因:车辆未注册</span>
            <span>2021/10/28 12:40:36 155</span>
          </div>
        </div>
        <div class="home-right-warning-item">
          <div class="home-right-warning-item-left">
            <span></span>
            <div class="home-right-warning-item-left-tis">
              <span>车辆入口警告</span>
              <span>设备类型: 道闸</span>
            </div>
          </div>
          <div class="home-right-warning-item-right">
            <span>告警原因:车辆未注册</span>
            <span>2021/10/28 12:40:36 155</span>
          </div>
        </div>
        <div class="home-right-warning-item">
          <div class="home-right-warning-item-left">
            <span></span>
            <div class="home-right-warning-item-left-tis">
              <span>车辆入口警告</span>
              <span>设备类型: 道闸</span>
            </div>
          </div>
          <div class="home-right-warning-item-right">
            <span>告警原因:车辆未注册</span>
            <span>2021/10/28 12:40:36 155</span>
          </div>
        </div>
        <div class="home-right-warning-item">
          <div class="home-right-warning-item-left">
            <span></span>
            <div class="home-right-warning-item-left-tis">
              <span>车辆入口警告</span>
              <span>设备类型: 道闸</span>
            </div>
          </div>
          <div class="home-right-warning-item-right">
            <span>告警原因:车辆未注册</span>
            <span>2021/10/28 12:40:36 155</span>
          </div>
        </div>
        <div class="home-right-warning-item">
          <div class="home-right-warning-item-left">
            <span></span>
            <div class="home-right-warning-item-left-tis">
              <span>车辆入口警告</span>
              <span>设备类型: 道闸</span>
            </div>
          </div>
          <div class="home-right-warning-item-right">
            <span>告警原因:左上方视觉传感器无监控画面</span>
            <span>2021/10/28 12:40:36 155</span>
          </div>
        </div>
        <div class="home-right-warning-item">
          <div class="home-right-warning-item-left">
            <span></span>
            <div class="home-right-warning-item-left-tis">
              <span>车辆入口警告</span>
              <span>设备类型: 道闸</span>
            </div>
          </div>
          <div class="home-right-warning-item-right">
            <span>告警原因:车辆未注册</span>
            <span>2021/10/28 12:40:36 155</span>
          </div>
        </div>
      </div>
      <div class="home-right-map">
        <span class="home-right-map-title">车辆分布轨迹</span>
        <div class="home-right-map-content">
          <baidu-map
            class="home-right-map-content-map"
            :center="mapcenter"
            :zoom="mapzoom"
            @click="locationPoint"
          >
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-geolocation>
            <div v-for="(point, index) in resultData" :key="index">
              <bm-marker
                :position="{ lng: point.lng, lat: point.lat }"
                :dragging="true"
              >
                <bm-label
                  :content="point.address"
                  :labelStyle="{ color: 'red', fontSize: '1.25rem' }"
                ></bm-label>
              </bm-marker>
            </div>
          </baidu-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showsensorData: false, //展开传感器数据
      mapcenter: { lng: 113.63, lat: 34.7533 },
      mapzoom: 13,
      resultData: [
        {
          address: "北京市丰台街道",
          lng: "116.30",
          lat: "39.55",
          source: "北京日报",
        },
      ],
    };
  },

  methods: {
    //展开传感器数量
    showData() {
      this.showsensorData = !this.showsensorData;
    },

    locationPoint(e) {
      this.mapcenter.lng = e.point.lng;
      this.mapcenter.lat = e.point.lat;
    },
  },
};
</script>


<style scoped>
.home {
  margin-top: 1.875rem;
  display: flex;
  flex-direction: row;
}

/* 左边 */
.home-left {
  width: 20%;
}

.home-left-sensor {
  user-select: none;
  height: 70%;
  border: 0.125rem solid #3a6b86;
  border-radius: 0.3125rem;
  background: #080c3b;
  padding: 0.625rem;
  margin-bottom: 4%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.home-left-sensor-title {
  color: #a7a9b8;
  font-size: 1.125rem;
}

.home-left-sensor-item {
  height: 3.125rem;
  cursor: pointer;
  background: #0b1143;
  border: 0.125rem solid #162a52;
  border-radius: 0.625rem;
  margin: 0.625rem 0;
  padding: 0.625rem 0rem;
  display: flex;
  flex-direction: row;
}

.home-left-sensor-item-show {
  width: 21.75rem;
  height: 31.25rem;
  cursor: pointer;
  background: #0b1143;
  border: 0.125rem solid #162a52;
  border-radius: 0.625rem;
  padding: 0.625rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  z-index: 99999;
}
.home-left-sensor-item-show > .home-left-sensor-item-info {
  width: 60%;
  height: 3.125rem;
  color: #dcdce3;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-left-sensor-item-show > .home-left-sensor-item-info-open {
  display: block;
  width: 20%;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-left-sensor-item-show > .home-left-sensor-item-info-open i {
  width: 1.25rem;
  height: 1.25rem;
  line-height: 1.25rem;
  background: #999caf;
  border-radius: 50%;
}

.home-left-sensor-item-show > .home-left-sensor-item-logo {
  width: 40%;
  height: 3.125rem;
  font-size: 1rem;
  color: #83e5f3;
  border-right: 0.125rem solid #192f58;
  display: flex;
  flex-direction: column;
}

.home-left-sensor-item-show-alldata {
  height: 25rem;
  width: 20.4375rem;
  color: #fff;
  padding: 0.625rem;
  position: absolute;
  top: 5rem;
  left: 0;
  /* background: sienna; */
  overflow: auto;
}

.home-left-sensor-item-show-alldata-item {
  font-size: 1rem;
  width: 20rem;
  margin: 0.625rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.home-left-sensor-item-show-alldata-item-name {
  width: 26%;
  text-align: center;
  border-right: 0.0625rem solid #152853;
  padding: 0.6875rem;
}
.home-left-sensor-item-show-alldata-item-num {
  margin-left: 3.125rem;
}
.home-left-sensor-item-logo {
  width: 20%;
  width: 40%;
  height: 3.125rem;
  font-size: 1rem;
  color: #83e5f3;
  border-right: 0.125rem solid #192f58;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-left-sensor-item-logo i {
  font-size: 2.1875rem;
}

.home-left-sensor-item-info {
  width: 60%;
  color: #dcdce3;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-left-sensor-item-info-open {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-left-sensor-item-info-open i {
  width: 1.25rem;
  height: 1.25rem;
  background: #999caf;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 实时换电部分 */
.home-left-nowinfo {
  height: 28%;
  color: #dcdce3;
  background: #0b1143;
  border: 0.125rem solid #3a6b86;
  border-radius: 0.3125rem;
  padding: 0.625rem;
  box-sizing: border-box;
}

.home-left-nowinfo-title {
  color: #a7a9b8;
  font-size: 1.125rem;
}

.home-left-nowinfo-conter {
  padding: 0.75rem;
  display: flex;
  flex-direction: row;
}

.home-left-nowinfo-left {
  width: 50%;
  border-right: 0.0625rem solid #1b335a;
  padding: 0 0.9375rem 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-left-nowinfo-left-caricon {
  width: 5rem;
  height: 5rem;
  font-size: 4.375rem;
  color: #01a1d0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-left-nowinfo-left-info {
  font-size: 0.8125rem;
  margin-top: 0.625rem;
  line-height: 1.25rem;
  display: flex;
  flex-direction: column;
}

.home-left-nowinfo-right {
  width: 50%;
  padding: 0 0 0 0.9375rem;
}

.home-left-nowinfo-right-info {
  font-size: 0.875rem;
  font-weight: 520;
  line-height: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 中间 */
.home-center {
  user-select: none;
  color: #fff;
  width: 58%;
  background: #080c3b;
  margin: 0 1%;
  padding: 0.625rem 1.25rem;
  overflow: hidden;
  box-sizing: border-box;
  border: 0.125rem solid #3a6b86;
  border-radius: 0.3125rem;
}

.home-center-title {
  color: #a7a9b8;
  font-size: 1.125rem;
  margin-bottom: 0.625rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.home-center-title-station-monitor {
  cursor: pointer;
  border: 0.125rem solid #437a93;
  border-radius: 0.3125rem;
  padding: 0.125rem 0.1875rem;
}
.home-center-content-video {
  width: 100%;
  height: 43.75rem;
  background: #0b1143;
  border: 0.125rem solid #162850;
  border-radius: 0.625rem;
  box-sizing: border-box;
  margin-bottom: 1.875rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
}

.home-center-content-video-item {
  width: 33%;
  height: 20.625rem;
}

.home-center-content-video-item-name-up {
  font-size: 1rem;
  padding: 0.3125rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.home-center-content-video-item-name-dowm {
  font-size: 1rem;
  padding: 0.3125rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.home-center-content-video-item video {
  height: 100%;
  width: 100%;
  border: 0.0625rem solid #172a52;
}

.home-center-content-video-item-name-up span,
.home-center-content-video-item-name-dowm span {
  width: 1.25rem;
  height: 1.25rem;
  background: #0184d8;
  border-radius: 50%;
}

.home-center-content-step {
  cursor: pointer;
  overflow: hidden;
}

/* 右边 */
.home-right {
  width: 20%;
  color: #fff;
}

.home-right-warning {
  height: 40%;
  user-select: none;
  background: #080c3b;
  border: 0.1875rem solid #3a6b86;
  border-radius: 0.3125rem;
  padding: 0.625rem;
  margin-bottom: 2%;
  overflow: hidden;
}
.home-right-warning-title {
  color: #a7a9b8;
  font-size: 1.125rem;
}
.home-right-warning-item {
  cursor: pointer;
  color: #d2d5db;
  margin: 0.9375rem 0.3125rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.home-right-warning-item-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.home-right-warning-item-left > span {
  width: 0.5rem;
  height: 0.5rem;
  background: #e6a23c;
  border-radius: 50%;
  margin-right: 0.625rem;
}

.home-right-warning-item-left-tis {
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
}

.home-right-warning-item-right {
  font-size: 0.75rem;
  text-align: right;
  display: flex;
  flex-direction: column;
}

.home-right-map {
  user-select: none;
  height: 53%;
  background: #080c3b;
  border: 0.1875rem solid #3a6b86;
  border-radius: 0.3125rem;
  padding: 0.625rem;
}

.home-right-map-title {
  color: #a7a9b8;
  font-size: 1.125rem;
}

.home-right-map-content {
  overflow: hidden;
}

.home-right-map-content-map {
  width: 100%;
  height: 25rem;
  margin: 0.625rem 0;
}
</style>