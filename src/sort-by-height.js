const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let result=new Array(arr.length);
  let a=[];
  for (let i=0; i<arr.length; i++){
if (arr[i]===-1){
  result[i]=arr[i];
}else {
  a.push(arr[i]);
}
}
    console.log(a);
a.sort((a,b)=>{return (a-b)});console.log(a);
let j=0;
for (let i=0; i<result.length; i++){
  if (result[i]!==-1){
    result[i]=a[j];
    j++
}}
return result}

module.exports = {
  sortByHeight
};
