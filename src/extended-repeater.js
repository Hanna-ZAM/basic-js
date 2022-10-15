const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
    let add='';
      let i=0; let j=0;
      if (!options.repeatTimes){
          options.repeatTimes=1};
       if (!options.additionRepeatTimes){
          options.additionRepeatTimes=1};
      if (!options.separator){
          options.separator='+'};
      if (!options.addition){
          if(options.addition===false){
             options.addition='false' ;
          } else if (options.addition===null){
            options.addition='null' ;
        }else{
          options.addition=''}};
       if (!options.additionSeparator){
          options.additionSeparator='|'};
      console.log(options.separator);
       console.log(options.addition);
       console.log(options.additionSeparator);
      let additionArr=[];
   while (i<options.additionRepeatTimes) {
      additionArr.push(options.addition);
       i++;
    }
      console.log('additionArr'+additionArr);
  add=  additionArr.join(options.additionSeparator);
      console.log('add'+add);
  let element=str+add;
      let result='';
      let elementArr=[];
  while( j<options.repeatTimes) {
     elementArr.push(element);
      j++;
  }
      console.log('element  '+element);
      console.log('elementArr  '+elementArr);
  result=elementArr.join(options.separator);
      console.log(result);
  return result;
  }
module.exports = {
  repeater
};
