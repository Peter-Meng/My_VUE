<template>
  <div class="asset-management">
    <div class="title">资产管理</div>
    <div class="buy-integral">
      <div class="integral">
        <div class="top">当前用户可用积分</div>
        <div class="bottom">60,000.00<span class="little">积分</span></div>
      </div>
      <div class="btn">
        <el-button type="primary">购买</el-button>
      </div>
    </div>
    <div class="screening-title">购买积分记录</div>
    <el-row>
      <el-col :span="8">
        <label for="type">类型</label>
        <el-select v-model="type" placeholder="请选择">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <label for="orderFormNum">订单号</label>
        <el-input v-model="orderFormNum" placeholder="请输入订单号"></el-input>
      </el-col>
      <el-col :span="8">
        <label for="startTime">开始时间</label>
        <el-date-picker
          v-model="startTime"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </el-col>
      <el-col :span="8">
        <label for="endTime">结束时间</label>
        <el-date-picker
          v-model="endTime"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </el-col>
      <el-col :span="8" class="search">
        <el-button type="primary">查询</el-button>
      </el-col>
    </el-row>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="index" label="序号" align="center" width="100">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column
          prop="orderFormNum"
          label="订单号"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="money"
          label="金额"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="submitTime"
          label="提交时间"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="issueTime"
          label="发放时间"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="hash"
          label="交易哈希"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          align="center"
          width="200"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AssetManagement",
  props: {},
  data() {
    return {
      typeOptions: [],
      tableData: [],
      type: "",
      orderFormNum: "",
      startTime: "",
      endTime: ""
    };
  },
  computed: {},
  watch: {},
  created() {
    this.typeOptions = [
      { value: "0", label: "微信" },
      { value: "1", label: "支付宝" },
      { value: "2", label: "银行卡" }
    ];
    this.tableData = [
      {
        orderFormNum: "123456789654",
        money: "100,000,00",
        submitTime: "2020-12-28 20:15",
        issueTime: "2020-12-28 20:15",
        status: "0",
        statusName: "未发放",
        hash:
          "0x8a494e461bd55af26cf0ba3fa1c2ce9c9597621705591d6493be35c2d950ed9a",
        remark: "色放"
      },
      {
        orderFormNum: "123456789654",
        money: "100,000,00",
        submitTime: "2020-12-28 20:15",
        issueTime: "2020-12-28 20:15",
        status: "1",
        statusName: "已发放",
        hash:
          "0x8a494e461bd55af26cf0ba3fa1c2ce9c9597621705591d6493be35c2d950ed9a",
        remark: "爱的色放"
      },
      {
        orderFormNum: "123456789654",
        money: "100,000,00",
        submitTime: "2020-12-28 20:15",
        issueTime: "2020-12-28 20:15",
        status: "2",
        statusName: "已取消",
        hash:
          "0x8a494e461bd55af26cf0ba3fa1c2ce9c9597621705591d6493be35c2d950ed9a",
        remark: "爱的"
      }
    ];
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.asset-management {
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .buy-integral {
    height: 90px;
    display: flex;
    .integral {
      height: 90px;
      width: 100%;
      flex: 1;
      .top {
        height: 45px;
        line-height: 45px;
        font-size: 20px;
        font-weight: bold;
      }
      .bottom {
        height: 45px;
        line-height: 45px;
        font-size: 20px;
        font-weight: bold;
        padding-left: 300px;
        .little {
          margin-left: 10px;
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
    .btn {
      width: 300px;
      height: 90px;
      line-height: 90px;
    }
  }
  .screening-title {
    line-height: 40px;
    height: 40px;
    font-size: 16px;
  }
  .el-col {
    margin: 10px 0;
  }
}
</style>
