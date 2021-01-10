<template>
  <div class="pay-details">
    <div class="title">收款方式详情</div>
    <div class="details-form">
      <div class="form-title" v-if="Object.keys(payDetailsData).lentth">
        编辑
      </div>
      <div class="form-title" v-else>新增</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="200px"
      >
        <el-form-item label="类型" prop="type">
          <el-select
            v-model="ruleForm.type"
            placeholder="请选择类型"
            @change="typeChange"
          >
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <template v-if="ruleForm.type === '2'">
          <el-form-item label="银行" prop="bankName">
            <el-input
              v-model="ruleForm.bankName"
              placeholder="请输入银行名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="卡号" prop="cardNum">
            <el-input
              v-model="ruleForm.cardNum"
              placeholder="请输入银行卡号"
            ></el-input>
          </el-form-item>
          <el-form-item label="持卡人姓名" prop="account">
            <el-input
              v-model="ruleForm.account"
              placeholder="请输入持卡人姓名"
            ></el-input>
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item label="账号" prop="account">
            <el-input
              v-model="ruleForm.account"
              placeholder="请输入内容"
            ></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="realName">
            <el-input
              v-model="ruleForm.realName"
              placeholder="请输入内容"
            ></el-input>
          </el-form-item>
          <el-form-item label="上传收款二维码" prop="qrCode">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="ruleForm.qrCode"
                :src="ruleForm.qrCode"
                class="avatar"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="备注" prop="remarks">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="请输入内容"
              v-model="ruleForm.remarks"
            >
            </el-input>
          </el-form-item>
        </template>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "PayDetails",
  props: {},
  data() {
    return {
      ruleForm: null,
      typeOptions: [
        { value: "0", label: "微信" },
        { value: "1", label: "支付宝" },
        { value: "2", label: "银行卡" }
      ],
      rules: {
        type: [
          { required: true, message: "请选择收款类型", trigger: "change" }
        ],
        bankName: [
          { required: true, message: "请输入银行名称", trigger: "blur" }
        ],
        cardNum: [
          { required: true, message: "请输入银行卡号", trigger: "blur" }
        ],
        account: [
          { required: true, message: "请输入收款账户", trigger: "blur" }
        ],
        realName: [
          { required: true, message: "请输入真实姓名", trigger: "blur" }
        ],
        qrCode: [
          { required: true, message: "请上传收款二维码", trigger: "change" }
        ],
        remarks: [{ required: true, message: "请输入备注", trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapGetters(["payDetailsData"])
  },
  watch: {},
  created() {
    if (Object.keys(this.payDetailsData).length) {
      this.ruleForm = this.payDetailsData;
    } else {
      this.ruleForm = {
        index: "",
        type: "0",
        typeName: "微信",
        status: "",
        statusName: "",
        account: "",
        realName: "",
        remarks: "",
        qrCode: "",
        bankName: "",
        cardNum: ""
      };
    }
  },
  mounted() {},
  beforeDestroy() {
    this.SET_PAYDETAILSDATA({});
  },
  methods: {
    ...mapMutations(["SET_PAYDETAILSDATA"]),
    typeChange(val) {
      this.ruleForm = {
        index: "",
        type: val,
        typeName: "",
        status: "",
        statusName: "",
        account: "",
        realName: "",
        remarks: "",
        qrCode: "",
        bankName: "",
        cardNum: ""
      };
    },
    handleAvatarSuccess(res, file) {
      this.$set(this.ruleForm, "qrCode", URL.createObjectURL(file.raw));
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }

      return isJPG;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          console.log("this.ruleForm>>>", this.ruleForm);
          this.SET_PAYDETAILSDATA({});
          this.$router.push({
            path: "/basicSetup/payment-method"
          });
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
.pay-details {
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .details-form {
    width: 40%;
    .form-title {
      font-size: 18px;
      line-height: 40px;
      font-weight: bold;
      padding-left: 200px;
    }
    .avatar-uploader {
      width: 260px;
      height: 260px;

      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        width: 260px;
        height: 260px;
        font-size: 36px;
        line-height: 260px;
        border: 1px solid #d4d7de;
        border-radius: 5px;
      }
      .avatar {
        width: 260px;
        height: 260px;
        display: block;
      }
    }
  }
}
</style>
