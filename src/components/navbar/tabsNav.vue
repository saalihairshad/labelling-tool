<template>
    <ul class="nav nav-material">
             {{routeSiblings}}
               <li v-for="item in routeChildren" :key="item.name">
                            <router-link
  :to="$route.path+'/'+item.path"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
>
  <NavLink :active="active" class="nav-link " :href="href" @click="navigate"
    >{{item.name}}</NavLink
  >
</router-link>

                       </li>

     
         
        </ul>
</template>
<script>
export default {
    computed: {
  routeChildren() {
    const matched = this.$route.matched;
    const routePath = matched[matched.length - 1].path;
    return this.getChildrenByPath(routePath);
  },
  routeSiblings() {
    const matched = this.$route.matched;
    const route = matched[matched.length - 1];
    return this.getChildrenByPath(route.parent
      ? route.parent.path
      : undefined);
  },
},
methods: {
  getChildrenByPath(path) {
    let children = this.$router.options.routes;

    if (path) {
      // clean up empty elements
      let chunks = path.split('/');
      chunks = chunks.filter((chunk) => chunk !== '');

      if (chunks.length) {
        chunks.forEach((chunk, index) => {
          let path = chunk;
          if (index === 0) path = `/${path}`;

          if (children) {
            const found = children.find((child) => child.path === path);
            if (found) {
              children = found.children;
            }
          }
        });
      }
    }

    return children;
  },
},

  }

</script>