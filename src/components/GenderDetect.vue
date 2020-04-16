<template>
  <div>
    <div class="mt-3"><strong>Original Name:</strong> {{ name }}</div>
    <div class="my-3">
      <strong>Formated Name:</strong> {{ formatedName }}
      <i
        class="el-icon-edit"
        @click="showFormatedNameField = !showFormatedNameField"
      ></i>
    </div>
    <el-input
      class="mb-3"
      type="text"
      size="mini"
      v-model="formatedName"
      v-if="showFormatedNameField"
    />
    <el-button @click="handleGender" primary size="mini" plain>
      Detect Gender</el-button
    >
    <el-button @click="handleGender2" primary size="mini" plain>
      Detect Genderioz.io</el-button
    >
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
      required: true
    },
    formatedName: {
      type: String,
      default: "",
      required: true
    }
  },
  data() {
    return {
      showFormatedNameField: false
    };
  },
  methods: {
    handleGender() {
      try {
        var GenderApi = require("gender-api.com-client");
        var genderApiClient = new GenderApi.Client("XhcpKpNHWAPwSrFUlH");

        if (this.name === "unidentified") {
          this.form.gender = "unKnown";
          return;
        }

        genderApiClient.getByFirstName(this.formatedName, response => {
          console.log(response.gender); //female
          console.log(response.accuracy); //98

          this.$emit("gender", this.format(response.gender));
        });
      } catch (e) {
        console.log("Error:", e);
      }
    },

    handleGender2() {
      var genderize = require("genderize");
      genderize(this.formatedName, (err, obj) => {
        this.$emit("gender", this.format(obj.gender));
      });
    },

    format(gender) {
      return gender === "male" || gender === "female" ? gender : "unknown";
    }
  }
};
</script>
