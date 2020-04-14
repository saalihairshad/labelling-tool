//import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
// import UserProfile from "@/pages/UserProfile.vue";
// import Users from "@/pages/Users.vue";
import TweetsPage from "@/pages/Tweets.vue";
import AppStorePage from "@/pages/AppStorePage.vue";
import DocumentationPage from "@/pages/DocumentationPage.vue";

import LoginPage from "@/pages/Login.vue";
import RegisterPage from "@/pages/Register.vue";

// import UserProfile from "@/pages/UserProfile.vue";

// import TableList from "@/pages/TableList.vue";
// import Typography from "@/pages/Typography.vue";
// import Icons from "@/pages/Icons.vue";
// import Maps from "@/pages/Maps.vue";
// import Notifications from "@/pages/Notifications.vue";
// import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: Dashboard,
    redirect: "/dashboard",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },

  // {
  //     path: "/users",
  //     name: "Users",
  //     component: Users
  // },
  // {
  //     path: "/user/:id",
  //     name: "User Profoile",
  //     component: UserProfile
  // },
  {
    path: "/tweets",
    name: "Tweets",
    component: TweetsPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/appstore",
    name: "App Store",
    component: AppStorePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/documentation",
    name: "Documentation",
    component: DocumentationPage,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/register",
    name: "Register",
    component: RegisterPage
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage
  }
];

export default routes;
