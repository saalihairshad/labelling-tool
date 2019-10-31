// var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
// if (document.getElementById('gradientChart')) {
//     var ctx = document.getElementById('gradientChart').getContext("2d");


//     // gradientStroke.addColorStop(0, '#03a9f4');
//     // gradientStroke.addColorStop(1, '#3f51b5');

//     // var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
//     // gradientFill.addColorStop(0, "rgba(3, 169, 244, 0.6)");
//     // gradientFill.addColorStop(1, "rgba(63, 81, 181, 0.6)");

// }



const charts = {
    dashboard_doughnut: {
        data: {
            datasets: [

                {
                    label: 'Disk',
                    backgroundColor: [
                        "#e2e8f0",
                        "#88e2ff",
                        "#7986cb",
                    ],
                    data: [10, 20, 30]

                },

            ],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: !0, position: 'bottom', labels:
                {
                    fontColor: '#7F8FA4', usePointStyle: !0
                }
            }
        },
    },


    dashboard_bar: {
        data: {
            labels: [
                "Blue",
                "Yellow",
                "Green",
                "Purple",
                "Orange",
                "Red",
                "Indigo",
                "Blue",
                "Yellow",
                "Green",
                "Purple",
                "Orange",
                "Red",
                "Indigo",
                "Blue",
                "Yellow"
            ],
            datasets: [
                {
                    label: "HTML",
                    backgroundColor: "#7986cb",
                    borderWidth: 0,
                    data: [21, 90, 55, 0, 59, 77, 12, 21, 90, 55, 0, 59, 77, 12, 21, 90]
                },
                {
                    label: "Wordpress",
                    backgroundColor: "#88e2ff",
                    borderWidth: 0,
                    data: [12, 40, 16, 17, 89, 0, 12, 12, 0, 55, 60, 79, 99, 12, 12, 0]
                },
                {
                    label: "Laravel",
                    backgroundColor: "#e2e8f0",
                    borderWidth: 0,
                    data: [12, 40, 16, 17, 89, 0, 12, 40, 16, 17, 89, 0, 12, 12, 40, 16]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: { display: true },
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        barThickness: 5,
                        gridLines: {
                            zeroLineColor: "rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.1)",
                            display: false
                        }
                    }
                ],
                yAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            zeroLineColor: "rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.1)"
                        }
                    }
                ]
            }
        }
    },



    dashboard_line: {
        data: {
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
            datasets: [{
                label: "Data",
                // borderColor: gradientStroke,
                // pointBorderColor: gradientStroke,
                // pointBackgroundColor: gradientStroke,
                // pointHoverBackgroundColor: gradientStroke,
                // pointHoverBorderColor: gradientStroke,
                // backgroundColor: gradientFill,
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 1,
                pointRadius: 5,
                fill: true,
                borderWidth: 4,
                data: [0, 170, 80, 60, 80, 170, 20]
            }]
        },
        options: {
            animation: {
                easing: "easeInOutBack"
            },
            legend: {
                display: false,
                position: "bottom"
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        padding: 20
                    },
                    gridLines: {
                        drawTicks: false,
                        display: false
                    }

                }],
                xAxes: [{
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    },

};

export default charts;
