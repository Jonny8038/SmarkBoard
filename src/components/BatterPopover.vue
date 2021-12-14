<template>
  <div class="popover">
    <div class="popover-batter-edital">
      <div
        class="iconfont icon-guanbi popover-batter-edital-close"
        @click="closeBatterEdital"
      ></div>
      <div class="popover-batter-title">
        <span>电池详细信息</span>
        <span>{{ batteredieal + 1 }}号电池</span>
      </div>
      <div class="popover-batter-info">
        <div class="popover-batter-item-info">
          <span>电池编码:</span>
          <span>{{ "XOB354" }}</span>
        </div>
        <div class="popover-batter-item-info">
          <span>电池型号:</span>
          <span>{{ "EVP018094PX68" }}</span>
        </div>
        <div class="popover-batter-item-info">
          <span>电池类别:</span>
          <span>{{ "磷酸铁锂" }}</span>
        </div>
        <div class="popover-batter-item-info">
          <span>电池容量:</span>
          <span>{{ 48.72 }}Kwh</span>
        </div>
        <div class="popover-batter-item-info">
          <span>生产厂家:</span>
          <span>{{ "河南锂动 " }}</span>
        </div>
        <div class="popover-batter-item-info">
          <span> 生产日期:</span>
          <span>{{ "2021 / 11 / 2" }}</span>
        </div>
        <div class="popover-batter-item-info">
          <span>规格尺寸（长宽高）:</span>
          <span>{{ "1533 * 920 * 186.6" }}</span>
        </div>
        <div class="popover-batter-item-info">
          <span> 重量:</span>
          <span>{{ 374.8 }}</span>
        </div>
        <div class="popover-batter-item-info">
          <span>电池累积充电次数:</span>
          <span>{{ 374.8 }}</span>
        </div>
        <div class="popover-batter-item-info">
          <span>电池累积行驶里程:</span>
          <span>{{ 156 }}km</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    batteredieal: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    closeBatterEdital() {
      //关闭电池详情
      this.$emit("closeedital", false);
    },
  },
};
</script>

<style scoped>
.popover {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.popover-batter-edital-close {
  font-size: 3.4375rem;
  position: absolute;
  top: -1.875rem;
  left: 45%;
}

.popover-batter-title {
  width: 100%;
  height: 1.875rem;
  font-size: 1.375rem;
  padding: 1.875rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.popover-batter-info {
  width: 46.875rem;
  height: 28.125rem;
  color: #8bf2fa;
  font-size: 1.5625rem;
  line-height: 1.875rem;
  padding: 1.875rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.popover-batter-item-info {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.popover-batter-info > span {
  width: 60%;
}
</style>