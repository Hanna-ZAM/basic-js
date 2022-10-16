const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

 function encodeLine(str) {
  let arr=[];
  for (let i=0; i<str.length; i++){
    if (arr[arr.length-1]===str[i]){
      let a=arr.indexOf(str[i]);
      arr[a-1]=+arr[a-1]+1;
    } else {
      
      arr.push(1); arr.push(str[i]);
    }
  } arr=arr.filter(el=>el!==1);
 return arr.join('');
}


module.exports = {
  encodeLine
};
