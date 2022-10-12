const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  if((""+date).length===0) { 
  
    return 'Unable to determine the time of year!'};
  if ( (typeof date) == 'string'||(typeof date) == 'number'||Array.isArray(date)){
    return 'Invalid date!'}
  
  if (Boolean(date.getMonth())||date.getMonth()===0){
  
 let month= date.getMonth();
  let result=month==0||month==1||month==11?'winter':month==2||month==3||month==4?'spring':month==5||month==6||month==7?'summer':'autumn';
 
    return result} else {
   
    return 'Invalid date!'
  }

}

module.exports = {
  getSeason
};
