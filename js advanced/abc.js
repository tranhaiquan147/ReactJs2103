// let i = 6;
// while(i>0){
//     if(i%2!=0)
//     console.log(i);
//     i--;
// }
// do{
//     i--;
//     if(i%2!=0)
//     console.log(i);
// }while(i>0)

// function isSnt(n){
//     let i = 2,count=0;
//     snt1 = Math.floor(Math.sqrt(n))-1;
//     do{
//        if(n%i==0){
//            console.log("Không là số nguyên tố");
//            count++;
//            break;
//        }
//        i+=2;
//     }while(i<snt1)
//     if(count==0)
//     console.log('Số nguyên tố');
// }
// isSnt(31);
// dasds
// let snt = 104;
// let i = 2,count=0;
// snt1 = Math.floor(Math.sqrt(snt))-1;
// console.log(snt1);
// do{
//    console.log(i);
//    if(snt%i==0){
//        console.log("Không là số nguyên tố");
//        count++;
//        break;
//    }
//    i+=2;
// }while(i<snt1)
// if(count==0)
// console.log('Số nguyên tố');
// let a = (n)=>{
//   let sum=0;
//   for(let i=1;i<=n;i++){
//     sum+=i;
//   }
//   return sum;
// }
// console.log(a(3));
// let a = (n)=>{
//       let sum=0;
//       for(let i=1;i<=n;i++){
//         sum+=i*i;
//       }
//       return sum;
//     }
//     console.log(a(3));
let a = (n)=>{
   n=JSON.stringify(n);
   let arr=n.split('');
   console.log(arr.length);
   let count = 0;
   for(let i of arr){
     if(parseInt(i)%2!=0){
        count++;
        console.log('co so le');
        break;
     }
   }
   if(count==0)
   console.log('full so chan')
}
a(222432);



