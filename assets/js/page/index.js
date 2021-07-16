"use strict";

// var ctx = document.getElementById("myChart").getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus"],
//     datasets: [{
//       label: 'Sales',
//       data: [150, 1800, 4305, 3022, 6310, 5120, 5880, 6154],
//       borderWidth: 2,
//       backgroundColor: 'rgba(63,82,227,.8)',
//       borderWidth: 0,
//       borderColor: 'transparent',
//       pointBorderWidth: 0,
//       pointRadius: 3.5,
//       pointBackgroundColor: 'transparent',
//       pointHoverBackgroundColor: 'rgba(63,82,227,.8)',
//     },
//     {
//       label: 'Budget',
//       data: [2207, 3403, 2200, 5025, 2302, 4208, 3880, 4880],
//       borderWidth: 2,
//       backgroundColor: 'rgba(254,86,83,.7)',
//       borderWidth: 0,
//       borderColor: 'transparent',
//       pointBorderWidth: 0 ,
//       pointRadius: 3.5,
//       pointBackgroundColor: 'transparent',
//       pointHoverBackgroundColor: 'rgba(254,86,83,.8)',
//     }]
//   },
//   options: {
//     legend: {
//       display: false
//     },
//     scales: {
//       yAxes: [{
//         gridLines: {
//           // display: false,
//           drawBorder: false,
//           color: '#f2f2f2',
//         },
//         ticks: {
//           beginAtZero: true,
//           stepSize: 1500,
//           callback: function(value, index, values) {
//             return '$' + value;
//           }
//         }
//       }],
//       xAxes: [{
//         gridLines: {
//           display: false,
//           tickMarkLength: 15,
//         }
//       }]
//     },
//   }
// });

var statistics_chart = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(statistics_chart, {
  type: 'line',
  data: {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus"],
    datasets: [{
      label: 'Produk Terjual',
      data: [640, 387, 530, 302, 430, 270, 488, 600],
      borderWidth: 5,
      borderColor: '#38c5a0',
      backgroundColor: 'transparent',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#38c5a0',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          stepSize: 150
        }
      }],
      xAxes: [{
        gridLines: {
          color: '#fbfbfb',
          lineWidth: 2
        }
      }]
    },
  }
});

var balance_chart = document.getElementById("balance-chart").getContext('2d');

var balance_chart_bg_color = balance_chart.createLinearGradient(0, 0, 0, 70);
balance_chart_bg_color.addColorStop(0, 'rgba(63,82,227,.2)');
balance_chart_bg_color.addColorStop(1, 'rgba(63,82,227,0)');

var myChart = new Chart(balance_chart, {
  type: 'line',
  data: {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus'],
    datasets: [{
      label: 'Pemasukan Saldo',
      data: [4200000,4000000,4500000,3973000,4700000,5000000,4420000,4600000],
      backgroundColor: balance_chart_bg_color,
      borderWidth: 3,
      borderColor: '#38c5a0',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: '#38c5a0',
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false
        }
      }]
    },
  }
});

var sales_chart = document.getElementById("sales-chart").getContext('2d');

var sales_chart_bg_color = sales_chart.createLinearGradient(0, 0, 0, 80);
balance_chart_bg_color.addColorStop(0, 'rgba(63,82,227,.2)');
balance_chart_bg_color.addColorStop(1, 'rgba(63,82,227,0)');

var myChart = new Chart(sales_chart, {
  type: 'line',
  data: {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus'],
    datasets: [{
      label: 'Pengikut',
      data: [15,25,10,7,12,30,20,32],
      borderWidth: 2,
      backgroundColor: balance_chart_bg_color,
      borderWidth: 3,
      borderColor: '#38c5a0',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: '#38c5a0',
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false
        }
      }]
    },
  }
});

$("#products-carousel").owlCarousel({
  items: 3,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});
