// 11047
const coin = (str) => {
    const input = str.split('\n');
    const arr = input[0].split(' ');
    let len = arr[0];
    let target = arr[1];
    let val = input.filter((a,i) => i>0).map(Number).sort((a,b) => b-a);
    let cnt = 0;
    for(let i=0; i<len; i++) {
        if(target === 0) break;
        if(target>=val[i]) {
            cnt += parseInt(target/val[i]);
            target %= val[i]; // 200
        }
    }
    console.log(cnt)
    // return cnt;
}
// 11399
const atm = (input) => {
    const arr = input.split('\n')
    const len = arr[0];
    const ppl = arr[1].split(' ').map(Number).sort((a,b) => a-b);
    let sum = ppl[0];
    for(let i=1; i<len; i++) {
       ppl[i] += ppl[i-1];
       sum += ppl[i]; 
    }
    console.log(sum)
}
// 1541
const parentheses = (str) => {
    const input = str.split('-');
    let result = 0;
    for(let i=0; i<input.length; i++) {
        let terms = input[i].split('+');
        let sum = terms.map(Number).reduce((a,b) => a+b);
        if(i === 0) result += sum;
        else result -= sum;
    }       
    console.log(result)
}

let input = `10+20+30+40`;

console.log(parentheses(input));
// console.log(atm(input));
// console.log(coin(input));