import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 导航栏重复点击报错问题
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const Layout = () => import("@/Layout");

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home", // 首页
        component: () => import("../views/Home/index"),
        name: "Message"
      }
    ]
  },
  {
    path: "/basicSetup", // 基础设置
    component: Layout,
    redirect: "/basicSetup",
    children: [
      {
        path: "payment-method", // 收款方式
        component: () => import("../views/BasicSetup/PaymentMethod/index"),
        name: "PaymentMethod"
      },
      {
        path: "pay-details", // 收款方式
        component: () => import("../views/BasicSetup/PayDetails/index"),
        name: "PayDetails"
      },
      {
        path: "remind-set", // 提醒设置
        component: () => import("../views/BasicSetup/RemindSet/index"),
        name: "RemindSet"
      }
    ]
  },
  {
    path: "/message-admin", // 消息管理
    component: Layout,
    redirect: "/message-admin",
    children: [
      {
        path: "message", // 消息
        component: () => import("../views/MessageAdmin/Message/index"),
        name: "Message"
      },
      {
        path: "message-details", // 消息详情
        component: () => import("../views/MessageAdmin/MessageDetails/index"),
        name: "MessageDetalis"
      },
      {
        path: "operation-record", // 操作日志
        component: () => import("../views/MessageAdmin/OperationRecord/index"),
        name: "OperationRecord"
      }
    ]
  },
  {
    path: "/financial-management", // 财务管理
    component: Layout,
    redirect: "/financial-management",
    children: [
      {
        path: "asset-management", // 资产管理
        component: () =>
          import("../views/FinancialManagement/AssetManagement/index"),
        name: "AssetManagement"
      },
      {
        path: "invest-money", // 用户充值记录
        component: () =>
          import("../views/FinancialManagement/InvestMoney/index"),
        name: "InvestMoney"
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
