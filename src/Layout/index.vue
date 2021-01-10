<template>
  <div class="layout">
    <el-row class="navigation">
      <div class="head-title" @click="goTo('/home')">
        代理商管理后台
      </div>
      <el-col :span="4">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu ref="menu" unique-opened>
            <el-submenu
              v-for="item in menuList"
              :key="item.index"
              :index="item.index"
            >
              <template slot="title">
                <span>{{ item.label }}</span>
              </template>
              <template v-for="subItem in item.children">
                <el-menu-item
                  :key="subItem.index"
                  :index="subItem.index"
                  @click="goTo(subItem.path, subItem.index)"
                >
                  {{ subItem.label }}
                </el-menu-item>
              </template>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          index: "1",
          label: "基础设置",
          children: [
            {
              index: "1-1",
              label: "收款方式",
              path: "/basicSetup/payment-method"
            },
            {
              index: "1-2",
              label: "提醒设置",
              path: "/basicSetup/remind-set"
            }
          ]
        },
        {
          index: "2",
          label: "消息管理",
          children: [
            {
              index: "2-1",
              label: "消息",
              path: "/message-admin/message"
            },
            {
              index: "2-2",
              label: "操作日志",
              path: "/message-admin/operation-record"
            }
          ]
        },
        {
          index: "3",
          label: "财务管理",
          children: [
            {
              index: "3-1",
              label: "资产管理",
              path: "/financial-management/asset-management"
            },
            {
              index: "3-2",
              label: "用户充值记录",
              path: "/financial-management/invest-money"
            }
          ]
        }
      ]
    };
  },
  methods: {
    goTo(path, index) {
      if (index) {
        this.defaultActive = index;
      } else {
        this.defaultActive = "";
        this.$nextTick(() => {
          this.$refs.menu.openedMenus = [];
        });
      }
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="less" scoped>
.layout {
  padding: 10px;
  padding-right: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .navigation {
    width: 100%;
    height: 100%;
    .head-title {
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
    .el-col {
      height: calc(100% - 50px);
      .el-menu {
        border: 0 none;
        height: 100%;
      }
    }
  }
}
</style>
