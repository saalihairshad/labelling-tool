<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <ul class="list-group p-3 sticky">
          <li class="list-group-item">
            <a href="#introduction">Introduction</a>
          </li>
          <li class="list-group-item">
            <a href="#sentiment">Sentiment Analysis</a>
          </li>
          <li class="list-group-item">
            <a href="#content">Content Classification</a>
          </li>
          <li class="list-group-item">
            <a href="#gender">Gender Classification</a>
          </li>
        </ul>
      </div>
      <div class="col-md-8 b-t">
        <div class="white pt-4 scrollable">
          <h2 class="pb-4 ml-2 ">Coding Guidelines</h2>
          <Documentation />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Documentation from "../components/common/Documentation";
export default {
  components: {
    Documentation
  }
};
</script>
