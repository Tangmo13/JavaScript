function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 === 0) {
    return false
  } else if (flower1 % 2 !== 0 && flower2 % 2 !== 0){
    return false
  }
  return true
}

//* ChatGPT adjusted from above
function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0);
}

//! another ways
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

//? or
function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1
}

console.log(lovefunc(2, 4))
