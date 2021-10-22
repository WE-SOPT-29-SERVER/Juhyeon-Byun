const members = require("./members");

console.log("서버 파트 총 인원: " + members.length);
let groupNum = Math.ceil(members.length / 4);
console.log("총 그룹 수(최대 4명): " + groupNum);

let ybList = []; // yb 리스트
let obList = []; // ob 리스트
members.forEach(member => {
    if (member.group === "YB") { // YB인 경우
        ybList.push(member.name);
    }
    else { // OB인 경우
        obList.push(member.name);
    }
});

function shuffle(array) { array.sort(() => Math.random() - 0.5); } // 리스트 섞기

shuffle(ybList); // yb 21명 무작위로 섞기
shuffle(obList); // ob 16명 무작위로 섞기

// ob 먼저 한 명씩 배치, 이후 yb 배치
let seminarGroup = [];
for (let i = 0; i < groupNum; i++) {
    seminarGroup.push([]);
}

const grouping = (groupList) => { // 팀 배정
    for (let i = 0; i < groupNum; i++) { 
        if (groupList.length === 0) {
            break;
        }
        if (seminarGroup[i].length === 4) { // 최대 4명
            continue;
        }
        seminarGroup[i].push(groupList.pop());
        if (i === (groupNum - 1)) { i = -1; }
    }
};

grouping(obList);
grouping(ybList);

console.log(seminarGroup);