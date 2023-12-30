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
// 2839
const sugarDelivery = (str) => {
    let input = Number(str);
    let cnt = 0;
    if((input%5) === 0) {
        cnt += parseInt(input/5);
        input = input%5; // 3
    } else {
        while((input%5)>0) {
            input -= 3;
            cnt++;
        }
        console.log(input)
        cnt += parseInt(input/5);
        input = input%5;
        console.log(input)
         // 3
    }
    if(input!==0) cnt = -1;
    console.log(cnt);
}
// 16953
const atob = (str) => {
    const [target, input] = str.split(' ').map(Number);
    let cnt = 1;
    while(input>=target) {
        if(input === target) {
            break;
        }
        if(input%2 !== 0) {
            input = (input-1)/10;
        } else input = parseInt(input/2);
        cnt++; 
        // console.log(input)
    }
    if(input<target) cnt = -1;
    console.log(cnt)
}
// 1789
const sum = (target) => {
    let n = 0;
    let sum = 0;
    while(sum<=target) {
        n++;
        sum += n;
        console.log(n, sum);

    }
    console.log(n-1);
}
//1946
const freshman = (str) => {
    const input = str.split('\n');
    const group = input[0];
    let val = [];
    for(let i=1; i<=group; i++) {
        let n = input[i];
        val.push(input.splice(i+1,n).map((el) => el.split(' ').map(Number) ));
    }
    val.forEach((v) => v.sort((a,b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        };
    }))
 
    for(let group of val) {
        let cnt = 0;
        let min = 0;
        for(let [x,y] of group) {
            if(x === 1 || y<min) {
                min = y
                cnt++
            }    
        }
        console.log(cnt)
    }
 }
//13305
const gas = () => {

}



let input = `2
5
3 2
1 4
4 1
2 3
5 5
7
3 6
7 3
4 2
1 4
5 7
2 5
6 1`;

console.log(freshman(input));
// console.log(sum(input));
// console.log(atob(input));
// console.log(atob(input));
// console.log(sugarDelivery(input));
// console.log(parentheses(input));
// console.log(atm(input));
// console.log(coin(input));