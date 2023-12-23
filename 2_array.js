// Bigger than me
const case1 = (arr) => {
    let result = [arr[0]];
    for(let i=1; i<arr.length; i++) {
        if(arr[i-1]<arr[i])result.push(arr[i]);
    }
    return result;
}
// visible student
const case2 = (arr) => {
    let result = 1;
    let max = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(max<arr[i]) {
            result++;
            max = arr[i];
        }
    }
    return result;
}
// Scissors 1 Rock 2 Paper 3
const case3 = (a,b) => {
    let result = '';
    const game = (n,m) => {
        if(n === m) return 'D';
        if(n === 1 && m === 3) {
            return 'A';
        } else if(n === 2 && m === 1) {
            return 'A';
        } else if(n === 3 && m === 2) {
            return 'A';
        } else return 'B';
    }
    for(let i=0; i<a.length; i++) {
        result += game(a[i],b[i])+' ';
    }
    return result;
}
// Score
const case4 = (arr) => {
    let result = 0;
    let acc = 0;
    arr.forEach((a) => {
        if(a === 1) {
            acc++;
            result += acc;
        } else acc = 0;
    })
    return result;
}
// Ranking
const case5 = (n, arr) => {
    const result = Array(n).fill(1);
    // const score = arr.filter((a, idx) => arr.indexOf(a) === idx);
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if(arr[i] < arr[j]) result[i]++;
        }
    }
    return result;
}
// Grid
const case6 = (arr) => {
    let result = Number.MIN_SAFE_INTEGER;
    let diagr = 0;
    let diagl = 0;
    for(let i=0; i<arr.length; i++) {
        // 각 행/열의 합
        let maxr = 0;
        let maxc = 0;
        for(let j=0; j<arr[i].length; j++) {
            maxr += arr[i][j];
            maxc += arr[j][i];
        }
        console.log(maxr, maxc)
        diagr += arr[i][i];
        diagl += arr[i][arr[i].length-i-1];
        result = Math.max(result, maxr, maxc);       
    }
    console.log(diagr, diagl)
    result = Math.max(result, diagr, diagl);

    return result;

}
// Peaks
const case7 = (arr) => {
    let result = 0;
    let len = arr.length;
    const dx = [-1, 0 , 1, 0];
    const dy = [0 , 1, 0, -1];
    for(let i=0; i<len; i++) {
        for(let j=0; j<len; j++) {
            let flag = 1;
            for(let k=0; k<4; k++) { // 상하좌우
                const nx = i+dx[k];
                const ny = j+dy[k];
                if(nx >= 0 && nx < len && ny >= 0 && ny <len && arr[nx][ny] >= arr[i][j]) {
                    flag = 0;
                    break;
                }
            }
            if(flag) result++;
        }
    }
    return result;
}

console.log(case7([
[5,3,7,2,3],
[3,7,1,6,1],
[7,2,5,3,4],
[4,3,6,4,1],
[8,7,3,5,2],
]))
// console.log(case6(
//     [[10, 13, 10, 12, 15],
//     [12, 39, 30, 23, 11],
//     [11, 25, 50, 53, 15],
//     [19, 27, 29, 37, 27],
//     [19, 13, 30, 13, 19]]
// ))
// console.log(case5(5, [92, 90, 92, 100, 76]))
// console.log(case5(5, [87, 89, 92, 100, 76]))
// console.log(case5(5, [87, 89, 92, 100, 76]))
// console.log(case4([1,0,1,1,1,0,0,1,1,0]))
// console.log(case3([2,3,3,1,3],[1,1,2,2,3]))
// console.log(case2([130, 135, 148, 140, 145, 150, 150, 153]))
// console.log(case1([7,3,9,5,6,12]))