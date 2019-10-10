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
// var o = {
//   key1: "value1",
//   key2: "value2"
// };
// console.log(o, o["key1"]);

// var form = document.getElementById("form");
// // console.log(form);
// console.dir(form);

// // 자바스크립트는 함수를 변수처럼 씀

// function hello(name) {
//   return "hello" + name;
// }
// hello("asdf");
// var hello2 = hello;
// console.log(typeof hello2, hello2);

// // function
// // function hello() {}
// // <constructor>: "Function"
// // hello2 가 hello라는 함수 그 자체가 된 것

// console.log(typeof (hello2("a"), hello2("a")));

// var form = document.getElementById("form");
// var nameinput = document.getElementById("nameinput");

// console.log(nameinput);
// function hello(e) {
//   e.preventDefault();
//   console.log(e.target["name"].value);
//   console.log(e.target["password"].value);
// }
// form.onsubmit = hello;

// 저장만 하면 아무것도 실행이 안되나
// 아이디나 패스워드를
// 보낼때마다 콘솔에 form이 등장

// button type이 submit
// submit을 누르면 from이 제출되는
// 이벤트를 발생
// form.onsubmit = hello;
// 이 코드때문에 뜨는 거

// 익명함수. 동작하고 메모리에 남아있지 않음.
// 남아있을 필요가 없다! 익명함수를 여러 개 쓰면
// 코드가 헷갈린다.
// form.onsubmit = function(e) {
//   e.preventDefault();
//   console.log(e.target["name"].value);
//   console.log(e.target["password"].value);
// };

var form = document.getElementById("form");
var nameinput = document.getElementById("nameinput");

// function greet(name) {
//   console.log("Hello" + name);
// }
// setTimeout(greet, 2000);
// // 2초 뒤에 Helloundefined 가 등장

// setTimeout(function() {
//   console.log("hello");
// }, 2000);

// console.log("Hello2");
// // hello가 먼저 실행되지만, hello2가 먼저
// // 결과가 나옴

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log("i = " + i);
//   }, 1000 * i);
// }
// 0 1 2 3 4 5 가 아니고
// 5 5 5 5 5 5 가 나옴

// console.log(i);
// 원래 i는 다른 언어에서
// 지역변수 성격 때문에
// 문법에 맞지 않지만
// 자바 스크립트에서는 가능하다.

// for (let i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log("i = " + i);
//   }, 1000 * i);
// }

// 따라서 변수 선언은 let으로
// 하는 것이 정신 건강에 좋다.
// 아직 var가 쓰인 문법이
// 인터넷에 많으므로 걸어서 보길..
// 현재는 var가 전역변수 쓸 때만
// 쓰고 현재는 잘 안 쓴다.
// 옛날 시스템 환경에서 let이 먹히지
// 않을 경우도 있딴다.
// 위와 같은 코딩 패턴이 많다.

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log("i = " + i);
//   }, 1000 * i);
// }

// 위 코드와 똑같이 동작

// var greet = () => {
//   console.log("hello");
// };

// var greet2 = function() {};

// arrow function 구문
// () -> 인자 들어가는 곳
// 중괄호 안에 실행할 코드 영역
// 그냥 함수 선언문이라는 거를 알아
// 두면 됨
