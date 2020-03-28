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

       <el-form-item label="Sentiment Analysis" prop="resource">
          <el-radio-group v-model="form.resource">
        <div class="row d-flex">
          <div class="col-md-4">
            <div>
              <el-radio
                label="Very Negative"
                
              ></el-radio>
            </div>
            <div>
              <el-radio
                label="Negative"
               
              ></el-radio>
            </div>
            <div>
              <el-radio
                label="Neutral"
                
              ></el-radio>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <el-radio
                label="Positive"
                
              ></el-radio>
            </div>
            <div>
              <el-radio
                label="Very Positive"
                
              ></el-radio>
              
            </div>
          </div>
        </div>
        </el-radio-group>
      </el-form-item>

     


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
          otherName: '',
          veryNegative: false,
          negative: false,
          neutral: false,
          positive: false,
          veryPositive: false,
        },
        resource: "",
        desc: ""
      }
    };
  },
  mounted() {
    console.log(this.tweet.annotations)
    this.form = this.tweet.annotations;
    //Object.assign(this.form,this.tweet.annotations);
  },
  methods: {
    onSubmit() {
      console.log("clcikec");
      const url = "http://localhost:5000/api/tweets/";
      axios
        .patch(`${url}${this.tweet._id}`, this.form)
        .then(response => {
          if(response.statusText == "OK" ){
          this.$message({
              showClose: true,
              message: 'Tweet annotated!',
               type: 'success'
            });

         
          }

        })
        .catch(error => {
           console.log('-------', error)
           this.$message({
              showClose: true,
              message: 'Something went wrong!',
               type: 'error'
            });
        });
    },
    onNext(){
     this.$emit("next")
    }
  }
};
</script>
