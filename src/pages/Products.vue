<template>
  <b-row>
    <b-col class="col-md-12">
      <div class="card no-b">
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-hover">
              <tbody>
                <tr class="no-b" v-for="product in products" :key="product.id" >
                  <td class="table-img">
                    <img :src="assetsPath(product.thumbnail)" alt="" />
                  </td>
                  <td>
                    <h6>{{product.title}}</h6>
                    <small class="text-muted">{{product.category}}</small>
                  </td>
                  <td>
                    <div class="d-none d-lg-block">{{product.price}}</div>
                  </td>
                  <td>
                    <div class="d-none d-lg-block">
                      <span class="badge badge-success">{{product.status}}</span>
                    </div>
                  </td>
                  <td>
                    <div class="d-none d-lg-block">
                      <span>
                        <i class="icon icon-data_usage"></i> {{product.updated}}
                      </span>
                      <br />
                      <span>
                        <i class="icon icon-timer"></i> {{product.created}}
                      </span>
                    </div>
                  </td>
                  <td>
                    <a class="btn-fab btn-fab-sm btn-primary shadow text-white">
                      <i class="icon-pencil"></i>
                    </a>
                  </td>
                </tr>

            
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import dummyProducts from "../assets/json/products.json";
import mixins from '../helpers/mixins.js'
export default {
    mixins: [mixins],
    data() {
        return {
            products: dummyProducts
        }
    },
};
</script>