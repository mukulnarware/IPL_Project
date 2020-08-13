
const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
/////

//const yearWiseBowler = require("./ipl/yearWiseBowler");

//////
const extraRunByTeam = require("./ipl/extraRunByTeam");
/////
const economicBowler = require("./ipl/economicBowler");
/////
const matchesPlayedByCity = require("./ipl/matchesPlayedByCity");
/////
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const { fileURLToPath } = require("url");
const { match } = require("assert");
////

const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
////Path to find  the filtered data of  "matches won by each team"  from data1.json file.
const JSON_OUTPUT_FILE_PATH1 = "./public/data1.json";

//// Path to find  the filtered data of  "Extra-Runs conceded by each team" In 2016 form "data2.json" file 
const JSON_OUTPUT_FILE_PATH2 = "./public/data2.json";

////Path to find  the filtered data of  "Economic Bowler"  of 2015 from "data3.json" file
const JSON_OUTPUT_FILE_PATH3 = "./public/data3.json";
// Path to find filtered data of "matches Played In cities" of IPL from data4.json file
const JSON_OUTPUT_FILE_PATH4 = "./public/data4.json";
//////path to find year wise top ten economical bowler by user input
const JSON_OUTPUT_FILE_PATH5 = "./public/data5.json";
const JSON_OUTPUT_FILE_PATH6= "./public/data6.json";




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





///////////////////
function main() {
  ////////////////////////////////////////////////
  csv()

    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result = matchesPlayedPerYear(matches);
      let result1 = matchesWonByEachTeam(matches);
      let result4 = matchesPlayedByCity(matches);

      saveMatchesPlayedByCity(result4);
      saveMatchesPlayedPerYear(result);
      saveMatchesWonByEachTeam(result1);
    });
  ///////////////////// 
  csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries => {

      csv()
        .fromFile(MATCHES_FILE_PATH)
        .then(matches => {
          let ID_Of2016 = {};
          let ID_Of2015 = [];
          /////////////////////// //////userInput///////////

          // let ID_OfSeason = [];      console.log("year***"+year);

          // for (let match of matches) {

          //   if (match.season == year) {
          //     if (!ID_OfSeason.includes(match.id)) { ID_OfSeason.push(match.id); }
          //   }

          // }
          // //  alert('you have passed:' + year);

          // let result5 = yearWiseBowler(deliveries, ID_OfSeason);    //Here ID_OfSeason  is an array            
          // saveEconomicBowlerByUserInput(result5);

          ///////////////////////////////////

          for (let match of matches) {

            if (match.season == "2015") {
              if (!ID_Of2015.includes(match.id)) { ID_Of2015.push(match.id); }
            }
            if (match.season == "2016") {
              if (!ID_Of2016[match.id]) { ID_Of2016[match.id] = match.winner; }

            }



          }


          let result3 = economicBowler(deliveries, ID_Of2015);    //Here ID_Of2015   is an array            
          let result2 = extraRunByTeam(deliveries, ID_Of2016);  //Here ID_Of2016  is an object
          saveExtraRunByTeam(result2);
          saveEconomicBowler(result3);

        });


    });

}


//////////////////////////////////////////////
// saving here the data of economic bowler by user input

function saveEconomicBowlerByUserInput(result6) {  //console.log(result5);
  const jsonData = {
    yearWiseBowler: result6
  };

  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH6, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

module.exports=saveEconomicBowlerByUserInput;

///////////////////////////////////////////////////
// saving here matches played By city In IPL in data4.json
function saveMatchesPlayedByCity(result4) {
  const jsonData = {
    matchesPlayedByCity: result4
  };

  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH4, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}




////////////////////////////////////////////////////
// saving here economic Bowler of 2015 in IPL into data3.json file

function saveEconomicBowler(result3) {
  const jsonData = {
    economicBowler: result3
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH3, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}



////////////////////////////////////////////////////////////////
// Saving here extra runs conceded by each team In 2016 into file data2.json;
function saveExtraRunByTeam(result2) {
  const jsonData = {
    extraRunByTeam: result2
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH2, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}



/////////////////////////////////////////////////////
// Saving here Matches played  per year data into data.json file
function saveMatchesPlayedPerYear(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
//////////////////////////////////////////////////////
// Saving here  matches won by Each team into file Data1.json
function saveMatchesWonByEachTeam(result1) {
  const jsonData = {
    matchesWonByEachTeam: result1
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH1, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}


main();
