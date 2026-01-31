function getSafetyScore({ crimeCount, isNight, lighting }) {
  let score = 0;

  score += crimeCount * 2;
  score += isNight ? 5 : 0;
  score += lighting < 3 ? 3 : 0;

  return score;
}

module.exports = { getSafetyScore };
