<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="mb-3">
      <h6>{{title}}</h6>
      <small>{{subtitle}}</small>
    </div>
    <figure class="avatar">
      <img :src="image" alt />
    </figure>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "image"]
};
</script>