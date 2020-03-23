function matchesPlayedPerYear(matches) {
  const result = {};
  for (let match of matches) {
    const season = match.season;
    if (result[season]) {
      result[season] += 1;
    } else {
      result[season] = 1;
    }
  }
  return result;
}

module.exports = matchesPlayedPerYear;
