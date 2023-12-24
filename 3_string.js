// Palindrome string
const case1 = (str) => {
    let result = 'NO'
    const target = str.toLowerCase();
    if(target.split().reverse().join('') === target) result='YES'
    return result;
}
// Palindrome
const case2 = (str) => {
    let result = 'NO';
    let target = str.toLowerCase().replace(/[^a-z]/g,'');
    if(target.split().reverse().join('') === target) result = 'YES';
    return result;
}
// Extract only numbers
const case3 = (str) => {
    return parseInt(str.replace(/[^0-9]/g,''));
}

const case4 = (arr) => {
const target = arr.split(' ')[0];
const alph = arr.split('')[1];
const result = Array(target.length).fill(0);
 // const temp2 = Array(target.length).fill(0);
 let cnt = 0;
 for (let i=0; i<target.length; i++) {
    if(target[i] !== alph) {
        cnt++;
        result[i] = cnt;
    } else cnt=0;
 }
 // console.log(result)
 for(let i=target.length-1; i>=0; i--) {
    if(target[i] !== alph) {
        cnt++;
        //temp2[i] = cnt;
        result[i] = Math.min(result[i], cnt)
    } else cnt=0;
 }
 return result;
}
// String compression
const case5 = (str) => {
    let result = str[0];
    let cnt = 1;
    for(let i=1; i<str.length; i++) {
        if(str[i-1] === str[i]) cnt++;
        else {
            if(cnt>1) result += String(cnt);
            result += str[i];
            cnt = 1;
        }
    }
    return result;
}

console.log(case5('KKHSSSSSSSE'));
// console.log(case4('teachermode e'));
// console.log(case4('1 0 1 2 1 0 1 2 2 1 0'));
// console.log(case3('g0en2T0s8Soft'));
// console.log(case2('found7, time: study; Yduts; emit, 7Dnuof'));
// console.log(case1('level'));
// console.log(case1('abcba'));
// console.log(case1('teeT'));
// console.log(case1('gooG'));