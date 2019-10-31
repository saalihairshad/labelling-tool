import { Bar, Line, Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
let LineChart = {
    extends: Line,

    mixins: [reactiveProp],

    props: ['options'],
    mounted() {
        console.log(this.$refs);
        let gradientStroke = this.$refs.canvas
            .getContext('2d')
            .createLinearGradient(500, 0, 100, 0);

        let gradientFill = this.$refs.canvas
            .getContext('2d')
            .createLinearGradient(500, 0, 100, 0)

        gradientStroke.addColorStop(0, '#03a9f4');
        gradientStroke.addColorStop(1, '#3f51b5');

        gradientFill.addColorStop(0, "rgba(3, 169, 244, 0.6)");
        gradientFill.addColorStop(1, "rgba(63, 81, 181, 0.6)");

        let gradient = {
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            backgroundColor: gradientFill,
        }

        Object.assign(this.chartData.datasets[0], gradient)

        this.renderChart(this.chartData, this.options)
    }
}

let BarChart = {
    extends: Bar,
    mixins: [reactiveProp],
    props: ['options'],
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}

let DoughnutChart = {
    extends: Doughnut,
    mixins: [reactiveProp],
    props: ['options'],
    mounted() {

        this.renderChart(this.chartData, this.options)
    }
}


function chart() {

}
export {
    LineChart,
    BarChart,
    DoughnutChart,

}