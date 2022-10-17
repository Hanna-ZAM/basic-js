const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain:'',
chainArr:[],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
   this.chainArr.push(`( ${value} )`);
   this.chain= this.chainArr.join('~~');
   return this;
  },
removeLink(position) {
  if (typeof(position)!=='number'|| Number.isInteger(position)===false||position>this.chainArr.length||position<1) {
    this.chain='';
    this.chainArr=[];
    throw new Error("You can't remove incorrect link!") ;}
   this.chainArr=this.chainArr.filter(el=>this.chainArr[position-1]!==el);
     this.chain= this.chainArr.join('~~');
     return this;
  },
  reverseChain() {
    this.chainArr=this.chainArr.reverse();
    this.chain= this.chainArr.join('~~');
    return this;
  },
  finishChain() {
    let a=this.chain;
    this.chain='';
    this.chainArr=[];
    return a;
  }
};

module.exports = {
  chainMaker
};