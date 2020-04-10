<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" label-position="top">
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
                label="Feature Shortcoming"
                v-model="form.type.featureShortcoming"
              ></el-checkbox>
            </div>
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
      </el-form-item>
      <hr />
      <el-form-item label="Sentiment Analysis" prop="resource">
        <el-radio-group v-model="form.resource">
          <el-radio label="Very Negative"></el-radio>
          <el-radio label="Negative"></el-radio>
          <el-radio label="Neutral"></el-radio>
          <el-radio label="Positive"></el-radio>
          <el-radio label="Very Positive"></el-radio>
        </el-radio-group>
      </el-form-item>
      <hr />
      <el-form-item label="Gender" prop="gender">
        <el-radio-group v-model="form.gender">
          <el-radio label="male"></el-radio>
          <el-radio label="female"></el-radio>
          <el-radio label="UnKnown"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-button @click="handleGender" primary size="mini" plain>
        Detect Gender</el-button
      >
      <el-button @click="handleGender2" primary size="mini" plain>
        Detect Genderioz.io</el-button
      >
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">Submit</el-button>
        <el-button type="primary" @click="onNext()">Next</el-button>
      </el-form-item>
    </el-form>

    <!-- ================================================== -->

    <!-- ================================================== -->
  </div>
</template>

<script>
import axios from "axios";
import auth from "../services/authService";

export default {
  props: ["tweet"],
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: {
          bugReport: false,
          supportRequest: false,
          featureRequest: false,
          featureShortcoming: false,
          generalComplaint: false,
          generalPraise: false,
          noise: false,
          other: false,
          otherName: "",
          veryNegative: false,
          negative: false,
          neutral: false,
          positive: false,
          veryPositive: false
        },
        resource: "",
        gender: "",
        desc: ""
      }
    };
  },
  mounted() {
    console.log(this.tweet.annotations);
    this.form = this.tweet.annotations;
    //Object.assign(this.form,this.tweet.annotations);
  },
  methods: {
    // getFisrtName() {
    //   const name = this.tweet.user.name.split(" ");
    //   return name[0];
    // },
    handleGender() {
      try {
        var GenderApi = require("gender-api.com-client");
        var genderApiClient = new GenderApi.Client("XhcpKpNHWAPwSrFUlH");

        genderApiClient.getByFirstName(this.formatName(), response => {
          console.log(response.gender); //female
          console.log(response.accuracy); //98

          this.form.gender = response.gender;
        });
      } catch (e) {
        console.log("Error:", e);
      }
    },

    handleGender2() {
      console.log(this.formatName());

      var genderize = require("genderize");

      genderize(this.formatName(), function(err, obj) {
        console.log(obj.gender);
        this.form.gender = response.gender; // outputs 'female'
      });
      // generators
      //let gender = yield detect('vadim'); // 'male'
    },

    formatName() {
      let name = this.tweet.user.name;
      name = this.removeEmojis(name);
      name = this.removeAccents(name);

      // remove_accents = "Piqué".latinize();

      name = this.removeSpecialCharacters(name);
      name = this.splitCamelCase(name);

      const nameList = name.split(" ");

      let first = nameList[0];
      let second = nameList[1];

      if (first === "Dr" || first === "The") {
        name = nameList[1];
      } else {
        name = nameList[0];
      }

      return name;
    },
    removeEmojis(name) {
      // Step 1: Remove Emojis
      let name_without_emoji = name.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );

      return name_without_emoji;
    },
    removeSpecialCharacters(name) {
      // name_without_emoji = removeEmojis(name)
      // Step 2: Remove special characters except space
      let name_without_special = name.replace(/[^a-zA-Z ]/g, "");

      return name_without_special;
    },
    removeAccents(str) {
      let accents =
        "ÀÁÂÃÄÅĄĀāàáâãäåąßÒÓÔÕÕÖØӨŐòóôőõöøĎďDđÈÉÊËĘèéêëęðÇçĆćČčÐÌÍÎÏĪìíîïīÙÚÛÜŰùűúûüĽĹŁľĺłÑŇŃňñńПŔŕřŠŚŞšśşŤťƬŸÝÿýŽŻŹžżźαĢĞģğ$𐌀𐌁𐌂𐌃𐌄𐌅𐌆𐌇𐌉𐌊𐌋𐌌𐌍𐌏𐌐𐌒𐌓𐌔𐌕𐌖𐌗0";

      let accentsOut =
        "AAAAAAAAaaaaaaaasOOOOOOOOOoooooooDdDdEEEEEeeeeeeCcCcCcDIIIIIiiiiiUUUUUuuuuuLLLlllNNNnnnNRrrSSSsssTtTYYyyZZZzzzaGGggSABCDEFZHIKLMNOPQRSTVXO";
      str = str.split("");
      str.forEach((letter, index) => {
        let i = accents.indexOf(letter);
        if (i !== -1) {
          str[index] = accentsOut[i];
        }
      });
      return str.join("");
    },

    removeAccentsAndDiacritics(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    },

    splitCamelCase(str) {
      return str.replace(/([a-z])([A-Z])/g, "$1 $2");
    },
    splitPascalCase(word) {
      var wordRe = /($[a-z])|[A-Z][^A-Z]+/g;
      return word.match(wordRe).join(" ");
    },

    onSubmit() {
      const user = auth.getCurrentUser();
      console.log("clcikec");
      const url = "http://localhost:4000/api/tweets/";

      if (this.tweet.annotations.annotators != null) {
        const u = this.tweet.annotations.annotators.filter(
          annotator => annotator._id === user._id
        ).length;
        if (u == 0) {
          this.form["annotators"] = [
            ...this.tweet.annotations.annotators,
            user
          ];
        }
      } else {
        this.form["annotators"] = [user];
      }

      axios
        .patch(`${url}${this.tweet._id}`, this.form)
        .then(response => {
          if (response.statusText == "OK") {
            this.$message({
              showClose: true,
              message: "Tweet annotated!",
              type: "success"
            });
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
    }
  }
};
</script>
