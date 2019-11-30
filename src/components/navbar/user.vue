<template>
     <DropDown
            classes="dropdown-menu-right notifications-menu"
            icon="icon-more_vert"
            :image="assetsPath('img/dummy/u3.png')"
          >
            <div class="dropdown-menuX p-4">
              <div class="row box justify-content-between my-4">
                <div class="col">
                  <a href="#">
                    <i class="icon-apps purple lighten-2 avatar r-5"></i>
                    <div class="pt-1">Apps</div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i class="icon-beach_access pink lighten-1 avatar r-5"></i>
                    <div class="pt-1">Profile</div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i class="icon-perm_data_setting indigo lighten-2 avatar r-5"></i>
                    <div class="pt-1">Settings</div>
                  </a>
                </div>
              </div>
              <div class="row box justify-content-between my-4">
                <div class="col">
                  <a href="#">
                    <i class="icon-star light-green lighten-1 avatar r-5"></i>
                    <div class="pt-1">Favourites</div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i class="icon-save2 orange accent-1 avatar r-5"></i>
                    <div class="pt-1">Saved</div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i class="icon-perm_data_setting grey darken-3 avatar r-5"></i>
                    <div class="pt-1">Settings</div>
                  </a>
                </div>
              </div>
              <hr />
              <div class="row box justify-content-between my-4">
                <div class="col">
                  <a href="#">
                    <i class="icon-apps purple lighten-2 avatar r-5"></i>
                    <div class="pt-1">Apps</div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i class="icon-beach_access pink lighten-1 avatar r-5"></i>
                    <div class="pt-1">Profile</div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i class="icon-perm_data_setting indigo lighten-2 avatar r-5"></i>
                    <div class="pt-1">Settings</div>
                  </a>
                </div>
              </div>
            </div>
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