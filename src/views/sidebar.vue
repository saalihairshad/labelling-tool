<template>
  <div>
    <aside
      class="main-sidebar fixed offcanvas b-r sidebar-tabs"
      data-toggle="offcanvas"
    >
      <div class="sidebar">
        <div class="d-flex hv-100 align-items-stretch">
          <div class="indigo text-white">
            <div class="nav mt-5 pt-5 flex-column nav-pills">
              <a
                @click="handleRoute('tweets')"
                :class="{ active: isActive('tweets') }"
              >
                <i class="icon-twitter"></i>
              </a>

              <a @click="handleRoute('appstore')" :class="isActive('appstore')">
                <i class="icon-apple"></i>
              </a>
              <a @click="handleRoute('documentation')" :class="isActive('t1')">
                <i class="el-icon-document"></i>
              </a>
              <!-- <a class="nav-link blink skin_handle" @click="toggleSkin()">
                <i class="icon-lightbulb_outline"></i>
              </a> -->

              <a @click="handleLogOut" class="nav-link" v-if="user">
                <i class="el-icon-switch-button"></i>
              </a>
            </div>
          </div>
          <!-- <div class="tab-content flex-grow-1" id="v-pills-tabContent">
            <div
              class="tab-pane fade"
              :class="{ 'active show': isActive('t1') }"
              id="t1"
            >
              <div class="relative brand-wrapper sticky b-b">
                <div
                  class="d-flex justify-content-between align-items-center p-3"
                >
                  <div class="text-xs-center">
                    <span class="font-weight-lighter s-18">Menu</span>
                  </div>
                  <div class="badge badge-danger r-0">New Panel</div>
                </div>
              </div>

              <ul id="demo" class="sidebar-menu">
                <tree-item
                  class="item"
                  v-for="item in sidebarItems"
                  :key="item.name"
                  :item="item"
                ></tree-item>
              </ul>
            </div>
          </div> -->
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
