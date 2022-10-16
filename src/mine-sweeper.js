const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) { let arr=[];
                              
  for (let i=0; i<matrix.length; i++) {
      arr.push([]);
      for (let j=0; j<matrix[i].length; j++){
          matrix[i][j]=Number( matrix[i][j]);}}

          for (let i=0; i<matrix.length; i++) {
      for (let j=0; j<matrix[i].length; j++){
       if (i===0&&j===0)  {arr[i][j]=+matrix[i][j+1]+matrix[i+1][j+1]+matrix[i+1][j]};
       if (i===0&&j===matrix[i].length-1)  {arr[i][j]=+matrix[i][j-1]+matrix[i+1][j]+matrix[i+1][j-1]};

            if (i===matrix.length-1&&j===0) { arr[i][j]=+matrix[i][j+1]+matrix[i-1][j+1]+matrix[i-1][j]};
            if (i===matrix.length-1&&j===matrix[i].length-1) { arr[i][j]=+matrix[i][j-1]+matrix[i-1][j]+matrix[i-1][j-1]};
          
          if (i===0&&j!==0&&j!==matrix[i].length-1)  {arr[i][j]=+matrix[i][j+1]+matrix[i][j-1]+matrix[i+1][j+1]+matrix[i+1][j]+matrix[i+1][j-1]};
          if (i===matrix.length-1&&j!==0&&j!==matrix[i].length-1) { arr[i][j]=+matrix[i][j+1]+matrix[i][j-1]+matrix[i-1][j+1]+matrix[i-1][j]+matrix[i-1][j-1]};
          if (matrix.length>2){
       if (j===0&&i!==0&&i!==matrix[i].length-1) { arr[i][j]=+matrix[i][j+1]+matrix[i+1][j+1]+matrix[i+1][j]+matrix[i-1][j+1]+matrix[i-1][j]};
             if (j===matrix[i].length-1&&i!==0&&i!==matrix[i].length-1) { arr[i][j]=+matrix[i][j-1]+matrix[i+1][j-1]+matrix[i+1][j]+matrix[i-1][j-1]+matrix[i-1][j]};

        if(j!==matrix[i].length-1&&j!==0&&i!==0&&i!==matrix[i].length-1){
              arr[i][j]=+matrix[i][j-1]+matrix[i+1][j-1]+matrix[i+1][j]+matrix[i-1][j-1]+matrix[i-1][j]+matrix[i][j+1]+matrix[i+1][j+1]+matrix[i-1][j+1]};
          }}
      } 

return arr;
}

module.exports = {
  minesweeper
};
