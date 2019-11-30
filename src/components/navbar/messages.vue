<template>
       <DropDown
            classes="dropdown-menu-right messages-menu"
            icon="icon-envelope-o"
            badge="4"
            badgeClasses="badge badge-success badge-mini rounded-circle"
          >
            <ul class="dropdown-menu-right messages-menu">
              <li class="menu">
                <!-- inner menu: contains the actual data -->
                <ul class="menu pl-2 pr-2">
                  <!-- start message -->
                  <li v-for="user in data" :key="user.id">
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
          </DropDown>
</template>
<script>

import DropDown from "./dropDown";
export default {
  props:['data'],
  components: {
    DropDown,
  }
};
</script>