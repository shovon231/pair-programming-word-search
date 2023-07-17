const wordSearch = (letters, word) => {
  if (!letters.length) {
    return false; // Handle empty letters
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) {
      return true; // Found word vertically
    }
  }
  return false;
};
//helper
const transpose = function (matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const transposed = [];
  for (let j = 0; j < numCols; j++) {
    const newRow = [];
    for (let i = 0; i < numRows; i++) {
      newRow.push(matrix[i][j]);
    }
    transposed.push(newRow);
  }

  return transposed;
};
module.exports = wordSearch;
