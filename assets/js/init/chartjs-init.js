( function ( $ ) {
    "use strict";

    //Team chart
    var ctx = document.getElementById( "team-chart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2014", "2015", "2016", "2017", "2018", "2019", "2020" ],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [ {
                data: [ 103451864, 265134266, 323451729, 428462614, 507726154, 598763551, 635697432 ],
                label: "专利录入数",
                backgroundColor: 'rgba(0,200,155,.35)',
                borderColor: 'rgba(0,200,155,0.60)',
                borderWidth: 3.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(0,200,155,0.60)',
                    },
                    {
                data: [ 113797050, 291047692, 345796901, 491308875, 518498769, 628639906, 639267175 ],
                label: "专利审核数",
                backgroundColor: 'rgba(0,194,146,.25)',
                borderColor: 'rgba(0,194,146,0.5)',
                borderWidth: 3.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(0,194,146,0.5)',
                    }, ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },


            },
            scales: {
                xAxes: [ {
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: '年份'
                    }
                        } ],
                yAxes: [ {
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '专利数'
                    }
                        } ]
            },
            title: {
                display: false,
            }
        }
    } );



    //line chart
    var ctx = document.getElementById( "lineChart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2014", "2015", "2016", "2017", "2018", "2019", "2020" ],
            datasets: [
                {
                    label: "用户贡献值",
                    borderColor: "rgba(135,206,250,0.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(135,206,250,0.5)",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [ 603271, 3009991, 3876121, 4766521, 5443212, 5766421, 6087311 ]
                            },
                {
                    label: "用户注册数",
                    borderColor: "rgba(0, 194, 146, 0.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 194, 146, 0.5)",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [ 302871, 1249821, 1766512, 1965132, 2098132, 2512312, 2986874 ]
                            }
                        ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    } );


    //bar chart
    var ctx = document.getElementById( "barChart" );
    //    ctx.height = 200;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: [ '一月', '二月', '三月', '四月', '五月', '六月','七月','八月','九月','十月','十一月','十二月'],
            datasets: [
                {
                    label: "专利审核通过数",
                    data: [ 4083461, 2987512, 3723143, 4091231, 3497123, 3766523, 3098731, 3698321, 3230712, 342152, 0, 0 ],
                    borderColor: "rgba(0, 194, 146, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 194, 146, 0.5)"
                            },
                {
                    label: "专利审核未通过",
                    data: [ 408346, 200751, 340182, 208731, 209313, 300913, 321884, 297741, 274612, 28712, 0, 0 ],
                    borderColor: "rgba(0,0,0,0.09)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0,0,0,0.07)"
                            }
                        ]
        },
        options: {
            scales: {
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    }
                                } ]
            }
        }
    } );

    


    //pie chart
    var ctx = document.getElementById( "pieChart" );
    ctx.height = 200;
    var myChart = new Chart( ctx, {
        type: 'pie',
        data: {
            datasets: [ {
                data: [ 254278972, 152567383, 228851075],
                backgroundColor: [
                                    "rgba(0, 194, 146,0.9)",
                                    "rgba(0, 194, 146,0.6)",
                                    "rgba(0, 194, 146,0.3)",                             
                                ],
                hoverBackgroundColor: [
                                    "rgba(0, 194, 146,0.9)",
                                    "rgba(0, 194, 146,0.6)",
                                    "rgba(0, 194, 146,0.3)",
                                ]

                            } ],
            labels: [
                            "外观设计专利",
                            "实用新型专利",
                            "发明专利"
                        ]
        },
        options: {
            responsive: true
        }
    } );

    


    




} )( jQuery );