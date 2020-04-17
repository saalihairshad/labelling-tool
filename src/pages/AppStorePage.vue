<template>
  <div class="row no-gutters">
    <div class="col-md-3 white">
      <div class="scrollable" v-loading="loading">
        <!-- <div class="b-t">
               <span>Anotated: {{meta.annotated}} of {{meta.total}}</span>
            </div> -->

        <ul class="list-unstyled b-t " v-if="reviews.length > 0">
          <li
            class="media p-3 b-b "
            v-for="review in reviews"
            :key="review._id"
            @click="handleClick(review)"
            :class="
              selectedItem && review._id == selectedItem._id ? 'light b-l' : ''
            "
          >
            <div class="avatar avatar-md indigo mr-3">
              <i class="icon-apple"></i>
            </div>

            <div class="media-body text-truncate">
              <h6 class="mt-0 mb-1 font-weight-normal">
                {{ review.Author }}
              </h6>
              <span>{{ review.Review }}</span>
              <br />
              <small>
                <el-tag
                  size="mini"
                  type="primary"
                  class="mr-2"
                  v-if="isAnnotated(review)"
                  >Anotated
                </el-tag>

                <!-- <el-tag  size="mini" type="warning" v-if="itune.annotations && itune.annotations.isPending">Pending</el-tag> -->
                {{ review.AppName }}
              </small>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-9 b-l vh-100">
      <div id="scrollable" class="p-3 scrollable-container" v-if="show">
        <Review :review="selectedItem" @next="handeNext()" />
      </div>

      <div class="text-center pt-5 mt-5" v-if="!selectedItem">
        <i class="el-icon-thumb fz-48"></i>
        <div class="mt-3"><h4>Select An Item</h4></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Review from "../components/appstore/Review";
import { getReviews } from "../services/itunesService.js";

import auth from "../services/authService";
export default {
  name: "ituneComponent",
  components: {
    Review
    //  ituneForm
  },
  data() {
    return {
      meta: [],
      reviews: [],
      error: "",
      text: "",
      selectedItem: null,
      show: false,
      index: "",
      user: {},
      loading: true
    };
  },
  async created() {
    this.user = auth.getCurrentUser();
    try {
      this.itunes = await this.getitunes();
    } catch (error) {
      this.error = error.message;
    }
  },
  methods: {
    isAnnotated(itune) {
      return itune.annotations && itune.annotations[this.user._id];
    },
    handleClick(item) {
      console.log(item);
      this.selectedItem = item;
      this.index = this.reviews.indexOf(item);
      this.show = true;
    },
    handeNext() {
      if (this.reviews[this.index + 1]) {
        this.selectedItem = this.reviews[this.index + 1];
        this.index = this.reviews.indexOf(this.selectedItem);

        document.getElementById("scrollable").scrollTop = 0;
        this.getitunes();
      } else {
        this.$message({
          showClose: true,
          message: "No more reviews",
          type: "warning"
        });
      }
    },
    // Get tweet
    getitunes() {
      this.loading = true;
      getReviews()
        .then(res => {
          this.reviews = res.data.data;
          this.meta = res.data.meta;
          this.loading = false;
        })
        .catch(err => {});
    }
  }
};
</script>
