let num1=5;//integer
let num2=78.89;//float
console.log(num1,num2);

//numbermethods//

//1) toString return number as a string
console.log(num1.toString());
console.log(num2.toString());

//2) toExponential return number as a exponential notation
let exponential=num1.toExponential();
console.log(exponential);

//3) toFixed return a string with a number of decimals
let fixed=num1.toFixed(3);
console.log(fixed);
let num2fixed=num2.toFixed(3);
console.log(num2fixed);

// 4) toPrecision returns a number written with specified length
let precision = num1.toPrecision(3)
console.log(precision);

//5) valueOf return  as a number
let num1value = num1.valueOf();
console.log(num1value);
let num2value = num2.valueOf();
console.log(num2value);

//converting variables to numbers

// 1) Number() return a number 
let tr=Number(true);//boolean
console.log(tr);
let fl =Number(false);//boolean
console.log(fl);

let str1 ="2244";//string
console.log(Number(str1));

let da =new Date();//date
console.log(da);
console.log(Number(da));

let nl=null;//null
console.log(Number(n1));
//date,string,boolean can converted into number

 // 2) parseInt() returns a wholenumber 
  let num2int=parseInt(num2);
  console.log(num2int);

  // 3) parseFloat() retrun a floatingpoint
  let num1float=parseFloat(num1);
  console.log(num1float);

//number object methods
// 1)number.IsInteger() returns true if it is integer
 //let val1=53.989; 
 //let val = val1.IsInteger
//console.log(val);

//isSafeInteger()
//let val1=53.989; 
 //let val = isSafeInteger(val1);
//console.log(val);

