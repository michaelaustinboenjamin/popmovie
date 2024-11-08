const profile={
    firstname:"Jog",
    lastname:"ger",
    age:21
}
const {firstname,lastname,age}=profile;
console.log(firstname,lastname,age);
const favorites=["Ice cream","Fried Chiken","nugget","Fruits"];
const[,,thirdFood,forthFood]=favorites;
console.log(thirdFood,forthFood);
let a=1,b=2;
console.log("Sebelum swap");
console.log("nilai a : "+a);
console.log("nilai b : "+b);
[a,b]=[b,a];
console.log("reverse");
console.log("nilai a : "+a);
console.log("nilai b : "+b);
