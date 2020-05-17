<template>
  <div class="row no-gutters">
    <div class="col-md-3 white">
      <div class="d-flex b-t p-3 align-items-center">
        <div>
          <span>Anotated: {{ annoted.length }}/{{ meta.total }}</span>
        </div>
        <div class="ml-auto">
          <el-select
            v-model="country"
            placeholder="Select"
            filterable
            @change="handleCountry"
            size="mini"
          >
            <el-option value="" label="All Countries" />
            <el-option
              v-for="country in countries"
              :key="country.code"
              :label="`${country.name} (${country.code.toLowerCase()})`"
              :value="country.code"
            />
          </el-select>
        </div>
      </div>
      <div class="scrollable" v-loading="loading">
        <ul class="list-unstyled b-t " v-if="reviews && reviews.length > 0">
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
                  >Annotated
                </el-tag>

                <!-- <el-tag  size="mini" type="warning" v-if="itune.annotations && itune.annotations.isPending">Pending</el-tag> -->
                {{ review.AppName }}
              </small>
            </div>
          </li>
        </ul>
        <div v-else class="text-center my-5">No reviews found</div>
      </div>
    </div>
    <div class="col-md-9 b-l vh-100">
      <div id="scrollable" class="p-3 scrollable-container" v-if="show">
        <Review :review="selectedItem" @next="handeNext()" />
      </div>

      <div class="text-center pt-5 mt-5" v-if="!selectedItem">
        <div class="pt-3">
          <i class="icon-apple fz-48"></i>
          <div class="mt-3">
            <h4>Please select a Review from the sidebar to annotate!</h4>
          </div>
        </div>
      </div>

      <!-- <div class="card" v-if="!selectedItem">
        <h2 class="pl-3 pt-5">Coding Guidelines</h2>
        <i class="el-icon-thumb fz-48"></i>
        <div class="mt-3"><h4>Select An Item</h4></div>
        <Documentation />
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Review from "../components/appstore/Review";
import { getReviews } from "../services/itunesService.js";

import countryList from "country-list";

import auth from "../services/authService";
import Documentation from "../components/common/Documentation";

export default {
  name: "ituneComponent",
  components: {
    Review,
    Documentation
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
      loading: true,
      countries: [],
      country: "",
      annoted: []
    };
  },
  async created() {
    this.countries = countryList.getData();
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
        setTimeout(() => {
          this.$message({
            showClose: true,
            message: "No more reviews",
            type: "warning"
          });
        }, 2000);
      }
    },
    // Get tweet
    getitunes() {
      this.loading = true;
      let params;
      if (this.country) params = { Country: this.country.toLowerCase() };
      getReviews(params)
        .then(res => {
          this.reviews = res.data.data;
          this.meta = res.data.meta;
          this.loading = false;
          this.countAnnotations();
        })
        .catch(err => {});
    },

    handleCountry() {
      this.getitunes();
    },

    countAnnotations() {
      this.annoted = this.reviews.filter(review =>
        review.annotations && review.annotations.hasOwnProperty(this.user._id)
          ? review
          : ""
      );
    }
  }
};
</script>
