function randomNumberExclusive(min, max) {
  min = Math.ceil(min)+1;
  max = Math.floor(max)-1;
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

module.exports = randomNumberExclusive;
