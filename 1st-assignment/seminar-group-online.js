// JSON 객체
// const groupOnline = {
//     slogan: "We are 1st-seminar online group.",
//     name: ["조재호", "변주현", "주어진사랑", "조찬우"],
//     home: ["경기도 남양주", "서울시 중랑구", "서울시 용산구", "성남시 분당구"],
//     age: [24, 22, 23, 24],
//     hobby: ["surf", "develop", "sleep with sun", "basketball"],
//     printGroup: () => {
//         console.log(slogan);
//     },
// };

// JSON 배열
const groupOnline = [
    { name: "조재호", home: "경기도 남양주", age: 24, hobby: "surf" },
    { name: "변주현", home: "서울시 중랑구", age: 22, hobby: "develop" },
    { name: "주어진사랑", home: "서울시 용산구", age: 23, hobby: "sleep with sun" },
    { name: "조찬우", home: "성남시 분당구", age: 24, hobby: "basketball" },
    { name: "구건모", home: "어딘가", age: "몇", hobby: "develop" },
    { name: "강한희", home: "어딘가", age: "몇", hobby: "develop" },
]

console.log("안녕하세요. 저희는 1차 세미나 온라인조입니다. 저희 조는")
groupOnline.forEach(person => {
   console.log(
       "취미가 " + person.hobby + "이고, " +
       person.home + "에 사는 " +
       person.age + "살 " +
       person.name + ","
   )
});
console.log("총 " + groupOnline.length + "명 입니다.")