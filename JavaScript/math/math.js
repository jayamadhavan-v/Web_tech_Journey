// console.log("math methods in js ");

// //  1. math.max();


// console.log(Math.max(8,1,2,4,5,7));


// // 2.math.min()

// console.log(Math.min(1,2,3,4,6,8,0));

// // 3.math.sqrt

// console.log(Math.sqrt(4));
// // math.abs

// console.log(Math.abs(-89.90));

// // math.pow

// console.log(Math.pow(10,2));


// // math.floor()

// console.log(Math.floor(12.9)); // cut the decimal

// // math.ceil()

// console.log(Math.ceil(12.4)); // round of it including decimal

// // math.round()

// console.log(Math.round(12.5)); // based on the decimal value it wil round of it 

// // math.random()
// console.log(Math.floor(Math.random()*9));
// console.log("**************************")
// for(i =0 ;i< 10;i++){
//     console.log(Math.floor(Math.random()*51)+20);
// }

// /*

// concepts behind the  random generation in range 
// lke 20 to 50 
// random will generate 0 to 1 so multiple  with 10 or which 9
// then add the start to it 
// then sub the start from the end 

// Math.floor(Math.random()*51)+20;

// why 51 ? 
// it will take the max as the 51 -1 = 50 so 50 will come 
// then sub the start from the end  
// so 51- 20 = 31 so 31 

// */




// console.log("--------otp-------")
// console.log("generate the 4 digit Otp");


// for(i = 0; i< 1000 ;i++){
//     console.log(Math.floor(Math.random()*900000 )+100000);
// }


let num = 456;

let cnum = num ;

let rev = 0;
while(cnum >0){
    let rem = Math.floor(cnum % 10);
    // console.log(rem);
    rev = (rev *10) +rem ;
    // console.log(rev);
    cnum = Math.floor(cnum/10);
    // console.log(cnum);
}
console.log(rev);