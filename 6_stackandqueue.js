const case1 = (str) => {
    let result = 'NO';
    let stack = [];
    for(let s of str) {
        if(s === '(') stack.push(s);
        else if(s === ')') stack.pop();
    };
    if(stack.length === 0) result = 'YES';
    return result;
}

const case2 = (str) => {
    let stack = [];
    for(let s of str) {
        if(s!==')') stack.push(s)
        else while(stack.pop() !== '('); 
    }    
    return stack.join('');
}
// kakao
const case3 = (a, b) => {
    let result = 0;
    const board = a;
    const moves = b;
    // 1,5,3,5,1,2,1,4
    const stack = [];
    for(let m of moves) {
        let t = m-1;
        for(let i=0; i<board.length; i++) {
            if(board[i][t] !== 0) {
                if(stack[stack.length-1] !== board[i][t]) {
                    stack.push(board[i][t]);
                } else {
                    stack.pop();
                    result+=2;
                }
                board[i][t] = 0;
                break;
            }
        }
    }
    console.log(stack)
    return result;
}
// postfix
const case4 = (str) => {
    let result = '';
    let stack = [];
    for(let s of str) {
        if(s.match(/[0-9]/)) {
            stack.push(Number(s));
        } else {
            let r = stack.pop();
            let l = stack.pop();
            if(s === '+') stack.push(l+r)
            else if(s === '-') stack.push(l-r)
            else if(s === '*') stack.push(l*r)
            else if(s === '/') stack.push(l/r)
        }
    }
    // console.log(stack)
    result = stack[0];
    return result;
}

const case5 = (str) => {
    let result = 0;
    let stack = [];
    for(let i=0; i<str.length; i++) {
        if(str[i] === '(') stack.push(str[i]); 
        else {
            stack.pop();
            if(str[i-1] === '(') result += stack.length;
            else result++;
        }
    }
    // console.log(stack)
    return result;
}

const case6 = (n,m) => {
    let result = 0;
    let queue = Array.from({length: n},(v,i) => i+1 );
    while(queue.length > 1) {
        // console.log(queue);
        for(let i=0; i<m; i++) {
            if(i === 2) queue.shift();
            else queue.push(queue.shift());
        }
    }
    result = queue[0];
    return result;
}

const case7 = (n,plan) => {
    let result = 'YES';
    let queue = n.split('');
    for(let p of plan) {
        if(queue.includes(p)) {
            if(p !== queue.shift()) {
                result = 'NO';
                break;
            }
        }
    }
    return result;
}

console.log(case7('CBA','CBDAGE'));
// console.log(case6(8,3));
// console.log(case5('()(((()())(())()))(())'))
// console.log(case5('(((()(()()))(())()))(()())'))
// console.log(case4('352+*9-'))
// console.log(case3(
//     [[0,0,0,0,0],
//      [0,0,1,0,3],
//      [0,2,5,0,1],
//      [4,2,4,4,2],
//      [3,5,1,3,1]],
//     [1,5,3,5,1,2,1,4]))
// console.log(case2('(A(BC)D)EF(G(H)(IJ)K)LM(N)'))
// console.log(case1('(()(()))(()'))