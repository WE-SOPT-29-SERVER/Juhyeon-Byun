const members = [
    { name: "강한희", part: "Server", group: "OB" },
    { name: "고성용", part: "Server", group: "OB" },
    { name: "구건모", part: "Server", group: "YB" },
    { name: "권세훈", part: "Server", group: "YB" },
    { name: "김영권", part: "Server", group: "YB" },
    { name: "김은지", part: "Server", group: "YB" },
    { name: "김진욱", part: "Server", group: "YB" },
    { name: "김희빈", part: "Server", group: "OB" },
    { name: "남지윤", part: "Server", group: "YB" },
    { name: "문규원", part: "Server", group: "YB" },
    { name: "박나희", part: "Server", group: "OB" },
    { name: "박정현", part: "Server", group: "YB" },
    { name: "박현지", part: "Server", group: "OB" },
    { name: "변주현", part: "Server", group: "OB" },
    { name: "서호영", part: "Server", group: "OB" },
    { name: "설지원", part: "Server", group: "YB" },
    { name: "손시형", part: "Server", group: "YB" },
    { name: "안준영", part: "Server", group: "OB" },
    { name: "장서현", part: "Server", group: "OB" },
    { name: "오예원", part: "Server", group: "OB" },
    { name: "이다은", part: "Server", group: "OB" },
    { name: "이동근", part: "Server", group: "YB" },
    { name: "이솔", part: "Server", group: "OB" },
    { name: "이승헌", part: "Server", group: "YB" },
    { name: "이정은", part: "Server", group: "YB" },
    { name: "이제준", part: "Server", group: "YB" },
    { name: "정설희", part: "Server", group: "OB" },
    { name: "조윤서", part: "Server", group: "OB" },
    { name: "조재호", part: "Server", group: "YB" },
    { name: "조찬우", part: "Server", group: "YB" },
    { name: "주어진사랑", part: "Server", group: "YB" },
    { name: "주효식", part: "Server", group: "YB" },
    { name: "채정아", part: "Server", group: "OB" },
    { name: "최영재", part: "Server", group: "OB" },
    { name: "최유림", part: "Server", group: "YB" },
    { name: "최진영", part: "Server", group: "YB" },
    { name: "허유정", part: "Server", group: "YB" },
];

console.log("서버 파트 총 인원: " + members.length);
let groupNum = Math.ceil(members.length / 4);
console.log("총 그룹 수(최대 4명): " + groupNum);

let ybNum = 0; // yb 총 인원
let obNum = 0; // ob 총 인원
let ybList = []; // yb 리스트
let obList = []; // ob 리스트
members.forEach(member => {
    if (member.group === "YB") { // YB인 경우
        ybNum++;
        ybList.push(member.name);
    }
    else { // OB인 경우
        obNum++;
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

for (let i = 0; i < groupNum; i++) { // ob 팀 배정
    if (obList.length === 0) {
        break;
    }
    seminarGroup[i].push(obList.pop());
    if (i === (groupNum - 1)) { i = -1; }
}

for (let i = 0; i < groupNum; i++) { // yb 팀 배정
    if (ybList.length === 0) {
        break;
    }
    if (seminarGroup[i].length === 4) {
        continue;
    }
    seminarGroup[i].push(ybList.pop());
    if (i === (groupNum - 1)) { i = -1; }
}

console.log(seminarGroup);