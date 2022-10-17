const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let arr=[[],[]];
    let b=[];
    let result={};
  for (let i=0; i<domains.length; i++){
    let a= domains[i];
    arr[0].push('.'+a);
    arr[1].push(1);
      console.log(arr);}
    for (let i=0; i<domains.length; i++){
    for (let j=0; j<domains[i].length; j++){
    if (domains[i][j]==='.'){
       a= domains[i].slice(j);
      if (arr[0].includes(a)) {
         
arr[1][arr[0].indexOf(a)]=arr[1][arr[0].indexOf(a)]+1;
      }else {
      arr[0].push(a);
      arr[1].push(1);
    }
  }
  }
  } for (let i=0; i<arr[0].length; i++){
             
        b[i]= arr[0][i].split('.'); 
         b[i]=  b[i].reverse();
        b[i].pop();
        result['.'+b[i].join('.')]=arr[1][i];
    } return result}
    

module.exports = {
  getDNSStats
};
