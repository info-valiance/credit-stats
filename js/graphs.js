$(document).ready(function () {
    // Background Bar Chart canvas
    var bgBarCtx = document.getElementById("background-bar-chart");
    createbgBarChart(bgBarCtx);

    // % usage every month in different categories line chart
    var perCatUse = document.getElementById("perCatLineChart");
    createPerCatUseChart(perCatUse);

    // Total usage every month in different categories line chart
    var totCatUse = document.getElementById("totCatLineChart");
    createTotCatUseChart(totCatUse);

    // Transaction distribution by merchants for apparels pie chart
    var appCatDis = document.getElementById("appCatPieChart");
    createAppCatUseChart(appCatDis);

    // Transaction distribution by merchants for groceries pie chart
    var groCatDis = document.getElementById("groCatPieChart");
    createGroCatUseChart(groCatDis);

    // Transaction distribution in a particular day time across apparels
    var appCatBar = document.getElementById("appCatBarChart");
    createAppCatBarChart(appCatBar);

    // Transaction distribution in a particular day time across gorceries
    var appCatBar = document.getElementById("groCatBarChart");
    createGroCatBarChart(appCatBar);

    // Change table data based on selected spending category
    $('.spendings-select').on('change', updateSpendingsTable);
});

// Create Line chart for Total Views
function createbgBarChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
            datasets: [{
                label: '# of Votes',
                data: [26, 34, 22, 43, 6, 25, 40, 45, 9, 33, 35, 29, 17, 9, 45, 2, 28, 16, 12, 39, 3, 31, 11, 42, 49, 20, 22, 5, 45, 26, 7, 14, 28, 12, 19, 44, 40, 46, 24, 37, 36, 3, 8, 25, 18, 11, 32, 48, 27, 38, 38, 7, 39, 47, 48, 34, 13, 26, 50, 18, 28, 24, 23, 29, 49, 42, 1, 30, 12, 35, 41, 40, 36, 19, 22, 43, 6, 25, 40, 45, 9, 27, 44, 17, 18, 36, 4, 5, 16, 34, 48, 13, 7, 50, 42, 24, 26, 32, 30, 21],
                backgroundColor: 'rgba(219, 221, 225, 1)',
                borderColor: 'rgba(219, 221, 225, 1)',
                hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 1
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            // responsiveAnimationDuration: 400,  // in ms
            animation: {
                duration: 700,
                easing: 'easeInQuint'
            },
            title: {
                text: 'Data',
                display: false,
                fontColor: '#fff',
                fontStyle: 'normal'
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        beginAtZero: true,
                        fontColor: 'rgba(255, 255, 255, 0.7)',
                        padding: 10
                    },
                    display: false
                }],
                xAxes: [{
                    categoryPercentage: 1.0,
                    barPercentage: 0.75,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        display: false
                    },
                    display: false
                }]
            }
        }
    });

    setInterval(function() {
        // console.log(chart.data.datasets[0].data);
        for (var i = 0; i < 7; i++) {
            var index = Math.floor(Math.random() * 100);
            var dataVal = Math.ceil(Math.random() * 50);
            chart.data.datasets[0].data[index] = dataVal;
        }
        chart.update();
    }, 3000);
}

// Create Line chart for % usage per month category wise
function createPerCatUseChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Healthcare",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: '#00838F',
                pointBackgroundColor: '#00838F',
                lineTension: 0.1,
                borderWidth: 2,
                pointRadius: 1,
                pointHoverRadius: 2,
                // data: [15, 14, 35, 29, 31, 8, 26, 6, 1, 23, 13, 18],
                data: [10, 8, 6, 14, 6, 4, 5, 9, 11, 7, 8, 5],
            },
            // {
            //     label: "Transport",
            //     backgroundColor: 'rgba(255, 255, 255, 0)',
            //     borderColor: 'rgb(173, 215, 246)',
            //     // pointBackgroundColor: 'rgb(255, 255, 255)',
            //     // data: [17, 16, 35, 34, 31, 10, 28, 10, 10, 25, 17, 21],
            //     data: [10, 12, 18, 24, 31, 28, 24, 26, 30, 33, 29, 26],
            // },
            // {
            //     label: "Education",
            //     backgroundColor: 'rgba(255, 255, 255, 0)',
            //     borderColor: 'rgb(141, 106, 159)',
            //     // pointBackgroundColor: 'rgb(255, 255, 255)',
            //     data: [15, 14, 35, 29, 31, 8, 26, 6, 1, 23, 13, 18],
            // },
            // {
            //     label: "Entertainment",
            //     backgroundColor: 'rgba(255, 255, 255, 0)',
            //     borderColor: 'rgb(8, 146, 165)',
            //     // pointBackgroundColor: 'rgb(255, 255, 255)',
            //     data: [15, 14, 35, 29, 31, 8, 26, 6, 1, 23, 13, 18],
            // },
            {
                label: "Apparels",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: '#00ACC1',
                pointBackgroundColor: '#00ACC1',
                lineTension: 0.1,
                borderWidth: 2,
                pointRadius: 1,
                pointHoverRadius: 2,
                data: [6, 18, 11, 7, 3, 4, 5, 8, 16, 23, 10, 4],
            },
            {
                label: "Groceries",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: '#4DD0E1',
                pointBackgroundColor: '#4DD0E1',
                lineTension: 0.1,
                borderWidth: 2,
                pointRadius: 1,
                pointHoverRadius: 2,
                data: [15, 13, 15, 14, 18, 22, 15, 15, 16, 14, 16, 8],
            },
            {
                label: "Electronics",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: '#B2EBF2',
                pointBackgroundColor: '#B2EBF2',
                lineTension: 0.1,
                borderWidth: 2,
                pointRadius: 1,
                pointHoverRadius: 2,
                // data: [5, 10, 27, 25, 28, 4, 20, 3, 10, 20, 10, 15],
                data: [3, 8, 4, 7, 4, 9, 15, 7, 8, 28, 6, 12],
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 400,  // in ms
            title: {
                text: 'Percentage Distribution',
                display: true,
                // fontColor: '#fff',
                fontStyle: 'normal'
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 10,
                    // usePointStyle: true,
                    fontSize: 9
                }
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex].label +': ' + tooltipItem.yLabel + '%';
                    }
                },
                mode: 'point',
                // intersect: false,
                // enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0.2)',
                        // lineWidth: 2,
                        // drawBorder: true,
                        // display: false
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        // fontColor: 'rgba(255, 255, 255, 0.7)',
                        padding: 10,
                        // Include a % sign in the ticks
                        callback: function(value, index, values) {
                            return value + '%';
                        },
                        // suggestedMax: 70,
                        // display: false
                    },
                }],
                xAxes: [{
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0.2)',
                        // lineWidth: 2,
                        // drawBorder: true,
                        // drawOnChartArea: false,
                        // display: true,
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                    },
                    ticks: {
                        // display: false
                    },
                    // display: false
                }]
            }
        }
    });
}

// Create Line chart for total usage per month category wise
function createTotCatUseChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Healthcare",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: '#00838F',
                pointBackgroundColor: '#00838F',
                lineTension: 0.1,
                borderWidth: 2,
                pointRadius: 1,
                pointHoverRadius: 2,
                // data: [15, 14, 35, 29, 31, 8, 26, 6, 1, 23, 13, 18],
                data: [1000, 1000, 3000, 1000, 2000, 4000, 1000, 2000, 1000, 1000, 2000, 4000],
            },
            // {
            //     label: "Transport",
            //     backgroundColor: 'rgba(255, 255, 255, 0)',
            //     borderColor: 'rgb(173, 215, 246)',
            //     // pointBackgroundColor: 'rgb(255, 255, 255)',
            //     // data: [17, 16, 35, 34, 31, 10, 28, 10, 10, 25, 17, 21],
            //     data: [10, 12, 18, 24, 31, 28, 24, 26, 30, 33, 29, 26],
            // },
            // {
            //     label: "Education",
            //     backgroundColor: 'rgba(255, 255, 255, 0)',
            //     borderColor: 'rgb(141, 106, 159)',
            //     // pointBackgroundColor: 'rgb(255, 255, 255)',
            //     data: [15, 14, 35, 29, 31, 8, 26, 6, 1, 23, 13, 18],
            // },
            // {
            //     label: "Entertainment",
            //     backgroundColor: 'rgba(255, 255, 255, 0)',
            //     borderColor: 'rgb(8, 146, 165)',
            //     // pointBackgroundColor: 'rgb(255, 255, 255)',
            //     data: [15, 14, 35, 29, 31, 8, 26, 6, 1, 23, 13, 18],
            // },
            {
                label: "Apparels",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: '#00ACC1',
                pointBackgroundColor: '#00ACC1',
                lineTension: 0.1,
                borderWidth: 2,
                pointRadius: 1,
                pointHoverRadius: 2,
                data: [2000, 500, 6000, 3000, 2000, 500, 2000, 1000, 7000, 10000, 2000, 1000],
            },
            {
                label: "Groceries",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: '#4DD0E1',
                pointBackgroundColor: '#4DD0E1',
                lineTension: 0.1,
                borderWidth: 2,
                pointRadius: 1,
                pointHoverRadius: 2,
                data: [6000, 6000, 5000, 7000, 7000, 9000, 6000, 5000, 6000, 6000, 6000, 3000],
            },
            {
                label: "Electronics",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: '#B2EBF2',
                pointBackgroundColor: '#B2EBF2',
                lineTension: 0.1,
                borderWidth: 2,
                pointRadius: 1,
                pointHoverRadius: 2,
                // data: [5, 10, 27, 25, 28, 4, 20, 3, 10, 20, 10, 15],
                data: [1000, 2000, 500, 500, 1000, 3000, 3000, 1000, 2000, 6000, 1000, 2000],
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 400,  // in ms
            title: {
                text: 'Volume Distribution',
                display: true,
                // fontColor: '#fff',
                fontStyle: 'normal'
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 10,
                    // usePointStyle: true,
                    fontSize: 9
                }
            },
            tooltips: {
                // callbacks: {
                //     label: function (tooltipItem, data) {
                //         return data.datasets[tooltipItem.datasetIndex].label +': ' + tooltipItem.yLabel + '%';
                //     }
                // },
                mode: 'point',
                // intersect: false,
                // enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0.2)',
                        // lineWidth: 2,
                        // drawBorder: true,
                        // display: false
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        // fontColor: 'rgba(255, 255, 255, 0.7)',
                        padding: 10,
                        // // Include a % sign in the ticks
                        // callback: function(value, index, values) {
                        //     return value + '%';
                        // },
                        // display: false
                    },
                }],
                xAxes: [{
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0.2)',
                        // lineWidth: 2,
                        // drawBorder: true,
                        // drawOnChartArea: false,
                        // display: true,
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false,
                    },
                    ticks: {
                        // display: false
                    },
                    // display: false
                }]
            }
        }
    });
}

// Create Pie chart for merhcant distribution for Apparels
function createAppCatUseChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            // labels: ["Flipkart", "Amazon", "Snapdeal", "Ebay", "Myntra", "Jabong", "Shopclues", "Rest"],
            labels: ["Flipkart", "Amazon", "Snapdeal", "Ebay","Rest"],
            datasets: [{
                label: "Transactions",
                backgroundColor: ['#00838F', '#0097A7', '#00ACC1', '#00BCD4', '#80DEEA'],
                borderColor: '#fff',
                borderWidth: 0,
                lineTension: 0,
                // data: [22, 20, 14, 12, 9, 8, 6, 9],
                data: [22, 20, 14, 12, 32],
            }]
        },

        // Configuration options go here
        options: {
            // cutoutPercentage: 0,
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 400,  // in ms
            title: {
                text: 'Merchant Selection for Apparels',
                display: true,
                // fontColor: '#fff',
                fontStyle: 'normal',
            },
            legend: {
                // display: false
                position: 'top',
                labels: {
                    // boxWidth: 20
                }
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.labels[tooltipItem.index] +': ' + data.datasets[0].data[tooltipItem.index] + '%';
                    }
                },
                // enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false,
                        suggestedMax: 75
                    },
                }],
                xAxes: [{
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    display: false
                }]
            }
        }
    });
}

// Create Pie chart for merhcant distribution for Groceries
function createGroCatUseChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            // labels: ["BigBasket", "Grofers", "Amazon", "Spencers", "RelianceSmart", "Rest"],
            labels: ["BigBasket", "Grofers", "Amazon", "Rest"],
            datasets: [{
                label: "Transactions",
                // backgroundColor: ['#00838F', '#0097A7', '#00ACC1', '#00BCD4', '#4DD0E1', '#80DEEA', '#B2EBF2'],
                backgroundColor: ['#00838F', '#0097A7', '#00ACC1', '#80DEEA'],
                borderColor: '#fff',
                borderWidth: 0,
                lineTension: 0,
                data: [32, 30, 20, 9, 6, 3],
                data: [32, 30, 20, 18],
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 400,  // in ms
            title: {
                text: 'Merchant Selection for Groceries',
                display: true,
                // fontColor: '#fff',
                fontStyle: 'normal',
            },
            legend: {
                // display: false
                position: 'top',
                labels: {
                    // boxWidth: 20
                }
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.labels[tooltipItem.index] +': ' + data.datasets[0].data[tooltipItem.index] + '%';
                    }
                },
                // enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false,
                        suggestedMax: 75
                    },
                }],
                xAxes: [{
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    display: false
                }]
            }
        }
    });
}

// Transaction distribution in a particular day time across apparels
function createAppCatBarChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'horizontalBar',

        // The data for our dataset
        data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [{
                label: '9am-12pm',
                data: [100, 120, 90, 110, 330, 620, 740],
                backgroundColor: '#00838F',
                borderColor: 'rgba(118, 194, 175, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '12pm-3pm',
                data: [250, 200, 230, 280, 400, 900, 970],
                backgroundColor: '#0097A7',
                borderColor: 'rgba(173, 215, 246, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '3pm-6pm',
                data: [300, 230, 330, 290, 500, 1200, 1270],
                backgroundColor: '#00ACC1',
                borderColor: 'rgba(141, 106, 159, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '6pm-9pm',
                data: [510, 450, 650, 500, 1200, 1510, 1500],
                backgroundColor: '#00BCD4',
                borderColor: 'rgba(8, 146, 165, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '9pm-12am',
                data: [520, 470, 610, 450, 900, 1150, 990],
                backgroundColor: '#26C6DA',
                borderColor: 'rgba(7, 190, 184, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '12am-3am',
                data: [200, 180, 250, 150, 500, 750, 600],
                backgroundColor: '#4DD0E1',
                borderColor: 'rgba(238, 96, 85, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '3am-6am',
                data: [100, 80, 120, 150, 320, 400, 230],
                backgroundColor: '#80DEEA',
                borderColor: 'rgba(194, 249, 112, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '6am-9pm',
                data: [20, 40, 10, 20, 60, 150, 130],
                backgroundColor: '#B2EBF2',
                borderColor: 'rgba(232, 141, 103, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            // responsiveAnimationDuration: 400,  // in ms
            title: {
                text: 'Transactions for Apparels',
                display: true,
                // fontColor: '#fff',
                fontStyle: 'normal'
            },
            legend: {
                // display: false
                labels: {
                    boxWidth: 10,
                    // usePointStyle: true,
                    fontSize: 12
                }
            },
            tooltips: {
                // callbacks: {
                //     beforeTitle: function (tooltipItem, data) {
                //         return 'Apparels';
                //     }
                // },
                // enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    stacked: true,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        beginAtZero: true,
                        // fontColor: 'rgba(255, 255, 255, 0.7)',
                        padding: 10
                    },
                    // display: false
                }],
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        // display: false
                    },
                    // display: false
                }]
            }
        }
    });
}

// Transaction distribution in a particular day time across groceries
function createGroCatBarChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'horizontalBar',

        // The data for our dataset
        data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [{
                label: '9am-12pm',
                data: [900, 920, 1000, 860, 800, 1000, 1080],
                backgroundColor: '#00838F',
                borderColor: 'rgba(118, 194, 175, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '12pm-3pm',
                data: [880, 890, 970, 800, 790, 990, 930],
                backgroundColor: '#0097A7',
                borderColor: 'rgba(173, 215, 246, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '3pm-6pm',
                data: [800, 860, 830, 790, 850, 900, 870],
                backgroundColor: '#00ACC1',
                borderColor: 'rgba(141, 106, 159, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '6pm-9pm',
                data: [2400, 2350, 2650, 1880, 1700, 1210, 1490],
                backgroundColor: '#00BCD4',
                borderColor: 'rgba(8, 146, 165, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '9pm-12am',
                data: [820, 770, 910, 750, 700, 650, 690],
                backgroundColor: '#26C6DA',
                borderColor: 'rgba(7, 190, 184, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '12am-3am',
                data: [10, 20, 50, 0, 70, 50, 10],
                backgroundColor: '#4DD0E1',
                borderColor: 'rgba(238, 96, 85, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '3am-6am',
                data: [0, 10, 20, 0, 20, 10, 10],
                backgroundColor: '#80DEEA',
                borderColor: 'rgba(194, 249, 112, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '6am-9pm',
                data: [120, 100, 180, 100, 80, 50, 30],
                backgroundColor: '#B2EBF2',
                borderColor: 'rgba(232, 141, 103, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            // responsiveAnimationDuration: 400,  // in ms
            title: {
                text: 'Transactions for Groceries',
                display: true,
                // fontColor: '#fff',
                fontStyle: 'normal'
            },
            legend: {
                // display: false
                labels: {
                    boxWidth: 10,
                    // usePointStyle: true,
                    fontSize: 12
                }
            },
            tooltips: {
                // callbacks: {
                //     beforeTitle: function (tooltipItem, data) {
                //         return 'Apparels';
                //     }
                // },
                // enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    stacked: true,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        beginAtZero: true,
                        // fontColor: 'rgba(255, 255, 255, 0.7)',
                        padding: 10
                    },
                    // display: false
                }],
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        // display: false
                    },
                    // display: false
                }]
            }
        }
    });
}
