const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  constructor(){
    this.count=1;
    this.result=0;
  }
  calculateDepth(arr) {
      let n=0;
      let result;
      let newArr=arr.filter(el=>Array.isArray(el));
      console.log(newArr);
      if (newArr.length===0) {
        result=this.count;
        this.count=1;
          console.log(result);
        return this.result=result;
      } else {
        this.count=this.count+1;
        arr= arr.flat();
        this.calculateDepth(arr); 
        }  return this.result;
    }
  }


module.exports = {
  DepthCalculator
};