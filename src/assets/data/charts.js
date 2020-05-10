const charts = {
  dashboard_bar: {
    data: {
      labels: [
        "Power Distance",
        "Individualism",
        "Masculinity",
        "Uncertanity Avoidance",
        "Long Term Orientation",
        "Indulgence"
      ],
      datasets: [
        {
          label: "United States",
          borderColor: "rgba(255,99,132,1)",
          backgroundColor: "rgba(54, 162, 235, 0.7)",
          data: [40, 91, 62, 46, 26, 68]
        },
        {
          label: "United Kingdom",
          backgroundColor: "rgba(255, 99, 132, 0.7)",
          data: [35, 89, 66, 35, 51, 69]
        },

        {
          label: "India",
          backgroundColor: "rgba(255,206,86,0.7)",
          data: [77, 48, 56, 40, 51, 26]
        },

        {
          label: "Canada",
          backgroundColor: "rgb( 0,204,102, 0.7)",
          data: [39, 80, 52, 48, 36, 68]
        },
        {
          label: "Australia",
          backgroundColor: "rgba(0,204,204,0.7)",
          data: [38, 90, 61, 51, 21, 71]
        },
        {
          label: "Netherlands",
          backgroundColor: "rgb(255,178,102,0.7)",
          data: [38, 80, 14, 53, 67, 68]
        },
        {
          label: "Germany",
          backgroundColor: "rgb(160,160,160,0.7)",
          data: [35, 67, 66, 65, 83, 40]
        },
        {
          label: "France",
          backgroundColor: "rgba(204,153,255,0.7)",
          data: [68, 71, 43, 86, 63, 48]
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
            //barThickness: 5,
            gridLines: {
              zeroLineColor: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.1)",
              display: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              zeroLineColor: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },

      plugins: {
        datalabels: {
          borderColor: "blue",
          anchor: "end",
          textAlign: "center",
          clamp: true,
          offset: 2
        }
      }
    }
  }
};

export default charts;
