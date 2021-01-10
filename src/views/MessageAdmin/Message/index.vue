<template>
  <div class="message">
    <div class="title">消息</div>
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
          </template>
        </el-table-column>
        <el-table-column
          prop="typeName"
          label="类型"
          align="center"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="title"
          label="标题"
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
          label="时间"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="statusName"
          label="状态"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button type="warning" size="small" @click="toDetails(scope.row)"
              >查看</el-button
            >
            <el-button type="danger" size="small" @click="delClick(scope.row)"
              >删除</el-button
            >
          </template></el-table-column
        >
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Message",
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
        value: "0",
        label: "全部"
      },
      {
        value: "1",
        label: "订单提醒"
      },
      {
        value: "2",
        label: "余额提醒"
      },
      {
        value: "3",
        label: "系统通知"
      }
    ];
    this.tableData = [
      {
        type: "1",
        typeName: "订单提醒",
        title: "账户积分调整通知",
        content: "您有新的订单，请及时处理。",
        time: "2020-12-28 19:32",
        status: "0",
        statusName: "未读"
      },
      {
        type: "2",
        typeName: "余额提醒",
        title: "账户积分调整通知",
        content: "您有新的订单，请及时处理。",
        time: "2020-12-28 19:32",
        status: "1",
        statusName: "已读"
      },
      {
        type: "3",
        typeName: "系统通知",
        title: "账户积分调整通知",
        content: "您有新的订单，请及时处理。",
        time: "2020-12-28 19:32",
        status: "1",
        statusName: "已读"
      }
    ];
  },
  mounted() {},
  methods: {
    ...mapMutations(["SET_MESSAGEDETAILSDATA"]),
    toDetails(data) {
      this.SET_MESSAGEDETAILSDATA(data),
        this.$router.push({
          path: "/message-admin/message-details"
        });
    },
    delClick(data) {
      console.log("data>>>", data);
    }
  }
};
</script>

<style lang="less" scoped>
.message {
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .table {
    margin-top: 10px;
  }
}
</style>
