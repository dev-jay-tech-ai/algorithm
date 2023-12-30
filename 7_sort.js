// Selection sort
const case1 = (arr) => {
    let result = arr; // 앝은 복사
    for(let i=0; i<arr.length-1; i++) {
        let min = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[min]) min = j;
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]; // swap
    }
    return result;
}
// Bubble sort
const case2 = (arr) => {
    let result = arr;
    for(let i=0; i<arr.length-1; i++) {
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ];
        }
    }
    return result;
}
// Special sort(bubble sort transform)_google
const case3 = (arr) => {
    const result = arr;
    for(let i=0; i<arr.length-1; i++) {
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j]>0 && arr[j+1] < arr[j]) [ arr[j], arr[j+1]] = [ arr[j+1], arr[j]];
        } 
    }
    return result;
}
// Insertsort
const case4 = (arr) => {
    let result = arr;
    for(let i=1; i<arr.length; i++) {
        let tmp = arr[i];
        let j;
        for(j=i-1; j>=0; j--) {
            if(arr[j] > tmp) arr[j+1] = arr[j];
            else break; // 이미 정렬이 되어 있어 더 볼 필요가 없기 때문
        }
        arr[j+1] = tmp; // j가 종료된 시점에서 + 1
    }
    return result;
}
// insertsort transform_kakao
// 7 5 3 2 6 
const case5 = (n,m,arr) => {
    const cache = Array(n).fill(0);
    for(let a of arr) {
        if(cache.includes(a)) {
            for(let j=cache.indexOf(a); j>0; j--) cache[j] = cache[j-1];
        } else {
            for(let i=cache.length-1; i>0; i--) {
                if(cache[i-1] !== 0) cache[i] = cache[i-1];
            }
        }
        cache[0] = a;
    }
    return cache;
}

const case5_0 = (n,m,arr) => {
    const cache = [];
    for(let a of arr) {
        if(cache.includes(a)) {
            cache.splice(cache.indexOf(a),1);
        }
        cache.unshift(a);
        if(cache.length>n) cache.pop();
    }
    return cache;
}

const case6 = (arr) => {
    const result = [];
    const sortedArr = arr.slice().sort((a,b) => a-b);
    for(let i=0; i<arr.length; i++) {
       if(arr[i] !== sortedArr[i]) result.push(i+1);
    }
    return result;
}
// Coordinate sorting
const case7 = (arr) => {
    const result = arr;
    arr.sort((a,b) => a[0]+a[1] - (b[0]+b[1]));
    return result;
}

const case8 = (arr) => {s
    let result = 0;
    arr.sort((a,b) => {
        if(a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    for(let i=0; i<arr.length-1; i++) {
        let cnt = 1;
        let tmp = arr[i][1];
        for(j=i+1; j<arr.length; j++) {
            if(tmp <= arr[j][0]) {
                tmp = arr[j][1];
                cnt++;
            }
        }
        // console.log(i, cnt)
        result = Math.max(result,cnt);
    }
    return result;
}

const case9 = (arr) => {
    let result;

}

const case10 = (target, arr) => {
    let result;
    let left = 0;
    let right = arr.length-1;
    arr.sort((a,b) => a-b);
    while(left<=right) {
        let mid = parseInt((right+left)/2);
        if(arr[mid] === target) {
            result = mid+1; 
            break;
        }
        else if(arr[mid]>target) {
            right = mid-1;
        } else left = mid+1;
    }

    return result;
}

const case11 = (n,m,arr) => {
    let result;
    let left = Math.max(...arr);
    let right = arr.reduce((a,acc) => a + acc)

    while(left<=right) {
        console.log(left, right)
        let mid = parseInt((left+right)/2);
        if(count(arr, mid) <= m) {
            result = mid;
            right = mid-1;
        } else left = mid+1;
    }
    return result;
}

const case12 = (n,m,arr) => {
    let result;
    // 5마리의 말 
    arr.sort((a,b) => a-b);
    // 1 2 8 4 9 
    console.log(arr)
    const left = 0;
    const right = arr.length-1;
    while(left<=right) {
        const mid = parseInt((left+right)/2);
        
    }


    return result;
}

console.log(case12(5,3,[1,2,8,4,9]))
// console.log(case11(9,3,[1,2,3,4,5,6,7,8,9]))
// console.log(case10(32, [23, 87, 65, 12, 57, 32, 99, 81]))
// console.log(case9([[14,18],[12,15],[15,20],[20,30],[5,14]]));
// console.log(case8([[1,4],[2,3],[3,5],[4,6],[5,7]]))
// console.log(case8([[3,3],[1,3],[2,3]]))
// console.log(case7([[2,7],[1,3],[1,2],[2,5],[3,6]]))
// console.log(case6([120,125,152,130,135,135,143,127,160]))
// console.log(case6([120,130,150,150,130,150]))
// console.log(case5_0(5,9,[1,2,3,2,6,2,3,5,7]))
// console.log(case5(5,9,[1,2,3,2,6,2,3,5,7]))
// console.log(case4([11,7,5,6,10,9]))
// console.log(case3([-3,-2,-6,1,2,3,5,6]))
// console.log(case2([13,5,11,7,23,15]))
// console.log(case1([13,5,11,7,23,15]))