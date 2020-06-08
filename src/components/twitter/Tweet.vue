<template>
  <div class="m-md-3">
    <!--Message Start-->
    <div class="card b-0 m-2">
      <div class="card-body">
        <div data-toggle="collapse" data-target="#message1">
          <div class="media">
            <div class="d-flex mr-3 height-50">
              <div class="text-center">
                <i class="icon-twitter s-64"></i>
                <div>
                  <el-tag
                    size="mini"
                    type="success"
                    class="mt-3"
                    v-if="this.tweet.finalAnnotation"
                    >Agreed
                  </el-tag>
                </div>
              </div>
            </div>
            <div class="media-body">
              <div class="collapse my-3 show" id="message1">
                <div class="lead my-3" v-html="fullText(tweet.full_text)"></div>
              </div>

              <div class="pt-3 pb-3 b-t" style="font-size:14.5px;">
                <strong>Author: </strong
                ><span class="px-1"> {{ tweet.user.name }} </span> |
                <strong class="pl-1">App: </strong
                ><span class="px-1"> {{ tweet.app_name }} </span> |
                <strong class="pl-1">Country: </strong>
                <span class="px-1">{{ tweet.country }} </span>

                <span
                  class="float-right"
                  style="color:#2196F3"
                  v-if="
                    tweet.hasOwnProperty('annotations') &&
                      Object.values(tweet.annotations).length > 1
                  "
                >
                  <i class="icon-hand-o-right pr-2"></i>
                  <strong>Kappa: {{ disagree[1] }} </strong>
                  <el-tag
                    class="ml-2"
                    type="success"
                    size="mini"
                    v-if="disagree[1] == 1"
                    >Agreed</el-tag
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <el-tabs class="my-3 p-2">
        <el-tab-pane label="Annotations">
          <Form
            :item="tweet"
            :key="tweet._id"
            class="p-3"
            :url="`http://localhost:4000/api/tweets/${this.tweet._id}`"
            @next="handleNext()"
          />
        </el-tab-pane>
        <el-tab-pane label="Annotators">
          <div class="row" v-if="tweet.annotations">
            <div class="col-md-7">
              <ul v-if="tweet.hasOwnProperty('annotations')">
                <li v-for="user in tweet.annotations" :key="user._id">
                  {{ user.name }}
                </li>
              </ul>
            </div>

            <div
              class="row"
              v-if="
                tweet.hasOwnProperty('annotations') &&
                  Object.values(tweet.annotations).length > 1
              "
            >
              <div class="col-md-6 text-center">
                <el-progress
                  type="circle"
                  :percentage="parseFloat(disagree[0])"
                ></el-progress>
                <div class="mt-3">Disagrement</div>
              </div>

              <div class="col-md-6 text-center">
                <el-progress
                  type="circle"
                  :percentage="disagree[1]"
                ></el-progress>
                <div class="mt-3">Unweighted kappa</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          v-if="tweet.replies"
          :label="`Replies (` + tweet.replies.length + ')'"
        >
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
                        {{tweet.annotations}}
                    </code>
                </pre>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Coding Guidelines">
          <Documentation />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Form from "./Form";
import auth from "../../services/authService";
import mixins from "../../helpers/mixins";
import Documentation from "../common/Documentation";
import anchorme from "anchorme";
export default {
  mixins: [mixins],
  props: ["tweet"],

  components: {
    Form,
    Documentation
  },
  computed: {
    disagree() {
      return this.disagrement(this.tweet);
    }
  },
  mounted() {
    // this.kappa();
  },

  methods: {
    handleNext() {
      this.$emit("next");
    },
    fullText(text) {
      const input = text;
      const resultA = anchorme(input);
      const resultB = anchorme({ input });
      const resultC = anchorme({
        input,
        // use some options
        options: {
          attributes: {
            target: "_blank",
            class: "detected"
          }
        }
        // and extensions
        // extensions: [
        //   // an extension for hashtag search
        //   {
        //     test: /#(\w|_)+/gi,
        //     transform: string =>
        //       ` <a href="https://a.b?s=${string.substr(1)}">${string}</a>`
        //   },
        //   // an extension for mentions
        //   {
        //     test: /@(\w|_)+/gi,
        //     transform: string =>
        //       ` <a href="https://a.b/${string.substr(1)}">${string}</a>`
        //   }
        // ]
      });
      return resultC;
    }
  }
};
</script>
