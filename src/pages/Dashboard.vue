<template>
  <div>
    <b-card class="no-b my-3">
      <div class="card-header white">
        <h3>Hofstede's Cultural Model</h3>
      </div>

      <bar-chart
        cssClasses="my-2 vh-x"
        :chartData="chartsData.dashboard_bar.data"
        :options="chartsData.dashboard_bar.options"
      />
    </b-card>

    <b-card class="no-b my-3">
      <div class="container">
        <div class="card-header white">
          <h4>Cultural Dimensions</h4>
        </div>
        <div class="row pt-4">
          <div class="col-md-6">
            <h5>Power Distance</h5>
            <p>
              Refers to the degree to which members of the country accept and
              expect that power is distributed unequally.
            </p>
            <h5>Individualism vs. Collectivism:</h5>
            <p>
              Indicates the extent to which members of a society are integrated
              into groups.
            </p>
            <h5>Masculinity vs. Femininity</h5>
            <p>
              Evaluates the differentiation between genders in a society. A
              society with a high Masculinity will have a stronger
              differentiation than a society with a low Masculinity.
            </p>
          </div>
          <div class="col-md-6">
            <h5>Uncertainty Avoidance</h5>
            <p>
              Indicates the extent to which people in a society are resistant to
              unpredictable and ambiguous situations.
            </p>
            <h5>Long-term vs. Short-term Time Orientation</h5>
            <p>
              Refers to people’s tendencies to focus on future or present goals.
              People in societies with a higher long-term index will consider
              the future more important than those with a short-term
              orientation.
            </p>
            <h5>Indulgence vs. Restraint</h5>
            <p>
              Indicates the extent to which a society expresses their wants and
              impulses. More indulgent societies—those with a higher Indulgence
              index, tend more to gratification than those with a lower
              Indulgence index.
            </p>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
import Chart from "chart.js";
import {
  LineChart,
  BarChart,
  DoughnutChart
} from "../components/charts/charts.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import chartsData from "../assets/data/charts.js";
import jsonData from "../assets/json/dashboard.json";
import list from "../components/x-list";
import mixins from "../helpers/mixins.js";
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
      json: jsonData
    };
  },
  methods: {},
  computed: {}
};
</script>
<style>
.vh-x {
  height: 70vh;
}
</style>
