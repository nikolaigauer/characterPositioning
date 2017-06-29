function letterPosition(words) {

var positionCounts = {};

for (var i = 0; i < words.length; i++) {
  var letter = words[i]
    if (letter === ' ') {
    continue;
    }
    if (positionCounts[letter] === undefined) {
       positionCounts[letter] = [i]
    } else {
      positionCounts[letter].push(i);
      }
    }
    console.log(positionCounts)
}
console.log(letterPosition("LiTTle BiG")) // logs any string to the console, separated and lower case

