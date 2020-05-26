<template>
  <div class="row no-gutters">
    <div class="col-md-3 white">
      <div class="d-flex b-t p-3 align-items-center">
        <div>
          <span v-if="annoted"
            >Anotated: {{ annoted.length }}/{{ meta.total }}</span
          >
        </div>
      </div>
      <div class="scrollable" v-loading="loading">
        <ul
          class="list-unstyled b-t scrollable"
          v-if="tweets && tweets.length > 0"
        >
          <li
            class="media p-3 b-b "
            v-for="(tweet, index) in tweets"
            :key="tweet._id"
            @click="handleTweetClick(tweet)"
            :class="
              selectedTweet && tweet._id == selectedTweet._id ? 'light b-l' : ''
            "
          >
            <div class="avatar avatar-md blue mr-3">
              <i class="icon-twitter"></i>
            </div>

            <div class="media-body text-truncate">
              <h6 class="mt-0 mb-1 font-weight-normal">
                {{ tweet.user.name }}
              </h6>
              <span>{{ tweet.full_text }}</span>
              <br />
              <small v-if="tweet.replies">
                <el-tag
                  size="mini"
                  type="primary"
                  class="mr-2"
                  v-if="isAnnotated(tweet)"
                  >Annotated
                </el-tag>
                <el-tag
                  size="mini"
                  type="warning"
                  class="mr-2"
                  v-if="tweet.isPending"
                  >Pending
                </el-tag>

                <i class="icon-comment-o ml-3 mr-2"></i
                >{{ tweet.replies.length }}
              </small>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-9 b-l vh-100">
      <div id="scrollable" class="p-3 scrollable-container" v-if="show">
        <Tweet :tweet="selectedTweet" @next="handeNext()" />
      </div>

      <div class="text-center pt-5 mt-5" v-if="!selectedTweet">
        <div class="pt-3">
          <i class="icon-twitter fz-48"></i>
          <div class="mt-3">
            <h4>Please select a Tweet from the sidebar to annotate!</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- 
      <div class="card" v-if="!selectedTweet">
        <h2 class="pl-3 pt-5">Coding Guidelines</h2>
        <Documentation />
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import Tweet from "../components/twitter/Tweet";
import auth from "../services/authService";
import { getTweets } from "../services/tweetsService";
import Documentation from "../components/common/Documentation";

export default {
  name: "TweetComponent",
  components: {
    Tweet,
    Documentation
    //  TweetForm
  },
  data() {
    return {
      meta: [],
      tweets: [],
      error: "",
      text: "",
      selectedTweet: null,
      show: false,
      index: "",
      user: {},
      loading: true,
      annoted: []
    };
  },
  async created() {
    this.user = auth.getCurrentUser();
    try {
      this.tweets = await this.getTweets();
    } catch (error) {
      this.error = error.message;
    }
  },
  methods: {
    isAnnotated(tweet) {
      return tweet.annotations && tweet.annotations[this.user._id];
    },
    // isPending(tweet) {
    //   return (
    //     tweet.annotations &&
    //     tweet.annotations[this.user._id] &&
    //     tweet.annotations[this.user._id].annotations &&
    //     tweet.annotations[this.user._id].annotations.isPending
    //   );
    // },
    handleTweetClick(tweet) {
      this.selectedTweet = tweet;
      this.index = this.tweets.indexOf(tweet);
      this.show = true;
    },
    handeNext() {
      if (this.tweets[this.index + 1]) {
        this.selectedTweet = this.tweets[this.index + 1];
        this.index = this.tweets.indexOf(this.selectedTweet);
        document.getElementById("scrollable").scrollTop = 0;
        this.getTweets();
      } else {
        setTimeout(() => {
          this.$message({
            showClose: true,
            message: "No more tweets",
            type: "warning"
          });
        }, 2000);
      }
    },
    // Get tweet
    getTweets() {
      this.loading = true;
      getTweets()
        .then(res => {
          this.tweets = res.data.data;
          this.meta = res.data.meta;
          this.loading = false;
          this.countAnnotations();
        })
        .catch(err => {});
    },
    countAnnotations() {
      this.annoted = this.tweets.filter(review =>
        review.annotations && review.annotations.hasOwnProperty(this.user._id)
          ? review
          : ""
      );
    }
  }
};
</script>
