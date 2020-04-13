<template>
  <div class="row no-gutters">
    <div class="col-md-3 white">
      <div>
            <!-- <div class="b-t">
               <span>Anotated: {{meta.annotated}} of {{meta.total}}</span>
            </div> -->

            <ul class="list-unstyled b-t scrollable" v-if="reviews.length > 0">
              <li
                class="media p-3 b-b "
                v-for="(review) in reviews"
                :key="review._id"
                @click="handleClick(review)"
                :class="
                  selectedItem && review._id == selectedItem._id
                    ? 'light b-l'
                    : ''
                "
              >
                <div class="avatar avatar-md orange mr-3">
                  <i class="icon-star"></i>
                </div>

                <div class="media-body text-truncate">
                  
                  
                  
                  <h6 class="mt-0 mb-1 font-weight-normal">
                    {{ review.Author }}
                  </h6>
                  <span>{{ review.Review }}</span>
                  <br />
                  <small>
                       <el-tag size="mini" type="primary" class="mr-2"  v-if="isAnnotated(review)"
                      >Anotated
                      </el-tag > 
                  
                    <!-- <el-tag  size="mini" type="warning" v-if="itune.annotations && itune.annotations.isPending">Pending</el-tag> -->
                  {{ review.AppName }}
                  </small>
                </div>
              </li>
            </ul>
      </div>
    </div>
    <div class="col-md-9 b-l vh-100">
      <div class="p-3 scrollable-container" v-if="show">
        <Review :review="selectedItem" @next="handeNext()" />
      </div>

      <div class="text-center pt-5 mt-5" v-if="!selectedItem">
        <i class="el-icon-thumb fz-48"></i>
        <div class="mt-3" ><h4>Select An Item</h4></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Review from "../components/Review";
//import ituneForm from "../components/HelloWorld";
import auth from "../services/authService";
export default {
  name: "ituneComponent",
  components: {
        Review
    //  ituneForm
  },
  data() {
    return {
      meta:[],
      reviews: [],
      error: "",
      text: "",
      selectedItem: null,
      show: false,
      index: "",
      user: {},
    };
  },
  async created() {
       this.user = auth.getCurrentUser();
    try {
      this.itunes = await this.getitunes();
    } catch (error) {
      this.error = error.message;
    }
  },
  methods: {
    isAnnotated(itune){

        return itune.annotations  && itune.annotations[this.user._id];

    },
    handleClick(item) {
      console.log(item);
      this.selectedItem = item;
       this.index = this.reviews.indexOf(item);
      this.show = true;
    },
    handeNext() {
      if (this.itunes[this.index + 1]) {
        this.selecteditune = this.itunes[this.index + 1];
        this.index = this.itunes.indexOf(this.selecteditune);
      } else {
        this.$message({
          showClose: true,
          message: "No more itunes",
          type: "warning"
        });
      }
    },
    // Get itune
    getitunes() {
      const url = "http://localhost:4000/api/itunes/";
      return new Promise((resolve, reject) => {
        axios
          .get(url)
          .then(res => {
           this.reviews = res.data.data;
            this.meta = res.data.meta;
          
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
</script>
