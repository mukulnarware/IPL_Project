function extraRunByTeam(deliveries,ID_Of2016){
    const result= {};
    for (let delivery of deliveries) 
    
    {
       // const bTeam = delivery.batting_team;
        const xRun =  parseInt(delivery.extra_runs);
                if (xRun>0  && (ID_Of2016[delivery.match_id]) ) {

                    if(result[ID_Of2016[delivery.match_id]]) {
                    result[ID_Of2016[delivery.match_id]] += xRun;
                    }else{
                        result[ID_Of2016[delivery.match_id]]=0;
                        result[ID_Of2016[delivery.match_id]] +=xRun;
                    }
                    
                } 
      }
    //    console.log(result);
       return result;
    }
    
 module.exports = extraRunByTeam;   