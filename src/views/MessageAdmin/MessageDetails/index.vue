<template>
  <div class="message-details">
    <div class="title">消息详情</div>
    <div class="message-details-col">
      类型
      <div class="content">{{ detailsData.typeName }}</div>
    </div>
    <div class="message-details-col">
      标题
      <div class="content">{{ detailsData.title }}</div>
    </div>
    <div class="message-details-col">
      时间
      <div class="content">{{ detailsData.time }}</div>
    </div>
    <div class="message-details-col">
      内容
      <div class="content">{{ detailsData.content }}</div>
    </div>
    <el-button class="goBack" type="primary" round @click="goBack"
      >返回</el-button
    >
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "MessageDetails",
  props: {},
  data() {
    return {
      detailsData: {}
    };
  },
  computed: {
    ...mapGetters(["messageDetailsData"])
  },
  watch: {},
  created() {
    this.detailsData = this.messageDetailsData;
  },
  mounted() {},
  beforeDestroy() {
    this.SET_MESSAGEDETAILSDATA({});
  },
  methods: {
    ...mapMutations(["SET_MESSAGEDETAILSDATA"]),
    goBack() {
      this.SET_MESSAGEDETAILSDATA({});
      this.$router.push({
        path: "/message-admin/message"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.message-details {
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .message-details-col {
    padding-left: 20px;
    line-height: 40px;
    font-size: 16px;
    .content {
      margin-left: 30px;
      display: inline-block;
    }
  }
  .goBack {
    margin-top: 30px;
    margin-left: 20px;
  }
}
</style>
