<template>
  <div>
    <aside class="main-sidebar fixed offcanvas b-r sidebar-tabs" data-toggle="offcanvas">
      <div class="sidebar">
        <div class="d-flex hv-100 align-items-stretch">
          <div class="indigo text-white">
            <div
              class="nav mt-5 pt-5 flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                @click.prevent="setActive('t1')"
                :class="{ active: isActive('t1') }"
                class="nav-link"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#t1"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <i class="icon-inbox2"></i>
              </a>
              <a
                @click.prevent="setActive('t2')"
                :class="{ active: isActive('t2') }"
                class="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#t2"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <i class="icon-add"></i>
              </a>
              <a class="nav-link blink skin_handle" @click="toggleSkin()">
                <i class="icon-lightbulb_outline"></i>
              </a>
              <a class="nav-link" id="v-pills-messages-tab" href="#">
                <i class="icon-message"></i>
              </a>
              <a class="nav-link" id="v-pills-settings-tab" href="#">
                <i class="icon-settings"></i>
              </a>
              <a href>
                <figure class="avatar">
                  <img :src="assetsPath('img/dummy/u3.png')" alt />
                  <span class="avatar-badge online"></span>
                </figure>
              </a>
            </div>
          </div>
          <div class="tab-content flex-grow-1" id="v-pills-tabContent">
            <div class="tab-pane fade" :class="{ 'active show': isActive('t1') }" id="t1">
              <div class="relative brand-wrapper sticky b-b">
                <div class="d-flex justify-content-between align-items-center p-3">
                  <div class="text-xs-center">
                    <span class="font-weight-lighter s-18">Menu</span>
                  </div>
                  <div class="badge badge-danger r-0">New Panel</div>
                </div>
              </div>

              <ul id="demo" class="sidebar-menu">
                <tree-item class="item" v-for="item in sidebarItems" :key="item.name" :item="item"></tree-item>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              v-slimscroll="options"
              :class="{ 'active show': isActive('t2') }"
              id="t2"
            >
              <div class="relative brand-wrapper sticky b-b p-3">
                <div class="form-group input-group-sm has-right-icon">
                  <input
                    v-model="s"
                    @input="filterUsers()"
                    class="form-control form-control-sm light r-30"
                    placeholder="Search"
                    type="text"
                  />
                  <i class="icon-search"></i>
                </div>
              </div>
              <div class="sticky slimScroll">
                <div class="p-2">
                  <div v-if="s!==''">
                    <ul class="list-unstyled" v-if="filterdUser.length > 0">
                      <li class="my-1" v-for="user in filterdUser" :key="user.id">
                        <div class="card no-b p-3">
                          <div class>
                            <div class="image mr-3 float-left">
                              <img class="w-40px" :src="require(`@/assets/${user.image}`)" alt />
                            </div>
                            <div>
                              <div>
                                <strong>{{user.name}}</strong>
                              </div>
                              <small>{{user.email}}</small>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <small v-else>Nothing Found Yet...</small>
                  </div>

                  <div v-show="s===''">
                    <ul class="list-unstyled">
                      <!-- Alphabet with number of contacts -->
                      <li class="pt-3 pb-3 sticky p-3 b-b white">
                        <span class="badge r-3 badge-success">A</span>
                      </li>
                      <!-- Single contact -->
                      <li class="my-1" v-for="user in json.employees" :key="user.id">
                        <div class="card no-b p-3">
                          <div class>
                            <div class="image mr-3 float-left">
                              <img class="w-40px" :src="require(`@/assets/${user.image}`)" alt />
                            </div>
                            <div>
                              <div>
                                <strong>{{user.name}}</strong>
                              </div>
                              <small>{{user.email}}</small>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <ToggleSidebar />
  </div>
</template>


<script>
import TreeItem from "../components/tree-item";
import ToggleSidebar from "../components/toggleSidebar.vue";
import json from "../assets/json/dashboard.json";
import sidebarItems from "../assets/json/sidebar.json";
//import { removeClass } from "../helpers/helpers.js"
import mixins from '../helpers/mixins.js'
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
  methods: {

    filterUsers() {
      this.filterdUser = json.employees.filter(user => this.s === user.name);
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;

      //Open Sidebar when clicked on tab
     // removeClass,
      this.removeClass( document.body, "sidebar-collapse")
    },
        toggleSkin(){
          console.log('change them')
       this.toggleClass(document.body,'theme-dark');
    }
  }
};
</script>