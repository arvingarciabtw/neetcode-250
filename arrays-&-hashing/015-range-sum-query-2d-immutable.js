class NumMatrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  sumRegion(row1, col1, row2, col2) {
    let res = 0;
    for (let r = row1; r <= row2; r++) {
      for (let c = col1; c <= col2; c++) {
        res += this.matrix[r][c];
      }
    }
    return res;
  }
}
