<template>
  <div class="sticky white shadow">
    <div class="navbar navbar-expand d-flex justify-content-between bd-navbar">
      <Title></Title>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <MessagesDropDown :data="dummyData.employees" />
          <NotificationsDropDown :data="dummyData.employees" />
          <li>
            <a
              href
              class="nav-link ml-2"
              data-toggle="control-sidebar"
              @click.prevent="toggleRightSidebar"
            >
              <i class="icon-format_align_right right-sidebar-handle"></i>
            </a>
          </li>
          <UserDropDown :data="dummyData.employees" />
        </ul>
      </div>
    </div>
    <TabsNav />
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
      dummyData: json
    };
  },
  methods: {
    toggleRightSidebar() {
      let el = document.querySelector(".control-sidebar");
      this.toggleClass(el, "control-sidebar-open");
    }
  }
};
</script>