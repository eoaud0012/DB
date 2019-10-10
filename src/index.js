import "./styles.css";

document.getElementById("app").innerHTML = `
12345
`;

// var y = [3, 6, 9];
// var x = 30;

// console.log(typeof y, typeof x, x, y);

// for (var i = 0; i < 10; i++) {
//   //console.log(i);
// }
// var x = 3;
// var y = 3;

// var x = "33";
// var y = "33";
// if (y === x) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// if ([] == undefined) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// function hello(name) {
//   return "hello" + name;
// }

// console.log(hello("한양대"));

//오브젝트 지정
var o = {
  key1: "value1",
  key2: "value2"
};
console.log(o, o["key1"]);

var form = document.getElementById("form");
// console.log(form);
console.dir(form);

// 자바스크립트는 함수를 변수처럼 씀

function hello(name) {
  return "hello" + name;
}
hello("asdf");
var hello2 = hello;
console.log(typeof hello2, hello2);

// function
// function hello() {}
// <constructor>: "Function"
// hello2 가 hello라는 함수 그 자체가 된 것

console.log(typeof (hello2("a"), hello2("a")));
