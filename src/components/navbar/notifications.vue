<template>
    
          <DropDown
            classes="dropdown-menu-right notifications-menu"
            icon="icon-notifications_none"
            badge="4"
            badgeClasses="badge badge-danger badge-mini rounded-circle"
          >
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
              <li class="footer p-2 text-center">
                <a href="#">View all</a>
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