let arr = [1,2,3,4,5];
let [a,,,,e] = arr;
console.log(a,e);

let arr2 = [1,2,3,4,5];
let [g,...h] = arr2;
console.log(g,h);

let student = {
    aaa:'quan111',
    b:'linh',
    c:'ky',
    d:'yen',
    e:'nhi'
}
let {a:x,b:y,c:z}=student;
console.log(x,y,z);
let {aaa}=student;
console.log(aaa);
// let quan={...student};
// quan.a='nhi';
// console.log(quan,student);

