
<template>
  <div>
    <b-row class="row-eq-height my-3 mt-3">
      <b-col class="col-md-6">
        <b-row>
          <b-col cols="col-md-6 col-sm-6">
            <b-card class="no-b mb-3 bg-danger text-white">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <i class="icon-package s-18"></i>
                </div>
                <div>
                  <span class="text-success">40+35</span>
                </div>
              </div>
              <div class="text-center">
                <div class="s-48 my-3 font-weight-lighter">
                  <i class="icon-chrome"></i>
                </div>Chrome
              </div>
            </b-card>
          </b-col>
          <b-col cols="col-md-6 col-sm-6">
            <div class="card no-b mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <i class="icon-timer s-18"></i>
                  </div>
                  <div>
                    <span class="badge badge-pill badge-primary">4:30</span>
                  </div>
                </div>
                <div class="text-center">
                  <div class="s-48 my-3 font-weight-lighter">68</div>New Orders
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="card no-b mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <i class="icon-user-circle-o s-18"></i>
                  </div>
                  <div>
                    <span class="badge badge-pill badge-danger">4:30</span>
                  </div>
                </div>
                <div class="text-center">
                  <div class="s-48 my-3 font-weight-lighter">170</div>New Users
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <div class="card no-b mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <i class="icon-user-times s-18"></i>
                  </div>
                  <div>
                    <span class="text-danger">50</span>
                  </div>
                </div>
                <div class="text-center">
                  <div class="s-48 my-3 font-weight-lighter">95</div>Returning Users
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="col-md-6">
        <b-card class="no-b p-2">
          <doughnut-chart
            cssClasses="height-300"
            :chartData="chartsData.dashboard_doughnut.data"
            :options="chartsData.dashboard_doughnut.options"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-card class="no-b my-3">
      <bar-chart
        cssClasses="my-2 height-300"
        :chartData="chartsData.dashboard_bar.data"
        :options="chartsData.dashboard_bar.options"
      />

      <div class="p-4">
        <b-row class="my-3 no-gutters">
          <b-col class="col-md-3">
            <h1>Tasks</h1>Currently assigned tasks to team.
          </b-col>
          <b-col class="col-md-9">
            <b-row>
              <b-col class="col-md-3" v-for="task in json.tasks" :key="task.id">
                <list
                  :title="task.title"
                  :subtitle="task.subtitle"
                  :image="assetsPath(task.team.u1)"
                />
            
                <b-progress :value="task.progress" :variant="task.variant" class="mb-3"  height=".25rem"></b-progress>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-card>

    <b-row class="row my-3">
      <b-col class="col-md-6">
        <b-card class="b-0">
          <div class="p-5">
            <line-chart
              cssClasses="my-2 height-300"
              :chartData="chartsData.dashboard_line.data"
              :options="chartsData.dashboard_line.options"
            />
          </div>
        </b-card>
      </b-col>
      <b-col class="col-md-6">
        <div class="card no-b">
          <div class="card-body">
            <table class="table table-hover earning-box">
              <tbody>
                <tr class="no-b" v-for="employe in json.employees" :key="employe.id">
                  <td class="w-10">
                    <a href="panel-page-profile.html" class="avatar avatar-lg">
                      <img :src="assetsPath(employe.image)" alt="" />
                    </a>
                  </td>
                  <td>
                    <h6>{{employe.name}}</h6>
                    <small class="text-muted">{{employe.designation}}</small>
                  </td>
                  <td>{{employe.age}}</td>
                  <td>${{employe.salery}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import {
  LineChart,
  BarChart,
  DoughnutChart
} from "../components/charts/charts.js";
import chartsData from "../assets/data/charts.js";
import json from "../assets/json/dashboard.json";
import list from "../components/x-list";
import mixins from '../helpers/mixins.js'
export default {
     mixins: [mixins],
  components: {
    LineChart,
    BarChart,
    DoughnutChart,
    list
  },
  data() {
    return {
      chartsData,
      json
    };
  },
  methods: {
       
  },
  computed:{
 
  },

};
</script>
<style>
</style>