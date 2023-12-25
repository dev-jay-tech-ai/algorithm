const case1 = (arr) => {
    let result = Number.MIN_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    arr.forEach((num) => {
        const sum = String(num).split('').map(Number).reduce((a,acc) => a+acc);
        // let sum = 0;
        // let tmp = num;
        // while(tmp) {
        //     sum += tmp%10;
        //     tmp = parseInt(tmp/10);
        // }
        if(max <= sum) {
            max = sum;
            result = Math.max(result, num);
        }
    });
    return result;
}
// Prime
const case2 = (arr) => {
    const isPrime = (n) => {
        if(n === 1) return false;
        for(let i=2; i<=parseInt(Math.sqrt(n)); i++) {
            if(n%i === 0) return false;
        }
        return true;
    };

    // const result = arr.map((x) => parseInt(String(x).split('').reverse().join('')))
    let list = [];
    for(let x of arr) {
        let num = 0;
        while(x) {
            num = (num*10) + (x%10);
            x = parseInt(x/10);
        }    
        // 소수판별법
        if(isPrime(num)) list.push(num);    
    }
    return list;
}
// Mentoring
const case3 = (a,b,arr) => {
    let result;

    return result;
}
// Present
const case4 = (arr) => {
    let result = 0;
    const budget = arr[0][1];
    const products = arr.slice(1).sort((a,b) => a[0] - b[1]);
    console.log(products)
    for(let i=0; i<products.length; i++) {
        let total = budget-((products[i][0]/2)+products[i][1]);
        let cnt = 1;
        for(let j=0; j<products.length; j++) {
            if(j !== i && (products[j][0] + products[j][1])>total) break;
            if(j !== i && (products[j][0] + products[j][1])<=total) {
                total -= (products[j][0] + products[j][1]);
                cnt++;
            }
        }
        result = Math.max(result, cnt);
    }
    return result;

}
// Kth largest
const case5 = (n,k,arr) => {
    let result;
    const set = new Set();
    // k 번쨰로 큰수

    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            for(let k=j+1; k<arr.length; k++) {
                set.add(arr[i]+arr[j]+arr[k]);
            }
        }
    }
    result = Array.from(set).sort((a,b) => b-a);
    console.log(result.length)
    return result[k-1];
}

console.log(case5(10,3,[13, 15, 34, 23, 45, 65, 33, 11, 26, 42]))
// console.log(case4([
// [5, 28],
// [6, 6],
// [2, 2],
// [4, 3],
// [4, 5],
// [10, 3],
// ]))
// console.log(case3(4,3,[
//     [3,4,1,2],
//     [4,3,2,1],
//     [3,1,4,2]
// ]))
// console.log(case2([32, 55, 62, 20, 250, 370, 200, 30, 100]))
// console.log(case1([128, 460, 603, 40, 521, 137, 123]))