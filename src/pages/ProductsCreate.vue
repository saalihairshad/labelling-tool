<template>
  <b-form @submit="onSubmit" v-if="show">
    <b-row>
      <b-col col-md-9>
        <b-row>
          <b-col class="col-md-6">
            <b-form-group
              id="input-group-1"
              label="Product Name:"
              label-for="input-1"
              description="Enter product name with clear description"
            >
              <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                required
                placeholder="Product Name"
               size="lg"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col class="col-md-6">
            <b-form-group
              id="input-group-2"
              label="Product Brand:"
              label-for="input-2"
              description="Select A Brand"
            >
              <b-form-input
                id="input-1"
                v-model="form.brand"
                type="text"
                required
                placeholder="Product Brand"
                 size="lg"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-md-6">
            <b-form-group id="input-group-3" label="Category:" label-for="input-3">
              <b-form-select id="input-3" v-model="form.category" :options="categories"  size="lg" required></b-form-select>
            </b-form-group>
          </b-col>
          <b-col class="col-md-3">
              <b-form-group id="input-group-price" label="Price:" label-for="input-price">
              <b-form-input
                id="input-1"
                v-model="form.price"
                type="text"
                required
                placeholder="300"
                 size="lg"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <div class="col-md-3">
         
             <b-form-group id="input-group-sku" label="Sku:" label-for="input-price">
              <b-form-input
                id="input-sku"
                v-model="form.sku"
                type="text"
                required
                placeholder="sku-1029-5998"
                 size="lg"
              ></b-form-input>
               </b-form-group>

          </div>
        </b-row>
        
            <b-form-group id="input-group-content" label="Description:" label-for="input-content">
          <ckeditor :editor="editor" v-model="form.content" ></ckeditor>
          </b-form-group>
        
               <b-form-group id="input-group-tags" label="Product Tags:" label-for="input-tags">
               <tags-input element-id="tags" 
    v-model="form.tags"
    :existing-tags="[
        { key: 'web-development', value: 'Web Development' },
        { key: 'php', value: 'PHP' },
        { key: 'javascript', value: 'JavaScript' },
    ]"
    :typeahead="true"></tags-input>
          </b-form-group>



      </b-col>
      <div class="col-md-3">
        <div class="card mt-4">
          <h6 class="card-header white">Publish Box</h6>
          <div class="card-body">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
          </div>
          <div class="card-footer bg-transparent">
            <button class="btn btn-primary btn-sm" type="submit">Publish</button>
          </div>
        </div>
      </div>
    </b-row>
  </b-form>
</template>

<script>
import jsonData from "../assets/json/products.json";
import mixins from "../helpers/mixins.js";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import VoerroTagsInput from '@voerro/vue-tagsinput'
export default {
  mixins: [mixins],
    components: { VoerroTagsInput },
  data() {
    return {
      form: {
        name: "",
        brand: "",
        price: "",
        sku: "",
        category: null,
        content: 'Write Something',
        checked: [],
          tags: [
            { key: 'web-development', value: 'Web Development' },
            { key: 'php', value: 'PHP' },
            { key: 'javascript', value: 'JavaScript' },
        ],
      },
      
      categories: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true,
      editor: ClassicEditor,
      
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>
<style>
  .ck-editor__editable {
    min-height: 350px;
   }
</style>