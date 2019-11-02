//import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
// import UserProfile from "@/pages/UserProfile.vue";
import Users from "@/pages/Users.vue";
import Products from "@/pages/Products.vue";
import ProductsCreate from "@/pages/ProductsCreate.vue";
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
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
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
    {
        path: "/users",
        name: "Users",
        component: Users
    }
    
];

export default routes;