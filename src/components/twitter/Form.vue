<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      label-width="120px"
      label-position="top"
      :rules="rules"
    >
      <!-- Content Analysis -->
      <el-form-item label="Content Analysis">
        <div class="row d-flex">
          <div class="col-md-4">
            <el-checkbox
              label="Bug Report"
              v-model="form.type.bugReport"
            ></el-checkbox>

            <el-popover
              placement="top-start"
              title="Bug Report"
              width="220"
              trigger="hover"
              content="The user reports a problem"
            >
              <span slot="reference" type="link"
                ><i class="el-icon-info ml-2"></i
              ></span>
            </el-popover>
          </div>

          <div class="col-md-4">
            <el-checkbox
              label="Support Request"
              v-model="form.type.supportRequest"
            ></el-checkbox>

            <el-popover
              placement="top-start"
              title="Support Request"
              width="320"
              trigger="hover"
              content=" The user asks for support but it is not about a specific feature request or bug."
            >
              <span slot="reference" type="link"
                ><i class="el-icon-info ml-2"></i
              ></span>
            </el-popover>
          </div>

          <div class="col-md-4">
            <el-checkbox
              label="Feature Request"
              v-model="form.type.featureRequest"
            ></el-checkbox>
            <el-popover
              placement="top-start"
              title="Feature Request"
              width="455"
              trigger="hover"
              content="The user asks for a missing feature, 
              missing functionality, a miss-ing content or a feature that should be implemented. 
              Or the user wants an exisiting feature to be removed."
            >
              <span slot="reference" type="link"
                ><i class="el-icon-info ml-2"></i
              ></span>
            </el-popover>
          </div>
        </div>

        <div class="row d-flex">
          <div class="col-md-4">
            <el-checkbox label="Noise" v-model="form.type.noise"></el-checkbox>

            <el-popover
              placement="top-start"
              title="Noise"
              width="420"
              trigger="hover"
              content="The user enters random symbols, characters, unrecognized text or a language other than English."
            >
              <span slot="reference" type="link"
                ><i class="el-icon-info ml-2"></i
              ></span>
            </el-popover>
          </div>

          <div class="col-md-4">
            <el-checkbox label="Other" v-model="form.type.other"></el-checkbox>

            <el-popover
              placement="top-start"
              title="Other"
              width="410"
              trigger="hover"
              content="The tweet is not about a bug, a feature request or support request. This category also includes statements about the content of an app"
            >
              <span slot="reference" type="link"
                ><i class="el-icon-info ml-2"></i
              ></span>
            </el-popover>

            <el-input
              placeholder="Add Name"
              v-if="form.type.other"
              type="text"
              size="small"
              v-model="form.type.otherName"
            />
          </div>
        </div>

        <!-- <div class="row d-flex">
          <div class="col-md-4">
            <div>
              <el-checkbox
                label="Bug Report"
                v-model="form.type.bugReport"
              ></el-checkbox>
              <el-tooltip
                class="item"
                effect="dark"
                content="The user reports a problem"
                placement="top"
              >
                <i class="el-icon-info ml-2"></i>
              </el-tooltip>
            </div>
            <div>
              <el-checkbox
                label="Support Request"
                v-model="form.type.supportRequest"
              ></el-checkbox>
              <el-tooltip
                class="item"
                effect="dark"
                content=" The user asks for support but it is not about a specific feature request or bug."
                placement="top"
              >
                <i class="el-icon-info ml-2"></i>
              </el-tooltip>
            </div>
            <div>
              <el-checkbox
                label="Feature Request"
                v-model="form.type.featureRequest"
              ></el-checkbox>
              <el-tooltip
                class="item"
                effect="dark"
                content=" The user asks for a missing feature, missing functionality, a missing content or a feature that should be implemented. Or an exisiting feature that should be removed."
                placement="top"
              >
                <i class="el-icon-info ml-2"></i>
              </el-tooltip>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <el-checkbox
                label="General Complaint"
                v-model="form.type.generalComplaint"
              ></el-checkbox>
              <el-tooltip
                class="item"
                effect="dark"
                content="The user complains about the app, but does not mention specific functionalities or problems."
                placement="top"
              >
                <i class="el-icon-info ml-2"></i>
              </el-tooltip>
            </div>
            <div>
              <el-checkbox
                label="General Praise"
                v-model="form.type.generalPraise"
              ></el-checkbox>
              <el-tooltip
                class="item"
                effect="dark"
                content="The user praises the app or functionalities of the app."
                placement="right-end"
              >
                <i class="el-icon-info ml-2"></i>
              </el-tooltip>
            </div>
          </div>

          <div class="col-md-4">
            <div>
              <el-checkbox
                label="Noise"
                v-model="form.type.noise"
              ></el-checkbox>
              <el-tooltip
                class="item"
                effect="dark"
                content="The user enters random symbols, characters or unrecognized text."
                placement="top"
              >
                <i class="el-icon-info ml-2"></i>
              </el-tooltip>
            </div>
            <div>
              <el-checkbox
                label="Other"
                v-model="form.type.other"
              ></el-checkbox>
              <el-tooltip
                class="item"
                effect="dark"
                content="The review is not about a bug, a feature request or support request. This category also includes statements about the content of an app"
                placement="top"
              >
                <i class="el-icon-info ml-2"></i>
              </el-tooltip>
              <el-input
                placeholder="Add Name"
                v-if="form.type.other"
                type="text"
                size="small"
                v-model="form.type.otherName"
              />
            </div>
          </div>
        </div> -->
        <div v-if="!validType" class="text-danger">Please select a type</div>
      </el-form-item>

      <hr />
      <!-- Sentiment Analysis -->
      <el-form-item label="Sentiment Analysis" prop="sentiment">
        <el-radio-group v-model="form.sentiment">
          <el-radio label="Very Negative"></el-radio>
          <el-radio label="Negative"></el-radio>
          <el-radio label="Neutral"></el-radio>
          <el-radio label="Positive"></el-radio>
          <el-radio label="Very Positive"></el-radio>
        </el-radio-group>
      </el-form-item>
      <hr />

      <!-- Gender -->
      <div class="row">
        <div class="col-md-6">
          <el-radio-group v-model="form.gender">
            <el-form-item label="Gender" prop="gender">
              <el-radio label="female">Female</el-radio>
              <el-radio label="male">Male</el-radio>
              <el-radio label="unknown">Unknown</el-radio>
            </el-form-item>
          </el-radio-group>
        </div>
        <div class="col-md-6 pt-5">
          <GenderDetect
            :name="item.user.name"
            :formatedName="formatedName"
            :country="item.country_code"
            @gender="handleGender"
          />
        </div>

        <div class="pt-3">
          <i class="el-icon-info mr-3 text-yellow" />
          <small
            >Click the pencil icon to manually enter the name of a person and
            detect their gender. For more information please refer to the coding
            guidelines.</small
          >
        </div>
      </div>
      <hr />

      <el-form-item class="pt-4">
        <el-button type="primary" @click="onSubmit()">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import auth from "../../services/authService";
import { update } from "../../services/tweetsService";
import mixins from "../../helpers/mixins.js";
import GenderDetect from "../common/GenderDetect";
export default {
  mixins: [mixins],
  props: ["item", "url"],
  components: {
    GenderDetect
  },
  data() {
    return {
      otherTypeCheck: false,
      formatedName: "",
      detectGenderByName: "",
      showFormatedNameField: false,

      rules: {
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change"
          }
        ],
        sentiment: [
          {
            required: true,
            message: "Please select sentiment",
            trigger: "change"
          }
        ],
        gender: [
          {
            required: true,
            message: "Please select a gender",
            trigger: "change"
          }
        ]
      },

      //   isPending: false,
      validType: false,
      form: {
        type: {
          bugReport: false,
          supportRequest: false,
          featureRequest: false,
          generalComplaint: false,
          generalPraise: false,
          noise: false,
          other: false
        },

        otherType: "",
        sentiment: "",
        gender: ""
      }
    };
  },
  mounted() {
    let user = auth.getCurrentUser();

    this.validType = true;

    if (this.item.annotations) {
      if (this.item.annotations[user._id]) {
        this.form = this.item.annotations[user._id].annotations;
      }
      //other type enable
      if (this.form.otherType) {
        this.otherTypeCheck = true;
      }
    }

    //Format Name
    this.formatedName = this.formatName(this.item.user.name);
    if (this.formatedName === "unidentified") {
      this.form.gender = "unknown";
    }
  },
  methods: {
    handleGender(gender) {
      this.form.gender = gender;
    },
    onSubmit() {
      this.validType = false;
      this.$refs.form.validate(valid => {
        for (let [key, value] of Object.entries(this.form.type)) {
          if (value) {
            console.log(value);
            this.validType = true;
            break;
          }
        }

        if (valid && this.validType) {
          this.save();
        } else {
          this.$message({
            showClose: true,
            message: "Validation Error",
            type: "error"
          });
        }
      });
    },

    save() {
      let user = auth.getCurrentUser();

      let data = {};

      user["annotations"] = this.form;
      //   user["isPending"] = this.isPending;

      if (this.item.annotations) {
        data = {
          ...this.item.annotations,
          [user._id]: user
        };
      } else {
        data = {
          [user._id]: user
        };
      }

      update(this.item._id, data)
        .then(response => {
          if (response.statusText == "OK") {
            this.$message({
              showClose: true,
              message: "Tweet annotated!",
              type: "success"
            });
            this.onNext();
          }
        })
        .catch(error => {
          console.log("-------", error);
          this.$message({
            showClose: true,
            message: "Something went wrong!",
            type: "error"
          });
        });
    },
    onNext() {
      this.$emit("next");
      document.body.scrollTop = document.documentElement.scrollTop = -300;
    }
  }
};
</script>
