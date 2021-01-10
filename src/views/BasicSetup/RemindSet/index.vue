<template>
  <div class="remind-set">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="200px"
      class="demo-ruleForm"
    >
      <el-form-item label="提醒金额" prop="money">
        <el-input
          v-model="ruleForm.money"
          placeholder="请输入提醒金额"
        ></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="phone">
        <el-input
          v-model="ruleForm.phone"
          placeholder="请输入接受手机号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >保存</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "RemindSet",
  props: {},
  data() {
    return {
      ruleForm: {
        money: "10000.00",
        phone: 13555378333
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          console.log("this.ruleForm>>>", this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.remind-set {
  padding: 10px;
  width: 40%;
  height: 100%;
  box-sizing: border-box;
}
</style>
