const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine  {
  constructor(alt=true) {
    this.antiReverse=alt;
  }
  
  encrypt(string, key) {
    const a=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if(!string||!key){throw new Error('Incorrect arguments!')}
    string=string.toUpperCase();
    key=key.toUpperCase();
    let arrStr=[];
    let arrStrNum=[];
    let newKey=[];
    let newKeyNum=[];
     let resNum=[];
     let res=[];
     let result=[];
     
    for (let i=0; i<string.length; i++) {
    
     arrStr.push(string[i]);
       if(a.includes(string[i])){ 
     arrStrNum.push(a.indexOf(string[i]));
    } else {arrStrNum.push('');}}

      let j=0;
   for (let i=0; i<arrStr.length; i++){
       
       if(a.includes(string[i])){ 
     newKey.push(key[(j+key.length)%key.length]);
     newKeyNum.push(a.indexOf(key[(j+key.length)%key.length]));
           j++
    }  else {newKeyNum.push(''); 
             newKey.push('');
             }}
     
    for (let i=0; i<arrStr.length; i++){
        resNum[i]=(arrStrNum[i]+newKeyNum[i]+26)%26;}
    
     
       for (let i=0; i<string.length; i++) {
           if(a.includes(string[i])){
               res.push(a[resNum[i]]);
         
           } else {res.push(string[i]) ;}}
          
if (this.antiReverse===false){result=res.reverse();}
 else {result=res;}
           return result.join('');
          
          }

  decrypt(string, key) {
    const a=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if(!string||!key){throw new Error('Incorrect arguments!')};
    string=string.toUpperCase();
    key=key.toUpperCase();
    let arrStr=[];
    let arrStrNum=[];
    let newKey=[];
    let newKeyNum=[];
     let resNum=[];
     let res=[];
     let result=[];
     
    for (let i=0; i<string.length; i++) {
    
     arrStr.push(string[i]);
       if(a.includes(string[i])){ 
     arrStrNum.push(a.indexOf(string[i]));
    } else {arrStrNum.push('');}}
      let j=0;
   for (let i=0; i<arrStr.length; i++){
       
       if(a.includes(string[i])){ 
           
     newKey.push(key[(j+key.length)%key.length]);
     newKeyNum.push(a.indexOf(key[(j+key.length)%key.length]));
           j++
    }  else {newKeyNum.push(''); 
             newKey.push('');
             }}
 
    for (let i=0; i<arrStr.length; i++){
        resNum[i]=(arrStrNum[i]-newKeyNum[i]+26)%26;}
    
       for (let i=0; i<string.length; i++) {
           if(a.includes(string[i])){
               res.push(a[resNum[i]]);
         
           } else {res.push(string[i]) ;}}
           if (this.antiReverse===false){result=res.reverse();}
           else {result=res;}
                     return result.join('');
}}

module.exports = {
  VigenereCipheringMachine
};
