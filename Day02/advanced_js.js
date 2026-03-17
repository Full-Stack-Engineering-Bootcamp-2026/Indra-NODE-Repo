const { resolve } = require("node:dns");

const original ={
    name :"book",
    id:123,
    price:99
}


const copy = original;

copy.name="updated";


console.log(original);
console.log(copy)    // it will share same reference type and sharing same object so, result will be affected on both object

const arr1 = [1,2,3,4,5];
const arr2 = [10,20,30,40,50];

const arr = [...arr1,...arr2];

console.log(arr);


const avgFunction = (...score)=>{
    let sum =0;
    for(let i of score) {

        sum = sum +i;
    }

    return sum / (score.length);
}

console.log("Average is: "+avgFunction(1,2,3,4,5));


function printObject({name,id,price}){

    console.log(name);
    console.log(id);
    console.log(price)
}

printObject(original)


const {0:num1,2:num2} = arr1;

console.log(num1)

console.log(num2)




const delay = (ms)=>{

    const promise = new Promise((resolve,reject)=>{
       
        setTimeout(() => {
            resolve("done")
        }, ms);
    }).then(()=>{
        console.log("Done Waiting!")
    })
}
delay(2000);