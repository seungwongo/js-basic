//함수

//
//n1 -
//n2 - 
//return 
function add(n1, n2) {
  return n1 + n2;
}

var sum = 10 + 2;
var sum = 13 + 4;

function tax(amount) {
  return amount * 0.12;
}



// function calculator(n1, n2) {
//   let y = n1 + n2;
//   return y;
// }

// function getFullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }

// getFullName("John", "Doe");

// let sum = add(10, 4);
// console.log(sum);

// console.log(add(12, 7));
// console.log(add(43, 3));

// console.log(10 + 4);
// console.log(12 + 7);








//문제1. firstName과 lastName을 입력받고 fullName을 반환하는 함수



//문제2. 음료자판기 문제를 함수로. 사용자가 넣은 돈은 파라미터로 받고
//구매할 수 있는 음료 리스트 반환하기
//function showProductList(inputCoin){

// }

//함수를 선언합니다.
//함수 이름은 getProductList
//파라미터는 inputCoin
//inputCoin으로 구매할 수 있는 음료 목록을 productList 배열에서 추출해서
//새로운 배열로 만들어서
//그녀석을 return 해주세요.
//받는 쪽에서는 var,let outputList = 
//console.table(outputList);


var productList = [{
    name: "솔의눈",
    price: 700
  },
  {
    name: "커피",
    price: 700
  },
  {
    name: "파워레이드",
    price: 1200
  },
  {
    name: "오렌지",
    price: 1000
  },
  {
    name: "보리차",
    price: 1200
  },
  {
    name: "밀키스",
    price: 800
  }
];
// var product = {
//     name: "파워레이드",
//     price: 1200
//   };

function getProductList(inputCoin) {
  var outputList = [];
  for (var product of productList) {
    if (product.price <= inputCoin) {
      outputList.push(product);
    }
  }

  // console.log(outputList);

  return outputList;
}



let output = getProductList(1000);
// console.table(output);

// var x = 5;
// var z = x + y;
// var y =3;

// function getProductList(inputCoin) {
//   let outputList = [];
//   for (let product of productList) {
//     if (product.price <= inputCoin) {
//       outputList.push(product);
//     }
//   }

//   return outputList;
// }

// var getProductList = function (inputCoin) {
//   let outputList = [];
//   for (let product of productList) {
//     if (product.price <= inputCoin) {
//       outputList.push(product);
//     }
//   }

//   return outputList;
// };





// let getProduct = (inputCoin) => productList.filter(p => p.price <= inputCoin);
// console.table(getProduct(1000));



//문제3. 사용자 리스트에서 gender 파라미터를 받고 male, female 해당하는
//데이터만 반환하기
//함수명 getUserList
//파라미터명 gender
//return outputUserList
//호출 getUserList("male");
//호출 getUserList("female"); 





//문제4. 계산기 만들기. 숫자 2개에 대한 더하기/빼기/곱하기/나누기를 수행하는 함수
//파라미터로 숫자 2개와 operator인 +,-,*,/ 를 입력받고 계산 수행
//함수명 calculator
//파라미터명 n1, n2, operator
//return 계산된 값

/**
 * 덧셈 함수
 * @param {number} n1  
 * @param {number} n2 
 * @returns n1 + n2
 */
function add(n1, n2) {
  return n1 + n2;
}

/**
 * 뺄셈 함수
 * @param {number} n1 
 * @param {number} n2 
 * @returns n1 - n2
 */
function minus(n1, n2) {
  return n1 - n2;
}

/**
 * 곱셈 함수
 * @param {number} n1 
 * @param {number} n2 
 * @returns n1 * n2
 */
function multiple(n1, n2) {
  return n1 * n2;
}

/**
 * 나눗셈 함수
 * @param {number} n1 
 * @param {number} n2 
 * @returns n1 / n2
 */
function divide(n1, n2) {
  return n1 / n2;
}

/**
 * 사칙 연산 함수
 * @param {number} n1 
 * @param {number} n2 
 * @param {string} operator 
 * @returns 사칙연산 결과
 */
function calculator(n1, n2, operator) {
  if (operator == "+") {
    return add(n1, n2);
  } else if (operator == "-") {
    return minus(n1, n2);
  } else if (operator == "*") {
    return multiple(n1, n2);
  } else if (operator == "/") {
    return divide(n1, n2);
  }
}

function calculator2(n1, n2, operator) {
  //n1 + operator + n2
  //4+7
  // return eval("4+7");
  // return 4+7;
}

// add(4,7);
console.log(calculator(4, 7, "+"));
console.log(calculator(4, 7, "*"));

/**
 * 
 * @param {*} intervalDay 
 * @param {*} format 
 * @returns 
 */
function getIntervalDate(intervalDay, format) {
  var now = new Date();
  var day1 = 60 * 60 * 24 * 1000; //하루를 milliseconds로
  var d = new Date(now.getTime() + (day1 * intervalDay)); //
  var year = d.getFullYear(); //년도
  var month = d.getMonth() + 1; //월의 인덱스가 0부터 시작하므로 1을 더함
  var day = d.getDate();

  return format.replace("YYYY", year).replace("MM", month.toString().padStart(2, 0)).replace("DD", day);
}


var nums = [3, 2, 5, 4, 1, 7];

/**
 * 4개
 * 첫번째 - total 
 * 두번째 - 배열의 현재 요소
 * 세번째 - index 번호
 * 네번째 - 전체 배열 
 */
// var total = 0;
// 


// var total = 0;
// for(var n of nums){
//   total += n;
// }

// function sum(total, n) {
//   total += n;
// }

var sum = function (total, n) {
  total += n;
}

//   sum();

// nums.reduce(function (total, n) {
//   total += n;
// });

var nums = [3, 2, 5, 4, 1, 7];

// function reduce(sum) {
//   var total = 0;
//   for(var i=0 ; i<nums.length ; i++) {
//     sum(total, n);
//   }
// }

// function (total, n) {
//   total += n; //0, 3, total = 3;, 5
// }

// reduce(function (total, n) {
//   total += n;
// });

// console.log(nums.reduce());






function rspPlayer(userRsp) {
  const rsp = ["가위", "바위", "보"];
  const playerRsp = rsp[getRandomInteger(0, 2)];

  if (userRsp == playerRsp) {
    return {
      "userRsp": userRsp,
      "playerRsp": playerRsp,
      "winner": 0
    };
  } else if (userRsp == "가위") {
    if (playerRsp == "보") {
      return {
        "userRsp": userRsp,
        "playerRsp": playerRsp,
        "winner": 1
      };
    } else {
      return {
        "userRsp": userRsp,
        "playerRsp": playerRsp,
        "winner": -1
      };
    }
  } else if (userRsp == "바위") {
    if (playerRsp == "가위") {
      return {
        "userRsp": userRsp,
        "playerRsp": playerRsp,
        "winner": 1
      };
    } else {
      return {
        "userRsp": userRsp,
        "playerRsp": playerRsp,
        "winner": -1
      };
    }
  } else if (userRsp == "보") {
    if (playerRsp == "바위") {
      return {
        "userRsp": userRsp,
        "playerRsp": playerRsp,
        "winner": 1
      };
    } else {
      return {
        "userRsp": userRsp,
        "playerRsp": playerRsp,
        "winner": -1
      };
    }
  }
}

function rspPlayer2(userRsp) {
  const rsp = ["가위", "바위", "보"];
  const playerRsp = rsp[getRandomInteger(0, 2)];
  const winValue = {
    "가위": "보",
    "바위": "가위",
    "보": "바위"
  };

  return {
    "userRsp": userRsp,
    "playerRsp": playerRsp,
    "winner": (userRsp == playerRsp) ? 0 : (winValue[userRsp] == playerRsp) ? 1 : -1
  }
}