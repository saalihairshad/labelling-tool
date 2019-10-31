<template  id="item-template">
  <li class="treeview" :class=" isOpen ? 'active' : ''">
    <router-link
      v-if="item.hasOwnProperty('route')"
      :to="item.route"
      :class="{bold: hasChildren}"
      @click="toggle"
    >
      <i class="icon" :class="item.icon"></i>
      <span>{{ item.name }}</span>

      <i class="icon-angle-left pull-right" v-if="hasChildren"></i>
      <span class="badge r-3 badge-primary pull-right"
        :class="item.badgeClass"
       v-if="item.hasOwnProperty('badge')">{{item.badge}}</span>
    </router-link>

    <a
      v-if="!item.hasOwnProperty('route')"
      :class="{bold: hasChildren}"
      @click="toggle"
    >
      <i class="icon" :class="item.icon"></i>
      <span>{{ item.name }}</span>

      <i class="icon-angle-left pull-right" v-if="hasChildren"></i>
    </a>
    <ul class="treeview-menu" v-show="isOpen" v-if="hasChildren">
      <tree-item
        class="item"
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
      ></tree-item>
    </ul>
  </li>
</template>
<script>
export default {
  name: "tree-item",
  props: {
    item: Object
  },

  data: function() {
    return {
      isOpen: false
    };
  },
  computed: {
    hasChildren: function() {
      return this.item.children && this.item.children.length;
    }
  },
  methods: {
    toggle: function() {
      if (this.hasChildren) {
        this.isOpen = !this.isOpen;
      }
    },
  }
};
</script>