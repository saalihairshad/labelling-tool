<template>
      <div class="avatar avatar-md mr-3 mb-2 mt-1">
                      <img v-if="image" :class="imageClass" :src="assetsPath(image)" alt />
                      <span
                        v-else
                        class="avatar-letter avatar-md circle"
                        :class="letterClass(name)"
                      ></span>
                    </div>
</template>
<script>
import mixins from "../helpers/mixins.js";
export default {
    mixins: [mixins],
    props:['image','name','imageClass'],
  created(){
    console.log(this.user);
  },
    methods: {
    letterClass(name) {
      return "avatar-letter-" + name.substring(0, 1).toLowerCase();
    }
  },
}
</script>