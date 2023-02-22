function solution(edges) {
  let result = 0;
  // to be implemented
  let cached = [];
  let wait = [];
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  let edgeLength = edges.length;
  let eachLength = edges[0].length;

  for (let i = 0; i < edgeLength; i++) {
    // y 루프
    for (let j = 0; j < eachLength; j++) {
      // x 루프
      if (edges[i][j] === 1) {
        cached.push([j, i]);
      }
    }
  }
  while (cached.length > 0) {
    let start = cached.pop();
    for (let i = 0; i < dx.length; i++) {
      let x = start[0] + dx[i];
      let y = start[1] + dy[i];
      if (x >= 0 && x < eachLength && y >= 0 && y < edgeLength) {
        if (edges[y][x] === 0) {
          edges[y][x] = 1;
          wait.push([x, y]);
        }
      }
    }
    if (cached.length === 0) {
      cached = wait;
      if (wait.length > 0) {
        result++;
      }
      wait = [];
    }
  }
  return result;
}

console.log(
  solution([
    [0, 0, 0],
    [0, 0, 0],
    [1, 0, 0],
  ])
);
