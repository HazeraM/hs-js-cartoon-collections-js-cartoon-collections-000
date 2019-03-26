var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]

function dwarfRollCall(dwarves) {
 var newStr = "";
 dwarves.forEach(function(name, i) {
   newStr += (i+1 + ". " + name +" ");
 });
 return newStr;
}

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(function(word) {
    return word.toUpperCase() + "!";
  });
}

function longPlaneteerCalls(words) {
  for (var i = 0; i<words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  for (var i =0; i<foods.length; i++) {
    if (foods[i] == "cheddar"
    || foods[i] == "gouda"
    || foods[i] == "camembert") {
      return foods[i]
    }
  }
  return "no cheese!"
}


function wordsB (words) {
  var newArray = []
  for (var i =0; i<words.length; i++) {
    if (words[i].startsWith("B")) {
      newArray.push(words[i])
    }
  } 
  return newArray; 
}