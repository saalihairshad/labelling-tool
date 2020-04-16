<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      label-width="120px"
      label-position="top"
      :rules="rules"
    >
      <el-form-item label="Content Analysis">
        <div class="row d-flex">
          <div class="col-md-4">
            <div>
              <el-checkbox
                label="Bug Report"
                v-model="form.type.bugReport"
              ></el-checkbox>
            </div>
            <div>
              <el-checkbox
                label="Support Request"
                v-model="form.type.supportRequest"
              ></el-checkbox>
            </div>
            <div>
              <el-checkbox
                label="Feature Request"
                v-model="form.type.featureRequest"
              ></el-checkbox>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <el-checkbox
                label="General Complaint"
                v-model="form.type.generalComplaint"
              ></el-checkbox>
            </div>
            <div>
              <el-checkbox
                label="General Praise"
                v-model="form.type.generalPraise"
              ></el-checkbox>
            </div>
          </div>

          <div class="col-md-4">
            <div>
              <el-checkbox
                label="Noise"
                v-model="form.type.noise"
              ></el-checkbox>
            </div>
            <div>
              <el-checkbox
                label="other"
                v-model="form.type.other"
              ></el-checkbox>
              <el-input
                placeholder="Add Name"
                v-if="form.type.other"
                type="text"
                size="small"
                v-model="form.type.otherName"
              />
            </div>
          </div>
        </div>
        <div v-if="!validType" class="text-danger">Please select a type</div>
      </el-form-item>
      <hr />
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

      <div class="row">
        <div class="col-md-6">
          <el-radio-group v-model="form.gender">
            <el-form-item label="Gender" prop="gender">
              <el-radio label="female">Female</el-radio>
              <el-radio label="male">Male</el-radio>
              <el-radio label="unknown">Unknown</el-radio>
            </el-form-item>
          </el-radio-group>
          <div>
            <i class="el-icon-info mr-3 text-yellow" />
            <small
              >Please refer to the coding guide line for more information</small
            >
          </div>
        </div>

        <div class="col-md-6 ">
          <!-- description="The formatted name contains the first word of the full name that might no be useful in some cases. For example if original name is 'this is jimmy', the formatted name will be 'this'. If you think jimmy can be categorized as male or female then please clik the pencil icon and write the name in the input box and then clik the detect gender button. "
     -->
          <GenderDetect
            :name="item.Author"
            :formatedName="formatedName"
            @gender="handleGender"
          />
        </div>
      </div>
      <hr />

      <el-radio-group v-model="form.language">
        <el-form-item label="Language" prop="language">
          <el-radio label="English"></el-radio>
          <el-radio label="German"></el-radio>
          <el-radio label="French"></el-radio>
          <el-radio label="Mandarin"></el-radio>
        </el-form-item>
      </el-radio-group>

      <hr />

      <el-form-item label="Status" prop="isPending">
        <el-checkbox v-model="isPending" label="Pending" border></el-checkbox>
      </el-form-item>

      <el-form-item class="pt-4">
        <el-button type="primary" @click="onSubmit()">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import auth from "../services/authService";
import mixins from "../helpers/mixins.js";
import { update } from "../services/itunesService.js";
import GenderDetect from "./GenderDetect";

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

      isPending: false,
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
        language: "",
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
      this.form = this.item.annotations[user._id].annotations;
      //other type enable
      if (this.form.otherType) {
        this.otherTypeCheck = true;
      }
      //pending status update
      this.isPending = this.item.annotations[user._id].isPending;
    }

    //Format Name
    this.formatedName = this.formatName(this.item.Author);
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
      user["isPending"] = this.isPending;

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
              message: "Itune Review annotated!",
              type: "success"
            });
            this.onNext();
          }
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: "Something went wrong!",
            type: "error"
          });
        });
    },

    onNext() {
      this.$emit("next");
    }
  }
};
</script>
