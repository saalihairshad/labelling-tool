
<template>
  <div>
    <div>Total Items {{counts}}</div>
    <counter
      v-for="c in counters"
      :key="c"
      :msg="c"
      :data="c"
      @onDelete="delCounter"
      @onUpdata="totalCounter"
    />
  </div>
</template>

<script>
import counter from "./counter";

export default {
  data() {
    return {
      counts: 0,
      counters: [0, 1, 2, 3],
      message: "Click any item"
    };
  },
  components: {
    counter
  },
  methods: {
    totalCounter(value) {
      value == "+" ? this.counts++ : this.counts--;
    },
    delCounter(id) {
      alert(id);
      this.counters = this.counters.filter(c => c != id);
    }
  }
};
</script>