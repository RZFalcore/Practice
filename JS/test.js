// const inputStr = "asdsfqweweeeeeeefsassxfxqsddsddd";

// function zip(str) {
//   let result = "";
//   for (let i of str) {
//     if (!result.includes(i)) {
//       let match = str.split("").filter((x) => x === i);
//       result += i + match.length;
//     }
//   }
//   return console.log(result);
// }

// zip(inputStr);
//--------------------------------------------------------------------------------------------
// function rand16() {
//   console.log("#" + Math.floor(Math.random() * 2 ** 24).toString(16));
// }

// rand16();
//--------------------------------------------------------------------------------------------

function digital_root(n) {
  let sumN = String(n).split("");

  do {
    sumN = String(
      sumN.reduce((acc, number) => {
        console.log("acc: ", acc);
        return (acc += Number(number));
      }, 0)
    ).split("");
  } while (sumN.length > 1);

  console.log(sumN);
  return sumN;
}

// digital_root(9877);
// digital_root(9877989);

// console.log(0 % 2, 4 % 2);

//--------------------------------------------------------------------------------------------
function findOutlier(integers) {
  const oddInt = [];
  const evenInt = [];
  const slicedInt = integers.slice(0, 3);

  for (let i of slicedInt) {
    if (i % 2 === 0) {
      evenInt.push(i);
    } else {
      oddInt.push(i);
    }
  }

  if (oddInt.length < evenInt.length) {
    return integers.find((n) => n % 2 === 1 || n % 2 === -1);
  } else if (oddInt.length > evenInt.length) {
    return integers.find((n) => n % 2 === 0);
  }
}

// console.log(findOutlier([1, 1, 0, 1, 1]));
// console.log(findOutlier([0, 0, 3, 0, 0]));
// console.log(0 % 2);
//--------------------------------------------------------------------------------------------

function spinWords(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.length >= 5 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

// console.log(spinWords("Hey fellow warriors"));
