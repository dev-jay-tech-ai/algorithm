const case1 = (n) => {
    let result = 0;
    let dy = Array.from({ length: n+1 }).fill(0);
    dy[1] = 1;
    dy[2] = 2;
    for(let i=3; i<=n; i++) dy[i] = dy[i-2] + dy[i-1];
    result = dy[n];
    return result;
}

const case2 = (n) => {
    let result = 0;
    let dy = Array.from({ length: n+2 }).fill(0);
    dy[1] = 1; // 첫번째까지의 확률
    dy[2] = 2;  // 두번째까지의 확률
    for(let i=3; i<=n+1; i++) {
        console.log(dy[i-2],dy[i-1],dy[i])
        dy[i] = dy[i-2] + dy[i-1];
    }
    result = dy[n+1];
    return result;
}
// LIS
const case3 = (n,arr) => {
    let result = 0;
    const dy = Array(n).fill(0);
    dy[0] = 1;
    for(let i=1; i<n; i++) {
        let max = 0;
        for(let j=i-1; j>=0; j--) {
            if(arr[j]<arr[i] && dy[j]>max) {
                max=dy[j];
            }
        }
        dy[i] = max+1;
        result = Math.max(result, dy[i])
    }
    console.log(dy)
    return result;
}
// Napsack Algorithm
const case4 = (n,coins,m) => {
    let result;
    let dy = Array(m+1).fill(1000);
    dy[0] = 0;
    for(let i=0; i<n; i++) {
        for(let j=coins[i]; j<=m; j++) { // 1, 2, 5
            dy[j] = Math.min(dy[j],dy[j-coins[i]]+1);
        }
        // console.log(dy)
    }
    result = dy[m];
    return result;
}

const case5 = (n,m,arr) => {
    let result;
    const dp = Array(m+1).fill(0);
    for(let i=0; i<n; i++) { // score,time
        const score = arr[i][0];
        const time = arr[i][1];
        // console.log(score,time)
        for(let j=m; j>=time; j--) {
            dp[j] = Math.max(dp[j], dp[j-time]+score)
        }
        // console.log(dp.slice())
        // console.log(dp)
    }
    result = dp[m];
    return result;
}

console.log(case5(5,20,[[10,5],[25,12],[15,8],[6,3],[7,4]]));
// console.log(case4(3,[1,2,5],15));
// console.log(case3(8,[5,3,7,8,6,2,9,4]));
// console.log(case2(7));
// console.log(case1(7));