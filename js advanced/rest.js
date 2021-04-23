function concat(a,...items){
    return items.join(a);
}
const items = ['a','b','c','d','e','f'];
console.log(concat('.','a','b','c','d','e','f'));
// let quan={
//     name:"Tran Hai Quan",
//     age:22,
//     local:"Quang Tri"
// }
// let Quan2 ={
//     ...quan
// }
// Quan2.age=25;
// console.log(quan,Quan2)

// function concat2(a){
//     var arr = Array.from(arguments)
//     return arr.join(a);
// }
// console.log(concat('.','a','b','c','d','e','f'));