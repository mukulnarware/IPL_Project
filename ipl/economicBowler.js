function economicBowler(deliveries, ID_Of2015) {

    const result = {};
    const bowlers = {};
    const temp = {};
    let flag = [];

    const listOfBowlers = {};
    for (let delivery of deliveries) {
        const totalRuns = parseInt(delivery.total_runs);
        if (ID_Of2015.includes(delivery.match_id)) {  ///////// In temp it stored total balls 

            if (temp[delivery.bowler]) {
                temp[delivery.bowler] += 1;

            } else {
                temp[delivery.bowler] = 1;
            }
            ////////////to find total runs they conceded stored IN  Bowlers obj


            if (bowlers[delivery.bowler]) {
                bowlers[delivery.bowler] += totalRuns;
            } else {
                bowlers[delivery.bowler] = 0;
                bowlers[delivery.bowler] += totalRuns;
            }

        }
    }
    for (let run in temp) { temp[run] = (temp[run]) / 6; }

    for (let name in temp) {

        if (!result[name]) {

            result[name] = bowlers[name] / temp[name];
            flag.push(result[name]);
        }
    }
    flag.sort((a, b) => a - b);
    flag.length = 10;
    
    
    for (let rate of flag) {
        for (let x in result) {
            if (result[x]==rate){
                listOfBowlers[x]=rate;
            }

            }
    }

    //console.log(listOfBowlers);
    return listOfBowlers;

}


module.exports = economicBowler;