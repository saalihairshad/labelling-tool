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

              <div class="pt-3 pb-3 b-t" style="font-size:14.5px;">
                <strong>Author: </strong
                ><span class="px-1"> {{ tweet.user.name }} </span> |
                <strong class="pl-1">App: </strong
                ><span class="px-1"> {{ tweet.app_name }} </span> |
                <strong class="pl-1">Country: </strong>
                <span class="px-1">{{ tweet.country }} </span>
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
          <div class="row">
            <div class="col-md-7">
              <ul v-if="tweet.hasOwnProperty('annotations')">
                <li v-for="user in tweet.annotations" :key="user._id">
                  {{ user.name }}
                </li>
              </ul>
            </div>
            <div class="col-md-5">
              <el-progress
                type="circle"
                :percentage="parseInt(disagree)"
              ></el-progress>
              <div class="mt-3">Disagrement</div>
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
        <el-tab-pane label="Coding Guidlines">
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
import Documentation from "./Documentation";
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

  methods: {
    handleNext() {
      this.$emit("next");
    }
  }
};
</script>
