const case1 = (n) => {
    const recursion = (L) => {
        if(L < 1) return;
        recursion(L-1);
        console.log(L);
    }
    recursion(n);
}

const case2 = (n) => {
    let result = '';
    const recursion = (n) => {
        if(n === 0) return;
        recursion(parseInt(n/2));
        result += n%2;
    }
    recursion(n);
    return Number(result);
}

const case3 = () => {
    const DFS = (v) => {
        if(v>7) return;
        DFS(v*2);
        console.log(v)
        DFS(v*2+1);
    };

    DFS(1);
}

const case4 = (n) => {
    const ch = Array(n+1).fill(0);
    const DFS = (v) => {
        if(v === n+1) {
            let tmp = '';
            for(let i=1; i<=n; i++) {
                if(ch[i] === 1) tmp += i+' ';
            }
            console.log(tmp)
        } else {
            ch[v]=1;
            DFS(v+1)
            ch[v]=0;
            DFS(v+1)
        }
    }
    DFS(1);
}

const case5 = (n, arr) => {
   let result = 'NO';
   let flag = 0;
   let ch = Array(n+1).fill(0);
   let sum = arr.reduce((a, acc) => a+acc,0);
   const DFS = (v) => {
        if(flag) return;
        if(v === n) {
            let tmp = [];
            for(let i=1; i<n; i++) {
                if(ch[i] === 1) tmp.push(arr[i-1])
            }
            if(tmp.length > 0) {
                console.log(tmp)
                if(tmp.reduce((a,acc) => a+acc ) === sum/2) result = 'YES';
                // flag = 1;
            }
        } else {
            ch[v] = 1;
            DFS(v+1);
            ch[v] = 0;
            DFS(v+1);
        }

   }
    DFS(1)

   return result;
}

const case6 = (n,m,arr) => {
    let result = Number.MIN_SAFE_INTEGER;
    const DFS = (L,sum) => {
        if(sum > n) return; 
        if(L===m) {
            result = Math.max(result,sum);
        } else {
            DFS(L+1,sum+arr[L])
            DFS(L+1,sum)
        }
    }
    DFS(0,0);
    return result;
}

const case7 = (n,m,arr) => {
    let result = Number.MIN_SAFE_INTEGER;
    const DFS = (L,score,time) => {
        if(time > m) return;
        if(L===n) {
            result = Math.max(result, score);
        } else {
            DFS(L+1,score+arr[L][0],time+arr[L][1]);
            DFS(L+1,score,time);
        }
    }
    
    DFS(0,0,0);
    return result;
}

const case8 = (n,m) => {
    let result = [];
    let tmp = Array(m).fill(0);
    const DFS = (L) => {
        if(L === m) {
            result.push(tmp.slice());
        } else {
            for(let i=0; i<n; i++) {
                tmp[L] = i+1;
                DFS(L+1)
            }
        }
    }
    DFS(0);
    return result;
}

const case9 = (n, arr, target) => {
    let result = Number.MAX_SAFE_INTEGER;
    const DFS = (L,sum) => {
        if(sum > target) return;
        if(L>=result) return;
        if(sum === target) {
            result = Math.min(result,L)
        } else {
            for(let i=0; i<n; i++) {
                DFS(L+1,sum+arr[i]);
            }
        }
    }
    DFS(0,0);
    return result;

}

const case10 = (n,m,arr) => {
    let result = 0;
    const tmp = Array(m).fill(0);
    const ch = Array(n).fill(0);
    const DFS = (L) => {
        if(L===m) {
            // console.log(tmp)
            result++;
        } else {
            for(let i=0; i<n; i++) {
                if(ch[i] === 0) {
                    tmp[L] = arr[i];
                    ch[i] = 1;
                    DFS(L+1);
                    ch[i] = 0;
                }
            }

        }
    } 
    DFS(0);
    return result;
}
// Factorial
const case11 = (n) => {
    let result;
    const DFS = (n) => {
        if(n===1) return 1;
        else return n*DFS(n-1);
    };
    result = DFS(n);
    return result;
}
// Memoization
const case12 = (n,r) => {
    let result; 
    let memo = Array.from({ length: n+1 }, () => Array(r+1).fill(0));
    const combi = (L,p) => {
        if(memo[L][p] !== 0) return memo[L][p];
        if(L===p || p===0) return 1;
        else { 
            return memo[L][p] = combi(L-1,p-1) + combi(L-1,p);
        }
    }
    result = combi(n,r);
    // console.log(memo)
    return result;
}
// Combination
const case13 = () => {

}

const case14 = (n,m) => {
    let result;
    const tmp = Array({ length: m }).fill(0);
    const combi = (L,start) => {
        if(L===m) {
            console.log(tmp)
            return;
        } else {
            for(let i=start; i<=n; i++) {
                tmp[L] = i;
                combi(L+1, i+1);
            }
        }
    }
    combi(0, 1); 

    return result;    
}
// Combination
const case15 = (n,arr,target) => {
    let result = 0;
    let tmp = Array({ length: n }).fill(0);
    const combi = (L,start,sum) => {
        if(L===n) {
            // console.log(tmp, sum)
            if(sum%target === 0) result++;
        } else {
            for(let i=start; i<arr.length; i++) {
                // tmp[L] = arr[i];
                combi(L+1,i+1,sum+arr[i]);
            }
        }
    }
    combi(0,0,0);
    return result;
}

// console.log(case15(3,[2,4,5,8,12],6))
// console.log(case14(4,2))
// console.log(case13(5,3))
// console.log(case12(5,3))
// console.log(case12(33,19))
// console.log(case11(5))
// console.log(case10(3,2,[3,6,9]))
// console.log(case9(3,[1,2,5],15))
// console.log(case8(3,2))
// console.log(case7(5,20,[[10,5],[25,12],[15,8],[6,3],[7,4]]))
// console.log(case6(259,5,[81,58,42,33,61]))
// console.log(case5(6,[1,3,5,6,7,10]))
// console.log(case4(3))
// console.log(case3())
// console.log(case2(11))
// console.log(case1(3))