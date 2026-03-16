const name ="Indra";
const age = 23;
const hobby = "cricket"

console.log("Hi, I'm "+name+",I'm "+age+" years old and I love "+hobby+".")


const square = (n)=>n*n;

console.log(square(5));

const isEven = (n)=>{
    if(n%2==0) return true;
    else return false;
}


console.log(isEven(90));


const fruits = ["Apple","Mango","Banana","Watermelon","Grapes"];

console.log(fruits.map((p)=> p.toUpperCase()))

console.log(fruits.filter((f)=>f.length>5))


const student = {
    name : "Indra",
    course: "MERN",
    year:2026
}

console.log(student.name);
console.log(student.year);
console.log(student.course);