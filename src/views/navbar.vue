<template>
  <div class="sticky white shadow" v-if="user">
    <div class="navbar navbar-expand d-flex justify-content-between bd-navbar">
      <Title></Title>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="nav-link ml-2">
            <el-dropdown class="mt-2" :hide-on-click="false">
              <span class="el-dropdown-link">
                Hi, {{ user.name }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  ><a @click="handleLogOut">Log Out</a></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
    <!-- <TabsNav /> -->
  </div>
</template>
<script>
import Title from "../components/navbar/title";
import MessagesDropDown from "../components/navbar/messages";
import NotificationsDropDown from "../components/navbar/notifications";
import UserDropDown from "../components/navbar/user";
import TabsNav from "../components/navbar/tabsNav";
import json from "../assets/json/dashboard.json";
import mixins from "../helpers/mixins.js";
import auth from "../services/authService";

export default {
  mixins: [mixins],
  components: {
    Title,
    MessagesDropDown,
    NotificationsDropDown,
    UserDropDown,
    TabsNav
  },
  data() {
    return {
      dummyData: json,
      user: []
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
    toggleRightSidebar() {
      let el = document.querySelector(".control-sidebar");
      this.toggleClass(el, "control-sidebar-open");
    }
  },
  mounted() {
    this.user = auth.getCurrentUser();
  }
};
</script>
