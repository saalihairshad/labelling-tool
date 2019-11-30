<template>
 <li>
  <div ref="dropdownMenu">
    <a href="#" class="nav-link" data-toggle="dropdown " key="off" @click="show = true">
       <img v-if="image" :src="image" class="user-image" alt="">
      <i :class="icon"></i>
      <span :class="badgeClasses">{{badge}}</span>
    </a>
    <!-- Dropdown Menu -->
    <transition name="dropdown">
      <div class="dropdown__menu" v-bind:class="{ active: show }" v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>
 </li>
</template>


<script>
import mixins from '../../helpers/mixins.js'
export default {
     mixins: [mixins],
  props:['icon','image','badge','badgeClasses'],
  data() {
    return {
      show: false
    };
  },
  created() {
    document.addEventListener("click", this.documentClick);
  },

  destroyed() {
    document.removeEventListener("click", this.documentClick);
  },
  methods: {
    documentClick(e) {
      let el = this.$refs.dropdownMenu;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.visible = false;
        this.show = false;
      }
    }
  }
};
</script>

<style lang="scss">
.header {
  padding: 2rem 5rem 2rem 5rem;
  &__nav {
    position: relative;
  }
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__item {
    padding: 1rem;
  }
  &--icon {
    width: 1.65rem;
    height: 1.65rem;
  }
  &--button {
    top: 0;
    right: 0;
    position: absolute;
    margin: 0;
    padding: 0;
    color: gray;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    &:focus {
      outline: 0;
    }
  }
}

// Dropdown Menu

.dropdown__menu {
  top: 70%;
  right: 0;
  position: absolute;
  z-index: 10;
  min-width: 300px;
  margin-top: 1rem;
  overflow-y: auto;
  border-radius: 12px;
  background-color: white;
  border: 1px solid var(--color-gray);
  background-clip: padding-box;

  //
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1) !important;
  border: none;
  z-index: 9999;
  border-radius: 3px;
  &-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    padding: 0.8rem 0 0.8rem 2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    border-radius: 0 50px 50px 0;
    &:hover {
      color: #17bf63;
      background-color: rgba(79, 192, 141, 0.1);
    }
  }
  &-svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &-text {
    font-weight: 300;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

// Animation Menu Icon

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}

// Dropdown Menu Animation

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

// Wrapper

.main {
  margin: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__subtitle {
    color: #4f5959;
    font-weight: 100;
    margin-bottom: 2rem;
  }
  &__link {
    margin-right: 1.5rem;
    display: inline-block;
    &:last-child {
      margin-right: 0;
    }
  }
  &__svg {
    width: 2rem;
    height: 2rem;
    opacity: 0.6;
    color: #94a2b0;
    &:hover {
      color: #ffad1f;
    }
  }
}
</style>