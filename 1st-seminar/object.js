/* Object 생성자 함수 */
const person = new Object(); // 빈 객체 생성

//프로퍼티 추가
person.name = "이름"; // 점표기법 접근
person.part = "Server";
person["group"] = "YB"; // 브라켓 표기법 접근
person.sayHello = function () {
  console.log(`안녕하세요 ${this.name} 입니다.`);
};

console.log(typeof person);
console.log(person);

person.sayHello();

console.log("=====================");

/* 객체 리터럴 (가장 일반적인 자바스크립트의 객체 생성 방식) */
const emptyObject = {}; // 빈 객체 생성
console.log(typeof emptyObject); // object

const animal = {
  animalType: "dog",
  animalName: "뽀삐",
  animalFriends: ["코코", "초코", "쿠키"],
//   bark: function () {
//     console.log(`${this.animalName}: 멍멍`);
//   },
//   thisFriends: function () { // function안에 this가 있을 때 화살표 함수 쓰면 에러남
//     this.animalFriends.forEach(friend => {
//       console.log(`${this.animalName}의 친구: ${friend}`);
//     });
    //   },
    bark: () => { // function 제거
        console.log(`${this.animalName}: 멍멍`);
    },
    thisFriends: (animalFriends) => { // 객체 내에 있는 프로퍼티 들에 대해 화살표함수 쓰려면 파라미터로 받아오면 됨
        animalFriends.forEach(friend => {
            console.log(`${animalName}의 친구: ${friend}`); // this.animalName도 animalName으로 바꿔야함
        });
    },
};
// 객체안에서 메소드를 사용할 때는 함수 선언식을 쓰는 것이 정신건강에 이로울 수 있음..

console.log(animal);
animal.bark();
animal.thisFriends();