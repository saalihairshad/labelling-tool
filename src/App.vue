<template>
  <div id="app">
    <Sidebar />
    <div class="has-sidebar-left has-sidebar-tabs">
      <NavBar />
      <!-- <div class="container-fluid relative animatedParent animateOnce my-3"> -->
        <router-view></router-view>
      <!-- </div> -->
    </div>
    <SidebarRight />
  </div>
</template>

<script>
import Sidebar from "./views/sidebar.vue";
import SidebarRight from "./views/sidebar-right.vue";
import NavBar from "./views/navbar.vue";
export default {
  name: "app",
  components: {
    Sidebar,
    SidebarRight,
    NavBar
  }
};
</script>