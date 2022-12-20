"use strict";
// q1
// let a = "Pakistan";
// a = 9;
// console.log(a);
// q2
// const a = 5
// a++;
// console.log(a);
// q3
// if(true){
//     let a = 4;
// }else{
//     let a = "string";
// }
// console.log(a);
// q4
// var a : number ="7";
// a = 9;
// console.log(a);
// q5
// let myType = {name:"sia", id:1}
// myType = {id:2 , name:"Tom"}
// myType = {id:3, name:"Mike"}
// console.log(myType);
// q7
// let myType:any = {name:"zia", id:1}
// myType = {id:2,name:"Tom" }
// myType = {id:3,name:"Mike", gender:false }
// myType = {id:4,gender:false }
// console.log(myType);
// q8
// let myType = <any> {name:"zia", id:1}
// myType = {id:3, name:"TOm"}
// myType = {id:4, name:"Mike",gender:false}
// myType = {id:2, gender:false}
// q9
// let notSure : any = 4
// notSure = "Maybe a string instead"
// notSure = false
// console.log(notSure);
// q10
// enum Color {Red = 1, Green, Blue}
// var colorName:string = Color[2]
// console.log(colorName);
// q11
// enum Color2 {Red = 1, Green=2, Blue=4}
// var c = Color2["Blue"]
// console.log(colorIndex);
// q12
// enum Color1 {Red = 1, Green, Blue}
// var colorName:string = Color[2];
// console.log(colorName);
// q13
// var myAdd :(baseValue:number,increment:number)=> number = 
// function(x:number,y:number):number{return x+y};
// q14
// var buildName :(firstName:string, lastName?:string)=> string = 
// function(firstName:string,lastName="khan"):string {
//     if(lastName)
//     return firstName+ "" + lastName;
//     else
//     return firstName
// }
// console.log(buildName("saddam","hussain"));
// q15
// var buildNameFunc:(...rest:string[],fname:string)=>string=
// function (...restOfName:string[],firstName:string){
//     return firstName+""+restOfName.join("");
// }
// console.log(buildNameFunc("khan","zia","U."));
// q16
// function myCallBack(text:string){
//     console.log("inside myCallback"+text);
// }
// function callingFunction(initialText:string,callback:(text:string)=>void){
//     callback(initialText)
// }
// callingFunction("myText",myCallBack)
// q17
// function pickCard(x:{suit:string; card:number;}[]):number;
// function pickCard(x:number):{suit:string;card:number;};
// function pickCard(x):any {
//     if(typeof x === "object"){
//         var pickCard = Math.floor(Math.random()*x.length)
//         return pickCard;
//     }else
//     if (typeof x === "number"){
//         var pickCard = Math.floor(x%13)
//     }
// }
// q18
//  var x:any = "Tom "
//  if (typeof x ==="string"){
//     console.log(x.length);
//  }
// q19
// function addWithUnion(arg1:string | number | boolean):string |number|boolean{
//     if(typeof arg1 === "string"){
//         return arg1+"Hello";
//     }
//     if(typeof arg1 === "number"){
//         return arg1+10;
//     }
//     if(typeof arg1 === "string"){
//         return arg1 && false;
//     }
// }
// q20
// var f : (string)=> string;
// f= x=>'(+x+)';
// var h : ((string)=>string)[]
// h = [];
// h.push(f);
// console.log(h[0]("h"));
// q21
// let myType = {name:"zia",id:1};
// myType = {id:2,name:"Tom"}
// myType = {id:3,myname:"Mike"}
// q22
// var a:{foo:number};
// var a1 = {foo:1,baz:2}
// a = a1;
// q23
// let c = ((a,b)=>++a)(1,2);
// console.log(c);
// q24
// var myFunction = f => {this.x = "x";};
// q25
// interface Animal {name:string}
// interface Cat extends Animal{meow();}
// function isCat (a:Animal): a is cat {
//     return true
// }
// var x : Animal;
// if(isCat(x)){
//     x.meow();
// }
// q26
// type CallbackWithString = (string) => void;
// function usingCallback (f:CallbackWithString ){
//     f("this is a string")
// }
// q27
// let x :{id:number,[name:string]:any};
// let y = {id:1,fullname:"Zia"};
// x = y;
// console.log(x);
// q28
let myType = { name: "zia", id: 1 };
let myType1 = { id: 2, name: "Tom", age: 22 };
myType = myType1;
