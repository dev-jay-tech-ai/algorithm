// 1. divisor
const solution1 = (tc) => {
    // 1 2 3 6
    let [n, k] = tc.split(' ').map(Number);
    let cnt = 0;
    for(let i=1; i<=n; i++) {
        if(n%i === 0) cnt++;
        if(cnt === k) {
            console.log(i);
            break;
        }
    }
    console.log(-1);
    
}
// 2. nth num
const solution2 = (testcase) => {
    let cases = testcase.split('\n').slice(2).map((el) => el.split(' '));
    let idx = 0;
    for(let i=0; i<cases.length; i+=2) {
        idx++;
        let [ n,s,e,k ] = cases[i];
        let arr = cases[i+1];
        console.log('#'+idx+' '+arr.slice(s-1,e).sort((a,b) => { return a-b; })[k-1])
    }
}
// 3. kth biggest num
const solution3 = (tc) => {
    const arr = tc.split('\n');
    const pick = Number(arr[0].split(' ')[1]);
    const num = arr[1].split(' ').map(Number);
    console.log(num)
    const cards = [... new Set(num)];
    let sums = new Set();
    for(let i=0; i<cards.length; i++) {
        for(let j=i+1; j<cards.length; j++) {
            for(let k=j+1; k<cards.length; k++) {
                sums.add(cards[i]+cards[j]+cards[k])
            }
        }
    }
    console.log([... sums].sort((a,b) => { return b-a; })[pick-1]) 
}
// 4. main value
const solution4 = (tc) => {
    // 74 7 
    // n 명의 학생 중 가장 평균에 가까운 학생
    const testcase = tc.split('\n');
    const n = testcase[0];
    const arr = testcase[1].split(' ').map(Number);
    const sum = arr.reduce((a,acc) => a + acc, 0);
    const avg = Math.round(sum/n);
    const gap = arr.map((a) => Math.abs(avg-a));
    console.log(gap)
    let min = Math.min(...gap);
    let minArr = [];
    for(let i=0; i<gap.length; i++) {
        if(gap[i] === min) minArr.push([i+1, arr[i]]);
    }
    minArr.sort((a, b) => {
        if(a[1] === b[1]) return a[1] - b[1];
        else return b[0] - a[0];
    });
    console.log(avg, minArr[0][0])
}
let test = `10
45 73 66 87 92 67 75 79 75 80`;

console.log(solution4(test));