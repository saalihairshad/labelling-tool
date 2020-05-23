<template>
  <div class="m-md-3">
    <!--Message Start-->
    <div class="card b-0 m-2">
      <div class="card-body">
        <div data-toggle="collapse" data-target="#message1">
          <div class="media">
            <div class="d-flex mr-3 height-50">
              <i class="icon-apple s-64"></i>
            </div>
            <div class="media-body">
              <h3 class="mt-0 mb-1 font-weight-normal b-b" v-if="review.Title">
                {{ review.Title }}
              </h3>
              <div class="collapse my-3 show" id="message1">
                <div class="lead my-3">
                  {{ review.Review }}
                </div>

                <div class="pt-3 pb-3 b-t" style="font-size:14.5px;">
                  <strong>Author: </strong
                  ><span class="px-1"> {{ review.Author }} </span> |
                  <strong class="pl-1">App: </strong
                  ><span class="px-1"> {{ review.AppName }} </span> |
                  <strong class="pl-1">Country: </strong>
                  <span class="px-1">{{ review.Country }} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <el-tabs class="my-3 p-2">
        <el-tab-pane label="Annotations">
          <Form
            :item="review"
            :key="review._id"
            class="p-3"
            :url="`http://localhost:4000/api/itunes/${this.review._id}`"
            @next="handleNext()"
          />
        </el-tab-pane>
        <el-tab-pane label="Annotators">
          <p class="ml-2">
            <i class="el-icon-info ml-2"></i>
            Please select two annotators to check the disagreement or Cohen's
            kappa of the document!
          </p>
          <div class="row p-3">
            <div class="col-md-12 mb-3">
              <el-select
                v-model="selectedAnnotators"
                @change="handleAnnotation"
                multiple=""
                :multiple-limit="2"
                filterable=""
                placeholder="Select Annotators"
              >
                <el-option
                  v-for="user in annotationsList"
                  :key="user._id"
                  :value="user._id"
                  :label="user.name"
                  >{{ user.name }}</el-option
                >
              </el-select>
            </div>
            <div class="col-md-12">
              <div class="row" v-if="disagree">
                <div class="col-md-6 text-center">
                  <el-progress
                    type="circle"
                    :percentage="parseFloat(disagree[0])"
                  ></el-progress>
                  <div class="mt-3">Disagreement</div>
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
          </div>
        </el-tab-pane>

        <el-tab-pane label="Json">
          <div class="light p-3 border-darken-3">
            <pre>
                    <code>
                        {{review}}
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
export default {
  mixins: [mixins],
  props: ["review"],

  components: {
    Form,
    Documentation
  },

  data() {
    return {
      selectedAnnotators: []
    };
  },

  mounted() {
    this.handleAnnotation();
  },
  computed: {
    disagree() {
      return this.handleAnnotation();
    },
    annotationsList() {
      this.selectedAnnotators = [];
      return this.review.annotations;
    }
  },

  methods: {
    handleAnnotation() {
      if (this.annotationsList) {
        const users = Object.keys(this.annotationsList);
        if (users.length == 2) {
          this.selectedAnnotators = users;
        }
      }

      if (this.selectedAnnotators.length == 2) {
        let r1 = this.review.annotations[this.selectedAnnotators[0]];
        let r2 = this.review.annotations[this.selectedAnnotators[1]];
        return this.disagrement(this.review, "reviews", r1, r2);
      }
    },
    handleNext() {
      this.$emit("next");
      this.selectedAnnotators = [];
    }
  }
};
</script>
