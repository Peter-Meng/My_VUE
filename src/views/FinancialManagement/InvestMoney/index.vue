<template>
  <div class="invest-money">
    <div class="title">用户充值记录</div>
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
          prop="num"
          label="数量"
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
          prop="orderFormNum"
          label="订单号"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="typeName"
          label="充值类型"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="time"
          label="充值时间"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="statusName"
          label="状态"
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
          prop="url"
          label="账单截图"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column label="收款账户" align="center">
          <template>
            <span class="look-account">查看</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button type="primary" @click="sendClick(scope.row)"
              >发放</el-button
            >
            <el-button type="primary" @click="clearClickClick(scope.row)"
              >取消</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvestMoney",
  props: {},
  data() {
    return {
      typeOptions: [],
      type: "",
      orderFormNum: "",
      startTime: "",
      endTime: "",
      tableData: []
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
        num: "123",
        money: "123,000.00",
        orderFormNum: "R20201128211001",
        type: "1",
        typeName: "微信",
        time: "2020-12-28 20:50",
        status: "0",
        statusName: "未发放",
        issueTime: "2020-12-28 20:50",
        url: "123123123123",
        remark: "啊手动阀打发"
      }
    ];
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.invest-money {
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .el-col {
    margin: 10px 0;
  }
  .table {
    margin-top: 10px;
    .look-account {
      color: #00bfbf;
      cursor: pointer;
    }
  }
}
</style>
