//import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
// import UserProfile from "@/pages/UserProfile.vue";
// import Users from "@/pages/Users.vue";
import TweetsPage from "@/pages/Tweets.vue";
import AppStorePage from "@/pages/AppStorePage.vue";
import DocumentationPage from "@/pages/DocumentationPage.vue";

import LoginPage from "@/pages/Login.vue";
import RegisterPage from "@/pages/Register.vue";
import Products from "@/pages/Products.vue";
import ProductsCreate from "@/pages/ProductsCreate.vue";
// import UserProfile from "@/pages/UserProfile.vue";
import BlankPage from "@/pages/BlankPage.vue";
import TabsPage from "@/pages/TabsPage.vue";
import TabsPageChild1 from "@/pages/TabsPageChild1.vue";
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
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    path: "/products/create",
    name: "Add New Product",
    component: ProductsCreate
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
  },
  {
    path: "/blank",
    name: "Blank Page",
    component: BlankPage,
    meta: {
      icon: "icon-pages",
      subtitle: "Get Started"
    }
  },
  {
    path: "/blank-tabs",
    name: "Blank Tab Page",
    // redirect: "/blank-tabs/tab1",
    component: TabsPage,
    meta: {
      icon: "icon-pages",
      subtitle: "Get Started"
    },
    children: [
      {
        path: "tab1",
        name: "Tab 1",
        component: TabsPageChild1
      },
      {
        path: "tab2",
        name: "Tab 2",
        component: TabsPageChild1
      },
      {
        path: "tab3",
        name: "Tab 3",
        component: TabsPageChild1
      }
    ]
  }
];

export default routes;
