<template>
  <div class="operation-record">
    <div class="title">操作记录</div>
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
    </el-row>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column label="序号" align="center" width="100">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template></el-table-column
        >
        <el-table-column
          prop="typeName"
          label="类型"
          align="center"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="content"
          label="内容"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="time"
          label="操作时间"
          align="center"
          width="200"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "OperationRecord",
  props: {},
  data() {
    return {
      typeOptions: [],
      type: "",
      startTime: "",
      endTime: "",
      tableData: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.typeOptions = [
      {
        value: "1",
        label: "购买积分"
      },
      {
        value: "2",
        label: "发放积分"
      },
      {
        value: "3",
        label: "修改收款方式"
      },
      {
        value: "4",
        label: "修改密码"
      },
      {
        value: "5",
        label: "新增支付方式"
      }
    ];
    this.tableData = [
      {
        index: "1",
        type: "1",
        typeName: "购买积分",
        content: "购买20000积分，订单号：A2020122821180001",
        time: "2020-12-28 21:29"
      },
      {
        index: "2",
        typeName: "发放积分",
        type: "2",
        content: "购买20000积分，订单号：A2020122821180001",
        time: "2020-12-28 21:29"
      },
      {
        index: "3",
        type: "3",
        typeName: "修改收款方式",
        content: "购买20000积分，订单号：A2020122821180001",
        time: "2020-12-28 21:29"
      },
      {
        index: "4",
        type: "4",
        typeName: "修改密码",
        content: "购买20000积分，订单号：A2020122821180001",
        time: "2020-12-28 21:29"
      },
      {
        index: "5",
        type: "5",
        typeName: "新增支付方式",
        content: "购买20000积分，订单号：A2020122821180001",
        time: "2020-12-28 21:29"
      }
    ];
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.operation-record {
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .table {
    margin-top: 10px;
  }
}
</style>
