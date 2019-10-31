<template>
  <!--Top Menu Start -->
      <!--navbar-->
      <div class="sticky">
        <div class="navbar navbar-expand d-flex justify-content-between bd-navbar white shadow">
          <div class="relative">
            <div class="d-flex">
              <div class="d-none d-md-block">
                <h1 class="nav-title">{{$route.name}}</h1>
              </div>
            </div>
          </div>
          <div class="navbar-custom-menu">
    <ul class="nav navbar-nav">
      <!-- Messages-->
        <DropDownMenu 
        classes="dropdown-menu-right messages-menu"
        icon="icon-envelope-o" 
        badge="4"
        badgeClasses="badge badge-success badge-mini rounded-circle">
          <ul class="dropdown-menu-right messages-menu">
            <li class="menu">
              <!-- inner menu: contains the actual data -->
              <ul class="menu pl-2 pr-2">
                <!-- start message -->
                <li v-for="user in dummyData.employees" :key="user.id">
                  <a href="#">
                    <div class="avatar float-left">
                      <img :src="user.image" alt />
                      <span class="avatar-badge busy"></span>
                    </div>
                    <h4>
                      {{user.designation}}
                      <small>
                        <i class="icon icon-clock-o"></i> 5 mins
                      </small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <!-- end message -->
              </ul>
            </li>
            <li class="footer s-12 p-2 text-center">
              <a href="#">See All Messages</a>
            </li>
          </ul>
        </DropDownMenu>

     


        <DropDownMenu 
        classes="dropdown-menu-right notifications-menu"
        icon="icon-notifications_none" 
        badge="4"
        badgeClasses="badge badge-danger badge-mini rounded-circle">
          <ul class="dropdown-menu-right notifications-menu">
                   <li class="header">You have 10 notifications</li>
                <li>
                    <!-- inner menu: contains the actual data -->
                    <ul class="menu">
                        <li>
                            <a href="#">
                                <i class="icon icon-data_usage text-success"></i> 5 new members joined today
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="icon icon-data_usage text-danger"></i> 5 new members joined today
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="icon icon-data_usage text-yellow"></i> 5 new members joined today
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="footer p-2 text-center"><a href="#">View all</a></li>
          </ul>
        </DropDownMenu>

        <li>
            <a class="nav-link ml-2 handle" data-toggle="control-sidebar" @click="toggleRightSidebar">
                <i class="icon-format_align_right"></i>
            </a>
        </li>
   <DropDownMenu 
        classes="dropdown-menu-right notifications-menu"
        icon="icon-more_vert"    
        :image="assetsPath('img/dummy/u3.png')"
      >
            
          
            <div class="dropdown-menuX p-4">
                <div class="row box justify-content-between my-4">
                    <div class="col">
                        <a href="#">
                            <i class="icon-apps purple lighten-2 avatar  r-5"></i>
                            <div class="pt-1">Apps</div>
                        </a>
                    </div>
                    <div class="col"><a href="#">
                        <i class="icon-beach_access pink lighten-1 avatar  r-5"></i>
                        <div class="pt-1">Profile</div>
                    </a></div>
                    <div class="col">
                        <a href="#">
                            <i class="icon-perm_data_setting indigo lighten-2 avatar  r-5"></i>
                            <div class="pt-1">Settings</div>
                        </a>
                    </div>
                </div>
                <div class="row box justify-content-between my-4">
                    <div class="col">
                        <a href="#">
                            <i class="icon-star light-green lighten-1 avatar  r-5"></i>
                            <div class="pt-1">Favourites</div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#">
                            <i class="icon-save2 orange accent-1 avatar  r-5"></i>
                            <div class="pt-1">Saved</div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#">
                            <i class="icon-perm_data_setting grey darken-3 avatar  r-5"></i>
                            <div class="pt-1">Settings</div>
                        </a>
                    </div>
                </div>
                <hr>
                <div class="row box justify-content-between my-4">
                    <div class="col">
                        <a href="#">
                            <i class="icon-apps purple lighten-2 avatar  r-5"></i>
                            <div class="pt-1">Apps</div>
                        </a>
                    </div>
                    <div class="col"><a href="#">
                        <i class="icon-beach_access pink lighten-1 avatar  r-5"></i>
                        <div class="pt-1">Profile</div>
                    </a></div>
                    <div class="col">
                        <a href="#">
                            <i class="icon-perm_data_setting indigo lighten-2 avatar  r-5"></i>
                            <div class="pt-1">Settings</div>
                        </a>
                    </div>
                </div>
            </div>
        </DropDownMenu>

    </ul>
  </div>
        </div>
      </div>
 
</template>
<script>
import DropDownMenu from "../components/dropDownMenu"
import json from "../assets/json/dashboard.json"
import mixins from '../helpers/mixins.js'

export default {
   mixins: [mixins],
  components: {
    DropDownMenu,
  },
  data() {
    return {
      dummyData: json
    };
  },
  methods:{
    toggleRightSidebar(){
    let el = document.querySelector('.control-sidebar');
      this.toggleClass(el,'control-sidebar-open');
    },

  }
 
};
</script>