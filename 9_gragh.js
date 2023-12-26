// Adjacency matrix
const case2 = (n,arr) => {
    let result = 0;
    const graph = Array.from({ length: n+1 }, () => Array(n+1).fill(0));
    const ch = Array(n+1).fill(0);
    for(let [a,b] of arr) {
        graph[a][b] = 1;
    }
    const DFS = (v) => {
        if(v === n) result++;
        else {
            for(let i=1; i<=n; i++) {
                if(graph[v][i] === 1 && ch[i] === 0) {
                    ch[i] = 1;
                    DFS(i)
                    ch[i] = 0;
                }
            }
        }
    }

    ch[1] = 1;
    DFS(1); // 첫번째 vertex
    return result;
}
// Adjacency list
const case3 = (n,arr) => {
    let result = 0;
    const ch = Array(n+1).fill(0);
    const graph = Array.from({ length: n+1 },() => Array());
    for(let [a,b] of arr) {
        graph[a].push(b);
    }
    const DFS = (v) => {
        if(v === 5) result++;
        else {
            // 연결된 간선 탐방
            for(let i=0; i<graph[v].length; i++) {
                if(ch[graph[v][i]] === 0) {
                    ch[graph[v][i]] = 1;
                    DFS(graph[v][i]);
                    ch[graph[v][i]] = 0;
                }
            }
        }
    }
    ch[1] = 1; // 첫번쨰 간선 방문
    DFS(1); // 첫번째 간선부터 시작
    return result;
}
// Maze
const case4 = (arr) => {
    let result = 0;
    let dir = [[-1,0],[0,1],[1,0],[0,-1]]; 
    let size = arr.length-1;
    const DFS = (x,y) => {
        if(x === size && y === size) result++;
        else { 
            for(let [dx,dy] of dir) {
                let nx = x+dx;
                let ny = y+dy;
                if(nx >= 0 && nx <= size && ny >= 0 && ny <= size && arr[nx][ny] === 0) {
                    arr[nx][ny] = 1;
                    DFS(nx,ny);
                    arr[nx][ny] = 0;
                }
            }
        }
    }
    arr[0][0] = 1;
    DFS(0,0);
    return result;
}
// BFS
const case5 = () => {
    let result='';
    let queue = [];
    queue.push(1);
    while(queue.length) {
        let v = queue.shift();
        result += v+' ';
        for(let nv of [v*2, v*2+1]) {
            if(nv>7) continue;
            queue.push(nv);
        }
    }
    return result;
}

// BFS
const case6 = (s,e) => {
    const visited = Array({ length: e }).fill(0);
    let queue = [];
    visited[s] = 1;
    queue.push([s,0]);
    while(queue.length) {
        let [x, jump] = queue.shift(); // 현재지점
        // console.log(x,jump)
        for(let nx of [x-1,x+1,x+5]) {
            if(nx===e) return jump+1;
            if(nx>0 && nx<=10000 && !visited[nx]) {
                visited[nx] = 1;
                queue.push([nx, jump+1]);
            }
        }
    }
}
// Island
const case7_dfs = (n,arr) => {
    let result = 0;
    let len = n-1;
    let dir = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];
    const DFS = (x,y) => {
        arr[x][y] = 0;
        if(x === len&&y === len) return;
        else {
            for(let d of dir) {
                let nx= x+d[0];
                let ny= y+d[1];
                if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny] === 1) {
                    DFS(nx,ny);
                }
              
            }
        }
    };
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(arr[i][j] === 1) {
                result++;
                DFS(i,j);
            }
        }
    }
    return result;   
}

const case7 = (n,arr) => {
    let result = 0;
    let dir = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];
    const queue = [];
    for(let i=0; i<n; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(arr[i][j]===1) {
                arr[i][j] = 0;
                queue.push([i,j]);
                result++;
                while(queue.length) {
                    let [x,y] = queue.shift();
                    for(let [dx,dy] of dir) {
                        let nx = x+dx;
                        let ny = y+dy;
                        if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny] === 1) {
                            arr[nx][ny] = 0;
                            queue.push([nx,ny]);
                        }
                    }
                }
            }
        }
    }

    return result;
}

console.log(case7(7,[
    [1, 1, 0, 0, 0, 1, 0], 
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0]]))
// console.log(case6(5,14))
// console.log(case6(8,3))
// console.log(case5())
// console.log(case4([
//     [0, 0, 0, 0, 0, 0, 0], 
//     [0, 1, 1, 1, 1, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0],
//     [1, 1, 0, 1, 0, 1, 1],
//     [1, 1, 0, 0, 0, 0, 1],
//     [1, 1, 0, 1, 1, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0]]))
// console.log(case3(5,[[1,2],[1,3],[1,4],[2,1],[2,3],[2,5],[3,4],[4,2],[4,5]]));
// console.log(case2(5,[[1,2],[1,3],[1,4],[2,1],[2,3],[2,5],[3,4],[4,2],[4,5]]));