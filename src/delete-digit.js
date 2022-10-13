const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr=String(n).split('');
  let arrRes=[];
  
  for (let i=0; i<arr.length; i++){
    let num='';
    for (let j=0; j<arr.length; j++){
      if (j!==i){
        num=num+arr[j];
      }
     
    }arrRes.push(+num);}
    console.log(arrRes);
    let max=arrRes[0];
  
  for (let i=0; i<arrRes.length; i++){
   if (arrRes[i]>max) {
   max=arrRes[i];
    }}
return max;
}

module.exports = {
  deleteDigit
};
