#### javascript 

* javascript is one programming language used to to add functionality in our webpage that is created by html and  css.

## How many ways we can write js code ..?

* we can write js code in two ways . 
    1. Internal javascript
    2. external javascript

### Internal javascript 

* it is the process of writing the js code inside the html file .
* for this we need `<script>` tag
* this tag should bre written inside the body tag at the end .

### external javascript
* it is the process of writting js 
* after tht the js file we have to connect with html file by using `<script><script>` tag.

## tokens 
* tokens are the basic building block of any language .
  
  tokens are categorized in 5 types:
  1. keywords 
  2. identifiers
  3. literal 
  4. separator
  5. operator

## 1.keywords

* keywords are predefined words / reserved words which should be written in lowercase.
* keywords can not be used as identifiers .


## variable 
* variable is a container where we can store th data .
* in javascript for declaring variable we need to `var`,`let` and `const` keywords.

### var keyword 

* by using this keyword we can declare, we can initial , re-initial and *re-declare* any variable .

### let keyword 

* by using `let` keyword we can perform declare, we can initial , re-initial and *re-declare* but we can't perform the **re-declaration** .

### const keyword  

* `const` keyword is used to declare constant  value , we can't change the value for the variable .
* here we can't perform **re-declaration**  and **re-initialize** .
* here **declaration and initialization** should be done in the same line .

```js 
    console.log("variable in javascript");

// 1. var keyword 

var sname;

sname = "madhavan";

console.log(sname);


//  2.let keyword 


let ename;

ename = "teju";

console.log(ename);

let _us = "teju & madhvan ";

console.log(_us);


//  redeclaration of let and var keywords 


let _first;

_first = "first ";

// let _first;


//  var 

var _second;

_second = "second";

// var _first ; // 

var _second;


//  1. primitive dType 

// 1.number 

let _number = 2;

console.log(_number);

// 2.string 


let _string = "this is an string ";

console.log(_string);


//  string in back tip 


let _backTick = `this string in backSlash `;

console.log(_backTick);

console.log(`we can use the back tick to multi line string `);

// ! string interpolation and template literals 


let a  = 10 ;
let b = 20 ;

let sum  = a+b ;

console.log(`The addition of ${a} and ${b} is ${sum}`);


// 3 .boolean 

let _isPlayer = true;

let _isMarried = false;

console.log(typeof _isMarried);
console.log(typeof _isPlayer);

//  4 . undefined ;

let _reserveTheSpace  = undefined;

console.log(_reserveTheSpace
);

// 5 . null

let _null = null;

// 7. bigint

let _bigint = 123456789012345678901234567890123456789123456789012345678901234567890;

console.log(_bigint );

// non - primitive datatypes 

console.log(`1.function and method 
    2.array 
    3.object`);
```

## datatype
* `datatype` is used to know what kind or what type of data can be store .
* In js we have two types .
    1. primitive datatype.
    2. non-primitive datatype.

### how to know / check datatype in js  ?
* to check the datatype of any variable we have to use **type of** operator.
* 

### primitive datatype 

#### 1. number datatype
  * In js both decimal and non-decimal value are called as number datatype.


```js 
 let age  = 10 ;
 let height  = 5.7 ;

 console.log(typeof age );
```


#### 2.string datatype 

  * `string` is the collection of single or multi line character enclosed with single quote(`''`) or double quote (`""`) or backticks(```).
  * by using backtricks we can take multiline string and we can do **string Interpolation**.

```js 
//  string in back tip 


let _backTick = `this string in backSlash `;

console.log(_backTick);

console.log(`we can use the back tick to multi line string `);

// ! string interpolation and template literals 


let a  = 10 ;
let b = 20 ;

let sum  = a+b ;

console.log(`The addition of ${a} and ${b} is ${sum}`);

```

#### what is string interpolation and template literals

* it is the process of accessing any value of variable inside the string .
* for this we have take string by using the back tricks and the variable we will access that should be wrapped by `${}`.


### 3. boolean 

* it can accepts only the true /false .

### 4.undefined 
* any variable that is declared but not initialize is called as undefined