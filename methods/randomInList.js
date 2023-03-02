function randomInList(list) {
  var randomList = list[Math.floor(Math.random() * list.length)];
  return randomList;
}

module.exports = randomInList;
