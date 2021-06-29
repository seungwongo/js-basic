//정규식
//regular expression


// var txt = "Hello World! world!";

// var regexp = /World/gi;

// console.log(txt.replace(regexp, "Jeremy"));


// var str = "123abc456kkk";
// var regexp1 = /[0-9]/g;
// var result = str.match(regexp1);
// console.log(result);

// var str2 = "re, green, red, gree, gen, red, yellow, blue";
// var regexp2 = /(red|green)/g;
// var result2 = str2.match(regexp2);
// console.log(result2);

// var tel = "010-3008-9614";
// //010 숫자 - 4자리 숫자 - 4자리
// var regexp3 = /^(010)-\d{4}-\d{4}/;
// console.log(regexp3.test(tel));

//seungwon.go@gmail.com
//aaa234@abc.co.kr
//afef@foeof
//e
var regexp4 = /^(\w+\d*)+@\w+(\.\w{2,3})+$/;

console.log(regexp4.test("seun3333@gmail.com"));