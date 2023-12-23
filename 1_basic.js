// 3 int smallest than 100
const case1 = (a,b,c) => {
    let result;
    if(a<b) result = a;
    else result = b;
    if(c<result) result = c;
    return result;
};
// possible to make triangle?
const case2 = (a,b,c) => {
    let result = 'NO';
    const sum = a+b+c;
    const max = Math.max(a,b,c);
    if(sum - max > max) result = 'YES';
    return result;
};
// dozen pencil
const case3 = (n) => {
    let result = Math.ceil(n/12);
    return result;
};
// sum 1 to n 
const case4 = (n) => {
    let result = n;
    for(let i=1; i<n; i++) {
        result += i;
    }
    return result;
};
// Find the minimum value
const case5 = (arr) => {
    return Math.min(...arr);
}
// sum of odd numbers, minimum of odd numbers
const case6 = (arr) => {
    let result;
    let odd = [];
    for(let n of arr) {
       if(n%2 === 1) odd.push(n);
    }
    let sum = odd.reduce((a,b) => a+b);
    let min = Math.min(...odd);
    result = sum + '\n' + min;
    return result;
}
// Number of Violating Vehicles
const case7 = (n, arr) => {
    return arr.filter(el => el%10 === n).length;
}
// Sum of the Seven Dwarfs heights
const case8 = (arr) => {
 const result = arr;
 let sum = arr.reduce((a,b) => a+b);
 let flag = 0;
 // console.log(sum)
 for(let i=0; i<arr.length-1; i++) {
    for(let j=i+1; j<arr.length; j++) {
        if(sum - (arr[i] + arr[j]) === 100) {
            arr.splice(j, 1);
            arr.splice(i, 1);
            flag = 1;
            break;
        }
    }
    if(flag === 1) break;
 }
 return result;
}
// A to #
const case9 = (str) => {
    return str.replace(/A/g, '#');
}
// Find Alphabet
const case10 = (str, alphabet) => {
    return str.split(alphabet).length - 1;
}
// Find capital letters
const case11 = (str) => {
    let result = 0;
    for(let s of str) {
        //if(s === s.toUpperCase()) result++;
       if(s.charCodeAt() >= 65 && s.charCodeAt() <= 90) result++;
    }
    return result;
}
// To capital letters
const case12 = (str) => {
    let result = '';
    for(let s of str) {
        let num = s.charCodeAt();
        if(num >= 97 && num <= 122) result += String.fromCharCode(num-32);
        else result += s;
    }
    return result;
}
// Switch type of letters
const case13 = (str) => {
    let result = '';
    for(let s of str) {
        let num = s.charCodeAt();
        if(num >= 65 && num <= 90) result += String.fromCharCode(num+32);
        else if(num >= 97 && num <= 122) result += String.fromCharCode(num-32);
    }
    return result;
}
// The longest
const case14 = () => {

}
// Middle letter
const case15 = (str) => {
    let result;
    const mid = Math.floor(str.length/2);
    if(str.length%2 === 0) { // even
        result = str.substr(mid-1, 2);
    } else { // odd
        result = str.substr(mid, 1);
    }    
    return result;
}
// Remove duplicated letter
const case16 = (str) => {
    let result = '';
    str.split('').forEach((a, idx) => {
        // str.indexOf(a));
        if(idx === str.indexOf(a)) result += a;
    })
    return result;
}
const trans16 = (str) => {
    let result = 0;
    let pos = str.indexOf('k');
    while(pos !== -1) { // 해당 문자열에 존재하지 않을 때까지
        result++;
        pos = str.indexOf('k', pos+1)
    }
    return result;
}
// Remove duplicated word
const case17 = (arr) => {
    return arr.filter((s, idx) => idx === arr.indexOf(s));
}

console.log(case17(['good', 'time', 'good', 'time', 'student']));
// console.log(trans16('ksekkset'));
// console.log(case16('ksekkset'));
// console.log(case15('study'));
// console.log(case15('good'));
// console.log(case14(''));
// console.log(case13('StuDY'));
// console.log(case12('ItisTimeToStudy'));
// console.log(case11('KoreaTimeGoood'));
// console.log(case10('COMPUTERPROGRAMMING', 'R'));
// console.log(case9('BANANA'));
// console.log(case8([20, 7, 23, 19, 10, 15, 25, 8, 13]));
// console.log(case7(0, [12, 20, 54, 30, 87, 91, 30]));
// console.log(case7(3, [25, 23, 11, 47, 53, 17, 33]));
// console.log(case6([12, 77, 38, 41, 53, 92, 85]));
// console.log(case5([5,7,1,3,2,9,11]));
// console.log(case4(6));
// console.log(case4(10));
// console.log(case3(25));
// console.log(case3(178));
// console.log(case2(13,33,17));
// console.log(case2(6,7,11));
// console.log(case1(6,5,11));