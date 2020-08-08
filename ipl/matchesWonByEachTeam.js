function matchesWonByEachTeam(matches){
    const result= {};
    for (let match of matches) {
        const winner = match.winner;
        if (result[winner]) {
          result[winner] += 1;
        } else {
          result[winner] = 1;
        }
      }
      return result;
    }
    
 module.exports=matchesWonByEachTeam;   