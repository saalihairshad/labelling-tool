<template>
    <h1 class="nav-title">
              <i class="icon" v-if="$route.meta.icon" :class="$route.meta.icon"></i>
              {{$route.name}}
              <span class="s-14 ml-1" v-if="$route.meta.subtitle">{{$route.meta.subtitle}}</span>
            </h1>
</template>
<script>
export default {
        
}
</script>