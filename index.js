

var katzDeli = [];


function takeANumber (katzDeli, name) {
  katzDeli.push(name)
  return katzDeli.length + 1
}

function NowServing () {
  if (katzDeli.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    
    return katzDeli[-1]
  }
}

function currentLine (katzDeli) {
  if (katzDeli.length > 0) {
    var out = 'The line is currently: ';
    for (var i = 0; i < katzDeli.length; i++) {
      out += `${i+1}. ${katzDeli[i]}`
      if (i < katzDeli.length) {
        out += ', '
      }
    }
  } else {
    return "The line is currently empty."
  }

}
