const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members ) {
  let arr=[];
  if (Array.isArray(members)){

  let result = members.filter(member => typeof member==='string');
  if (result.length==0){return false};
  result=result.forEach((el)=>{arr.push(el.toUpperCase().trim().slice(0, 1))});
  arr.sort().join('');

  return  arr.sort().join('');
} else {
  return false
}}


module.exports = {
  createDreamTeam
};
