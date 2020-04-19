<template>
  <div class="row no-gutters">
    <div class="col-md-3 white sticky">
      <div class="slimScroll">
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="w2-tab1"
            role="tabpanel"
            aria-labelledby="w2-tab1"
          >
            <div class="b-t">
              <span>Annotated: {{ meta.annotated }} of {{ meta.total }}</span>
            </div>
            <ul class="list-unstyled b-t" v-if="tweets.length > 0">
              <li
                class="media p-3 b-b "
                v-for="(tweet, index) in tweets"
                :key="tweet._id"
                @click="handleTweetClick(tweet)"
                :class="
                  selectedTweet && tweet._id == selectedTweet._id
                    ? 'light b-l'
                    : ''
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
                  <small>
                    <el-tag
                      size="mini"
                      type="primary"
                      class="mr-2"
                      v-if="isAnnotated(tweet)"
                      >Annotated
                    </el-tag>

                    <!-- <el-tag  size="mini" type="warning" v-if="tweet.annotations && tweet.annotations.isPending">Pending</el-tag> -->

                    <i class="icon-comment-o ml-3 mr-2"></i
                    >{{ tweet.replies.length }}</small
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-9 b-l vh-100">
      <div class="p-3" v-if="show">
        <Tweet :tweet="selectedTweet" @next="handeNext()" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Tweet from "../components/Tweet";
//import TweetForm from "../components/HelloWorld";
import auth from "../services/authService";
export default {
  name: "TweetComponent",
  props: ["url"],
  components: {
    Tweet
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
      user: {}
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
    handleTweetClick(tweet) {
      this.selectedTweet = tweet;
      this.index = this.tweets.indexOf(tweet);
      this.show = true;
    },
    handeNext() {
      if (this.tweets[this.index + 1]) {
        this.selectedTweet = this.tweets[this.index + 1];
        this.index = this.tweets.indexOf(this.selectedTweet);
      } else {
        this.$message({
          showClose: true,
          message: "No more tweets",
          type: "warning"
        });
      }
    },
    // Get tweet
    get() {
      return new Promise((resolve, reject) => {
        axios
          .get(this.url)
          .then(res => {
            const data = res.data.data;
            this.meta = res.data.meta;
            resolve(
              data.map(tweet => ({
                ...tweet
              }))
            );
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
</script>
