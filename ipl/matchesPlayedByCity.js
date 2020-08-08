function  matchesPlayedByCity(matches){

    const result = {};
    for (let match of matches) {
      const city = match.city;
      if (result[city]) {
        result[city] += 1;
      } else {
        result[city] = 1;
      }
    } 
    return result;


}

module.exports=matchesPlayedByCity;