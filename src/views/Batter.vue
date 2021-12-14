<template>
  <div class="batter">
    <div class="batter-conter-count">
      <div class="batter-conter-count-item">
        <div
          class="iconfont icon-lidianchi batter-icon"
          style="background-color: #1fcf23"
        ></div>
        <div class="batter-conter-count-item-info">
          <span class="batter-conter-count-item-num">5 <span>块</span></span>
          <span class="batter-conter-count-item-title">可换电池数量</span>
        </div>
      </div>
      <div class="batter-conter-count-item">
        <div
          class="iconfont icon-chongdianzhong batter-icon"
          style="background-color: #25ecbb"
        ></div>
        <div class="batter-conter-count-item-info">
          <span class="batter-conter-count-item-num">13 <span>块</span></span>
          <span class="batter-conter-count-item-title">在充电池数量</span>
        </div>
      </div>
      <div class="batter-conter-count-item">
        <div
          class="iconfont icon-guzhang batter-icon"
          style="background-color: #e82135"
        ></div>
        <div class="batter-conter-count-item-info">
          <span class="batter-conter-count-item-num">2 <span>块</span></span>
          <span class="batter-conter-count-item-title">故障电池数量</span>
        </div>
      </div>
      <div class="batter-conter-count-item">
        <div
          class="iconfont icon-suoyou batter-icon"
          style="background-color: #476af1"
        ></div>
        <div class="batter-conter-count-item-info">
          <span class="batter-conter-count-item-num">20 <span>块</span></span>
          <span class="batter-conter-count-item-title">电池总数量</span>
        </div>
      </div>
    </div>

    <div class="batter-content-info">
      <div
        class="batter-item"
        v-for="(item, index) in batterCount"
        :key="index"
        @click="showBatterEdital(index)"
      >
        <div class="batter-item-info">
          <span>充电状态:{{ isFull ? "已充满" : "充电中" }} </span>
          <span>电池soc: {{ soc }}%</span>
          <span>总电流: 15A</span>
          <span>总电压: 220V</span>
          <span>单体最高电压: 3.65V</span>
          <span>单体最低电压: 2.8V</span>
          <span>单体最高温度: 32°</span>
          <span>单体最低温度: 30°</span>
          <span>温度: 30°</span>
        </div>
        <div class="batter-item-soc">
          <div v-if="isFull" class="batter-item-status">已充满</div>
          <div
            v-else
            :class="`${
              isFault
                ? 'iconfont icon-gantanhao  batter-item-soc-batter-icon'
                : 'iconfont icon-leiji_leiji  batter-item-soc-batter-icon'
            }`"
            :style="`${isFault ? 'color: #ff1617' : 'color:#05a07a'}`"
          ></div>

          <div class="batter-item-soc-status-head"></div>
          <div class="batter-item-soc-status" ref="div">
            <span :style="{ width: soc + '%', background: socColor }"></span>
          </div>
          <span>{{ index + 1 }}号 {{ soc }}%</span>
          <div v-if="isFault" style="color: #ff1617">
            单体最高电压: {{ 3.65 }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="isShowBatterinfo" class="batter-popover-opacity" />
    <popover
      v-if="isShowBatterinfo"
      class="batter-popover"
      @closeedital="closeedital"
      :batteredieal="batteredieal"
    />
    <!-- 透明层 -->
  </div>
</template>

<script>
import popover from "@/components/BatterPopover.vue";

export default {
  components: {
    popover,
  },
  created() {},
  data() {
    return {
      batterCount: 20, //
      isFault: false, // 是否故障
      isFull: false, //是否满电
      soc: 0, //soc
      socColor: "",
      isShowBatterinfo: false, //是否展示电池详情
      batteredieal: {}, // 电池详情
    };
  },
  methods: {
    //展示电池详情
    showBatterEdital(res) {
      this.isShowBatterinfo = true;
      this.batteredieal = res;
    },

    // 关闭电池详情
    closeedital(res) {
      this.isShowBatterinfo = res;
    },
  },
  mounted() {
    let time = setInterval(() => {
      this.soc++;
      if (this.soc <= 10) {
        this.socColor = "#ff2728"; //红色
      } else if (this.soc <= 20) {
        this.socColor = "#f5e603"; //chengse
      } else if (this.soc > 20) {
        this.socColor = "#12d6a6";
      } else if (this.soc === 100) {
        this.socColor = "#12d6a6";
      }
      if (this.isFault === true) {
        this.soc = 60;
        this.socColor = "#ef6500";
        clearInterval(time);
      }
      if (this.soc === 100) {
        this.soc = 0;
        this.isFull = true;
      }
      if (this.isFull === true) {
        clearInterval(time);
        this.soc = 100;
        this.socColor = "#12d6a6";
      }
    }, 200);
  },
};
</script>

<style scoped>
.batter {
  user-select: none;
  margin-top: 2.5rem;
  color: aliceblue;
  position: relative;
}

/* 电池详情 */
.batter-popover {
  width: 40%;
  height: 60%;
  background: #080c39;
  border-radius: 0.625rem;
  z-index: 9999;
  position: absolute;
  top: 20%;
  left: 30%;
  box-shadow: 0 0 0.625rem 0.625rem #d8d8d8;
}
/* 透明层 */
.batter-popover-opacity {
  width: 100%;
  height: 88%;
  position: absolute;
  left: 0;
  top: 6.25rem;
  background: #080c39;
  opacity: 0.8;
}

.batter-conter-count {
  width: 100%;
  height: 6.25rem;
  border: 0.0625rem solid #082250;
  box-shadow: 0 0 0.1875rem 0.1875rem #091f4e;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.batter-conter-count-item {
  display: flex;
  flex-direction: row;
}

.batter-icon {
  box-sizing: border-box;
  font-size: 2.5rem;
  border-radius: 50%;
  padding: 0.9375rem;
}

.batter-conter-count-item-info {
  margin: 0 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}

.batter-conter-count-item-num {
  font-size: 1.25rem;
}

.batter-conter-count-item-num > span {
  font-size: 0.875rem;
}

.batter-conter-count-item-title {
  font-size: 0.875rem;
}

.batter-content-info {
  user-select: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.batter-item {
  width: 18%;
  height: 10.3125rem;
  border: 0.0625rem solid #163c75;
  border-radius: 0.625rem;
  background: #060d2a;
  margin: 0.625rem;
  padding: 0.3125rem 0.9375rem;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.batter-item-info {
  width: 50%;
  font-size: 0.75rem;
  color: #80d6de;
  display: flex;
  flex-direction: column;
}

.batter-item-soc {
  width: 50%;
  height: 45%;
  text-align: center;
  position: relative;
}

.batter-item-soc-batter-icon {
  font-size: 3.125rem;
  color: #06a07a;
  position: absolute;
  top: 15%;
  left: 30%;
}
.batter-item-soc > span {
  font-size: 1rem;
  font-weight: 520;
}

.batter-item-soc-status {
  border: none;
  width: 90%;
  height: 100%;
  border: 0.0625rem solid #d8d8d8;
  background: #ffffff;
  margin-bottom: 0.3125rem;
  border-radius: 0.5rem;
  overflow: hidden;
}

.batter-item-soc-status > span {
  display: block;
  height: 102%;
}

.batter-item-status {
  color: #ffffff;
  font-size: 1.375rem;
  position: absolute;
  top: 30%;
  left: 25%;
}
.batter-item-soc-status-head {
  width: 0.75rem;
  height: 2.5rem;
  background: #fff;
  border-radius: 0 0.3125rem 0.3125rem 0;
  position: absolute;
  top: 0.9375rem;
  right: 0.125rem;
}
</style>