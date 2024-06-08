const Maap = new Map([
    [200,"apple"],
    [300,"orange"],
    [400,"mango"],
    [500,"grapes"]
]);


// console.log(Maap);
// console.log(Maap.get(300));
//////////////////////    MAP //////////////////
// set uses the concept of hashing to avoid the concept of duplicates4
 const alpha = new Set();
    alpha.add("a")
    alpha.add("b")
    alpha.add("a")
 
// console.log(alpha);
////////////////        CLASSSS //////////////////
class car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}

const car1 = new car("BMW",2020);

const car2 = new car("Audi",2021);
// console.log(car1, car2);

////////////PROMISE////////

const promise = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("this is inside a promise");
            resolve();
        },2000)
    })
}
promise()
.then(()=>{
    console.log("Resolved");
}).catch(()=>{
    console.error("error in promise");
});

 
const person = {
    name : "Rahul",
    age : 20,
    lastname :"sharma",
}
let aa  = Symbol("id");

person[aa] = 12345;

console.log(person);