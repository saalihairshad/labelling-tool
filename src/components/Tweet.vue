<template>
  <div class="m-md-3">
    <!--Message Start-->
    <div class="card b-0 m-2">
      <div class="card-body">
        <div data-toggle="collapse" data-target="#message1">
          <div class="media">
            <div class="d-flex mr-3 height-50">
              <i class="icon-twitter s-64"></i>
            </div>
            <div class="media-body">
              <div class="collapse my-3 show" id="message1">
                <div class="lead my-3">
                  {{ tweet.full_text }}
                </div>
              </div>

              <div class="b-t">
                <small><strong>Author</strong>: {{ tweet.user.name }}</small>
                |
                <small
                  ><strong>App: {{ tweet.app_name }}</strong></small
                >
                |
                <small><strong>Country:</strong> {{ tweet.user.name }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <el-tabs class="my-3 p-2">
        <el-tab-pane label="Annotations">
          <AnnotationForm
            :item="tweet"
            :key="tweet._id"
            class="p-3"
            :url="`http://localhost:4000/api/tweets/${this.tweet._id}`"
            @next="handleNext()"
          />
        </el-tab-pane>
        <el-tab-pane label="Annotators">
          <div class="row">
            <div class="col-md-7">
              <ul v-if="tweet.annotations">
                <li v-for="user in tweet.annotations" :key="user._id">
                  {{ user.name }}
                </li>
              </ul>
            </div>
            <div class="col-md-5">
              <el-progress
                type="circle"
                :percentage="parseInt(similarity)"
              ></el-progress>
              <div class="mt-3">Similarity</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`Replies (` + tweet.replies.length + ')'">
          <div class="cardx" v-for="reply in tweet.replies" :key="reply.id">
            <ul class="list-unstyled">
              <li class="media p-3 b-b">
                <div class="avatar avatar-md blue mr-3">
                  <img :src="reply.user.profile_image_url" alt="" />
                </div>
                <div class="media-body text-truncate">
                  <small class="float-right"> </small>
                  <h6 class="mt-0 mb-1 font-weight-normal">
                    {{ reply.user.name }}
                  </h6>
                  <span>{{ reply.full_text }}</span
                  ><br />
                  <small>
                    <span class="mr-3" v-if="reply.user.location"
                      >Location: {{ reply.user.location }}</span
                    >
                  </small>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Json">
          <div class="light p-3 border-darken-3">
            <pre>
                    <code>
                        {{tweet}}
                    </code>
                </pre>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import AnnotationForm from "./AnnotationForm";
import ddd from "recursive-diff";
import auth from "../services/authService";
export default {
  props: ["tweet"],
  data() {
    return {
      similarity: 0,
      an: []
    };
  },
  components: {
    AnnotationForm
  },

  mounted() {
    if (this.tweet.annotations) {
      this.an = Object.values(this.tweet.annotations);

      let total_difference = 0;
      if (this.an.length == 2) {
        console.log(this.an);
        const diff = ddd.getDiff(
          this.an[0].annotations,
          this.an[1].annotations
        );

        if (diff.length > 0) {
          total_difference =
            (this.objectSize(diff) * 100) /
            this.objectSize(this.an[1].annotations);
        }
      }
      console.log(total_difference);

      this.similarity = (100 - total_difference).toFixed(2);
    }
  },
  methods: {
    handleNext() {
      this.$emit("next");
    },

    objectSize(obj) {
      // var size = 0, key;
      // for (key in obj) {
      //     if (obj.hasOwnProperty(key)) size++;

      //     // if(typeof obj[key] == 'object') {

      //     //   console.log(key);
      //     //   this.objectSize(obj[key]);
      //     // }
      // }
      // return size;
      //var obj={a:0,b:1,c:{a:1,otherkeyb:'2:"":2\\',otherkey:{d:1,e:2}}}
      return JSON.stringify(obj).match(/[^\\]":/g).length; //
    }

    //  arr_diff (a1, a2) {

    //     var a = [], diff = [];

    //     for (var i = 0; i < a1.length; i++) {
    //         a[a1[i]] = true;
    //     }

    //     for (var i = 0; i < a2.length; i++) {
    //         if (a[a2[i]]) {
    //             delete a[a2[i]];
    //         } else {
    //             a[a2[i]] = true;
    //         }
    //     }

    //     for (var k in a) {
    //         diff.push(k);
    //     }

    //     return diff;
    // }
  }
};
</script>
<style scoped>
code {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word;
  color: palevioletred; /* Internet Explorer 5.5+ */
}
</style>
