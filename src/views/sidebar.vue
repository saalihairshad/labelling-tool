<template>
  <div>
    <aside
      class="main-sidebar fixed offcanvas b-r sidebar-tabs"
      data-toggle="offcanvas"
      v-if="user"
    >
      <div class="sidebar">
        <div class="d-flex hv-100 align-items-stretch">
          <div class="indigo text-white">
            <div class="nav mt-5 pt-5 flex-column nav-pills">
              <a @click="handleRoute('')" :class="isActive('')">
                <i class="icon-dashboard"></i>
              </a>
              <a @click="handleRoute('tweets')" :class="isActive('tweets')">
                <i class="icon-twitter"></i>
              </a>
              <a @click="handleRoute('appstore')" :class="isActive('appstore')">
                <i class="icon-apple"></i>
              </a>

              <a
                @click="handleRoute('documentation')"
                :class="isActive('documentation')"
              >
                <i class="icon-document"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import TreeItem from "../components/tree-item";
import ToggleSidebar from "../components/toggleSidebar.vue";
import json from "../assets/json/dashboard.json";
import sidebarItems from "../assets/json/sidebar.json";
//import { removeClass } from "../helpers/helpers.js"
import mixins from "../helpers/mixins.js";
import auth from "../services/authService";
export default {
  mixins: [mixins],
  components: {
    ToggleSidebar,
    TreeItem
  },

  data() {
    return {
      s: "",
      filterdUser: [],
      activeItem: "t1",
      options: {
        height: "99.9%"
      },
      sidebarItems,
      json
    };
  },
  computed: {
    user() {
      return auth.authenticated();
    }
  },
  methods: {
    handleLogOut() {
      auth.logout();
    },

    handleRoute(route) {
      this.setActive(route);
      vm.$router.push({ path: "/" + route });
    },
    filterUsers() {
      this.filterdUser = json.employees.filter(user => this.s === user.name);
    },
    isActive(menuItem) {
      console.log("/" + menuItem);
      return this.$route.path === "/" + menuItem && "blue";
    },
    setActive(menuItem) {
      this.activeItem = menuItem;

      //Open Sidebar when clicked on tab
      // removeClass,
      // this.removeClass(document.body, "sidebar-collapse");
    },
    toggleSkin() {
      this.toggleClass(document.body, "theme-dark");
    }
  }
};
</script>
