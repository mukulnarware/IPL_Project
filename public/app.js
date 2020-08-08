// const extraRunByTeam = require("./ipl/extraRunByTeam");

function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
    ////////

    fetch("./data1.json")
    .then(r => r.json())
    .then(visualizeData1);
    ///////
    
    fetch("./data2.json")
    .then(r => r.json())
    .then(visualizeData2);

    fetch("./data3.json")
    .then(r => r.json())
    .then(visualizeData3);

    fetch("./data4.json")
    .then(r => r.json())
    .then(visualizeData4);
}

fetchAndVisualizeData();




  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
    return;
  }

  
function visualizeData1(data) {
  visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
  return;
}

function visualizeData2(data){
  visualizeExtraRunByTeam(data.extraRunByTeam);
}

function visualizeData3(data){
  visualizeEconomicBowlers(data.economicBowler);
}

function visualizeData4(data){
  visualizeMatchesPlayedByCity(data.matchesPlayedByCity);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  // Highcharts.chart("matches-played-per-year", {
  //   chart: {
  //     type: "column"
  //   },
  //   title: {
  //     text: "Matches Played Per Year"
  //   },
  //   subtitle: {
  //     text:
  //       'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  //   },
  //   xAxis: {
  //     type: "category"
  //   },
  //   yAxis: {
  //     min: 0,
  //     title: {
  //       text: "Matches"
  //     }
  //   },
  //   series: [
  //     {
  //       name: "Years",
  //       data: seriesData
  //     }
  //   ]
  // });


  Highcharts.chart('matches-played-per-year', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Matches Played Per Year'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Years',
        data:seriesData,

        
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
  


}

///////////

function visualizeMatchesWonByEachTeam(matchesWonByEachTeam) {
  const seriesData = [];
  for (let team in matchesWonByEachTeam) {
    seriesData.push([team, matchesWonByEachTeam[team]]);
  }

  // Highcharts.chart("matches-won-by-each-team", {
  //   chart: {
  //     type: "column"
  //   },
  //   title: {
  //     text: "Matches Won By Each Team"
  //   },
  //   subtitle: {
  //     text:
  //       'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  //   },
  //   xAxis: {
  //     type: "category"
  //   },
  //   yAxis: {
  //     min: 0,
  //     title: {
  //       text: "Matches Won"
  //     }
  //   },
  //   series: [
  //     {
  //       name: "Winning Teams In IPL",
  //       data: seriesData
  //     }
  //   ]
  // });

  Highcharts.chart('matches-won-by-each-team', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Matches Won By Each Team For Season 2016'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches Won'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Winning Teams In IPL',
        data:seriesData,

        
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
              
}
//////////////////
function visualizeExtraRunByTeam(extraRunByTeam) {
  const seriesData = [];
  for (let team in extraRunByTeam) {
    seriesData.push([team, extraRunByTeam[team]]);
  }

  Highcharts.chart("extra-run-by-team", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra Runs Conceded By Each Team In IPL"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        name: " Teams ",
        data: seriesData
      }
    ]
  });
}
//////////////
function visualizeEconomicBowlers(economicBowler) {
  const seriesData = [];
  for (let name in economicBowler) {
    seriesData.push([name, economicBowler[name]]);
  }

  Highcharts.chart("top10-economic-bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top 10 Economic Bowlers IN 2015 With their Economy Rate"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy Rates"
      }
    },
    series: [
      {
        name: "Bowlers",
        data: seriesData
      }
    ]
  });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function visualizeMatchesPlayedByCity(matchesPlayedByCity) {
  const seriesData = [];
  for (let name in matchesPlayedByCity) {
    seriesData.push([name, matchesPlayedByCity[name]]);
    
  }


//   Highcharts.chart('matches-played-by-city', {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: 0,
//         plotShadow: false
//     },
//     title: {
//         text: 'Total Matches<br>Played<br>In Cities',
//         align: 'center',
//         verticalAlign: 'middle',
//         y: 60
//     },
//     tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     accessibility: {
//         point: {
//             valueSuffix: '%'
//         }
//     },
//     plotOptions: {
//         pie: {
//             dataLabels: {
//                 enabled: true,
//                 distance: -50,
//                 style: {
//                     fontWeight: 'bold',
//                     color: 'white'
//                 }
//             },
//             startAngle: -90,
//             endAngle: 90,
//             center: ['50%', '75%'],
//             size: '110%'
//         }
//     },
//     series: [{
//         type: 'pie',
//         name: 'Cities',
//         innerSize: '50%',
//         data: seriesData
//     }]
// });

Highcharts.chart("matches-played-by-city", {

  chart: {
      styledMode: false // do not make it true it will make screen dark
  },

  title: {
      text: "Total Matches<br>Played<br>In Cities"
  },

  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },

  series: [{
      type: 'pie',
      allowPointSelect: true,
      keys: ['name', 'y', 'selected', 'sliced'],
      data: seriesData
      ,
      showInLegend:true
  }]
});
            

}