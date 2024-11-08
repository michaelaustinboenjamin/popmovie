const favorites=["Ice cream","Fried Chiken","nugget","Fruits"];
const dislikes=["Sour vegeteble","veggies","More veggies"];
const favandnot=["Favorites =",...favorites,"Dislikes =",...dislikes];
console.log(favandnot);
const obj1={
    firstname:"Obi",
    age:30
};   const obj2={
    lastname:"ken",
    gender:"Male"
};
const obj={...obj1,...obj2};
console.log(obj);