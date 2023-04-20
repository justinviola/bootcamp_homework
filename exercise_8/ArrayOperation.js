let names = ["Greg","Mary","Devon","James"];

// for(let n in names){
//     console.log(names[n])
// }
for(let n=0;n<names.length;n++){
    console.log(names[n])
}
names.pop();
console.log(names)
names.pop(); //The pop() method removes the last element from an array
console.log(names)
names.unshift("Matt"); //The unshift() method adds new elements to the beginning of an array
console.log(names)
names.push("Viola"); //The unshift() method adds new elements to the beginning of an array
console.log(names)
for(let n=0;n<names.length;n++){
    console.log(names[n])
    if(names[n]=="Mary") {
        break
    }
}
const newNames = names.slice(1,2)
console.log(newNames)
console.log(names)
console.log("Index of Mary is :" + names.indexOf("Mary"))
console.log("Index of Foo is :" + names.indexOf("Foo"))
names = ["Greg","Mary","Devon" , "James"];
console.log(names)
names.splice(2,1,"Elizabeth", "Artie")
console.log(names)
var withBob = names.concat("Bob");
console.log(withBob)
console.log(withBob.toString())