<template>
  <div class="payment-method">
    <div class="title">收款方式</div>
    <div class="add">
      <el-button type="primary" size="small" @click="toAddDetails">
        添加
      </el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column
          prop="index"
          label="序号"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="typeName"
          label="类型"
          align="center"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="statusName"
          label="状态"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="account"
          label="账号"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button
              type="warning"
              size="small"
              @click="stopUsingClick(scope.row)"
              >停用</el-button
            >
            <el-button type="danger" size="small" @click="editClick(scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "PaymentMethod",
  props: {},
  data() {
    return {
      tableData: [],
      typeOptions: [
        { value: "0", label: "微信" },
        { value: "1", label: "支付宝" },
        { value: "2", label: "银行卡" }
      ],
      statusOptions: [
        { value: "0", label: "启用" },
        { value: "1", label: "停用" }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    this.tableData = [
      {
        index: "1",
        type: "0",
        typeName: "微信",
        status: "1",
        statusName: "启用",
        account: "Peter_BDH",
        realName: "孟维仁",
        qrCode:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2488581882,381693902&fm=26&gp=0.jpg",
        bankName: "",
        cardNum: "",
        bankCardName: "",
        remarks: "我叫孟维仁"
      },
      {
        index: "2",
        type: "1",
        typeName: "支付宝",
        status: "1",
        statusName: "启用",
        account: "wsghl9421",
        realName: "郭翰龙",
        qrCode:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2488581882,381693902&fm=26&gp=0.jpg",
        bankName: "",
        cardNum: "",
        bankCardName: "",
        remarks: "我叫郭翰龙"
      },
      {
        index: "3",
        type: "2",
        typeName: "银行卡",
        status: "0",
        statusName: "停用",
        account: "6222020912005243510",
        realName: "",
        qrCode:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2488581882,381693902&fm=26&gp=0.jpg",
        bankName: "中国银行",
        bankCardName: "李明皓",
        remarks: "我叫李明皓"
      }
    ];
  },
  mounted() {},
  methods: {
    ...mapMutations(["SET_PAYDETAILSDATA"]),
    stopUsingClick(data) {
      console.log("data>>>", data);
    },
    editClick(data) {
      this.SET_PAYDETAILSDATA(data);
      this.$router.push({
        path: "/basicSetup/pay-details"
      });
    },
    toAddDetails() {
      this.$router.push({
        path: "/basicSetup/pay-details"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.payment-method {
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .add {
    text-align: right;
    padding: 10px 0;
  }
}
</style>
