$(document).ready(function () {
    // Background Bar Chart canvas
    var bgBarCtx = document.getElementById("background-bar-chart");
    createbgBarChart(bgBarCtx);
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
            responsiveAnimationDuration: 400,  // in ms
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
}
