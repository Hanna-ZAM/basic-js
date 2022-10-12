const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  console.log(sampleActivity);
  let result;
  let a=+sampleActivity;


 if ((typeof sampleActivity)==='string'&&(typeof a)==='number'&&a>0){
 
 result= Math.ceil((Math.log(15/a)*5730)/Math.log(2));
 if (result<0) {
  result=false;
}
 } else{
  result=false;
}
  return result;
}

module.exports = {
  dateSample
};
