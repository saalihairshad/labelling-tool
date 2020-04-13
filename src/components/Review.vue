<template>
  <div class="m-md-3">

    <!--Message Start-->
    <div class="card b-0 m-2">
      <div class="card-body">
        <div data-toggle="collapse" data-target="#message1">
          <div class="media">
            <div class="d-flex mr-3 height-50">
              <i class="icon-star s-64"></i>
            </div>
            <div class="media-body">
              <h6 class="mt-0 mb-1 font-weight-normal b-b" v-if="review.Title">
                {{ review.Title }}
              </h6>
              <div class="collapse my-3 show" id="message1">
                <div class="lead my-3" >
                  {{ review.Review }}   
                </div>


               <div class="pt-3 b-t">
                  <small>Author: {{ review.Author }} </small>  |
                <small>App: {{ review.AppName }} </small>  |
                <small>Country: {{ review.Country }} </small> 
                

               </div>

              </div>
            </div>
          </div>
        </div>
      </div>



      <el-tabs class="my-3 p-2">
        <el-tab-pane label="Annotations">
          <ReviewAnnotationForm
            :item="review"
            :key="review._id"
            class="p-3"
            :url="`http://localhost:4000/api/itunes/${this.review._id}`"
            @next="handleNext()"
          />
        </el-tab-pane>
        <el-tab-pane label="Annotators">
         
         <div class="row">
           <div class="col-md-7">
              <ul v-if="review.annotations">
            <li v-for="user in review.annotations" :key="user._id">
              {{ user.name }}
            </li>
          </ul>

           </div>
           <div class="col-md-5">
  <el-progress type="circle" :percentage="parseInt(similarity)"></el-progress>
      <div class="mt-3">Similarity</div>
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
      </el-tabs>
    </div>
  </div>
</template>

<script>
import ReviewAnnotationForm from "./ReviewAnnotationForm";
 import ddd from 'recursive-diff';
import auth from "../services/authService";
export default {
  props: ["review"],
  data() {
    return {
      similarity : 0,
      an: [],
      item:[],
    
    }
  },
  components: {
    ReviewAnnotationForm
  },

  mounted(){





    //this.review = {...{'Name':this.review.Author}}


   

    // if(this.review.annotations){
    //   this.an = Object.values(this.review.annotations);

       
    //   let total_difference = 0;
    //   if(this.an.length == 2){
    //      console.log(this.an);
    //     const diff = ddd.getDiff(this.an[0].annotations,this.an[1].annotations);

   

    //     if(diff.length > 0)
    //     {
    //         total_difference  = (this.objectSize(diff) *100 ) /this.objectSize(this.an[1].annotations);
    //     }
  
    //   }
    //   console.log(total_difference);

    //   this.similarity  = (100 - total_difference).toFixed(2);
    // }
  },
  methods: {
    handleNext() {
      this.$emit("next");
    },
    objectSize(obj) {
    return JSON.stringify(obj).match(/[^\\]":/g).length //
    },
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
