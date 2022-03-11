// ----
// -- 1
// ----
function getArrNumberOfTrueValues(arr) {
  let trueValues = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      trueValues += 1;
    }
  }

  return trueValues;
}

console.log(getArrNumberOfTrueValues([true, false, true, false, true]));

// ----
// -- 2
// ----
function arrayOfMultiples(num, length) {
  let starter = 0;
  let numbersArr = [];

  for (let i = 0; i < length; i++) {
    numbersArr.push((starter += num));
  }

  return numbersArr;
}

console.log(arrayOfMultiples(17, 6));

// ----
// -- 3
// ----
function findNemo(str) {
  let nemo = 'Nemo';
  let arr = [''];
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === ' ') {
      j++;
      arr.push('');
    } else {
      arr[j] += str.charAt(i);
    }
  }

  if (arr.includes(nemo)) return `I found ${nemo} at ${arr.indexOf(nemo) + 1}`;
  else return `I can't find ${nemo} :(`;
}

let randomStr = 'I am finding Nemo !';
console.log(findNemo(randomStr));

// ----
// -- 4
// ----
function ascDesNone(arr, order) {
  let newArr = [];
  order = order.toLowerCase();

  if (order === 'asc' || order === 'des') {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          newArr = arr[j];
          arr[j] = arr[i];
          arr[i] = newArr;
        }
      }
    }
  }

  if (order === 'asc') return arr;
  else if (order === 'des') return arr.reverse();
  else return arr;
}

let randomArr = [7, 8, 11, 66, 0, -5, -10, -15];
console.log(ascDesNone(randomArr, 'Asc'));

// ----
// -- 5
// ----
function emphasise(str) {
  let strArr = [''];
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === ' ') {
      j++;
      strArr.push('');
    } else {
      strArr[j] += str.charAt(i);
    }
  }

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase();
  }

  return strArr.join(' ');
}

console.log(emphasise('hello world'));
