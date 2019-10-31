<template>
  <div>
    <button @click="increment">+</button>
    {{value}}
    <button @click="decrement" :disabled="value==0">-</button>
    <button @click="del">Delete</button>
    {{msg}}
  </div>
</template>
<script>
export default {
  props: ["msg", "data"],
  data() {
    return {
      value: 0
    };
  },
  methods: {
    increment() {
      this.value++;
      this.$emit("onUpdata", "+");
    },
    decrement() {
      this.value--;
      this.$emit("onUpdata", "-");
    },
    del() {
      this.$emit("onDelete", this.data);
    }
  }
};
</script>