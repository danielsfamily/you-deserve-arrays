/******************
 * YOUR CODE HERE *
 ******************
function  getFirstItem (arr) {
  return arr [0];
}
console.log

function getFirstItem (arr) {
  return arr[arr.legnth-1];
}

function getindex3 (arr) {
  return [3];
}

function isLongList (arr) {
  if (arr.length > 10) {
    return true;
  } else {
    return false;
  }
}

function firstItemIsNumber (arr) {
  if (typeof arr [0]  ==="number") {
  return true;
  } else {
  return false;
  }
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
