////////////////////////////////////////////////// b0
// let snt =501;
// let i = 2,count=0;
// let snt1 = Math.floor(Math.sqrt(snt))-1;
// do{
//    if(snt%i==0){
//        console.log("Không là số nguyên tố");
//        count++;
//        break;
//    }
//    i++;
// }while(i<=snt1)
// if(count==0)
// console.log('Số nguyên tố');
////////////////////////////////////////////////// b1
// let i = 6;
// do{
//     console.log(i);
//     i--;
// }while(i>=0)
////////////////////////////////////////////////// b2
// let i = 6;
// do{
//     i--;
//     if(i%2!=0)
//     console.log(i);
// }while(i>0)
////////////////////////////////////////////////// b3
// let i = 6;
// do{
//     i--;
//     if(i%2==0)
//     console.log(i);
// }while(i>0)
/////////////////////////////////////////////////b4
// let a=(n)=>{
//     for(let i=3;i<=n;i+=2){
//         let count = 0;
//         for(let j=2;j<=Math.sqrt(i);j++)
//           if(i%j==0){
//               count++;
//               break;
//           }
//         if(count==0)
//             console.log(i);
// }
// }
// a(500);
////////////////////////////////////////////////// b5
// let a = (n)=>{
//   let sum=0;
//   for(let i=1;i<=n;i++){
//     sum+=i;
//   }
//   return sum;
// }
// console.log(a(3));
////////////////////////////////////////////////b6
// let a = (n)=>{
//       let sum=0;
//       for(let i=1;i<=n;i++){
//         sum+=i*i;
//       }
//       return sum;
//     }
//     console.log(a(3));
// ///////////////////////////////////////////////b7
// let a = (n)=>{
//    let sum=0;
//    for(let i=1;i<=n;i+=2){
//      sum+=i;
//    }
//    return sum;
//  }
//  console.log(a(10));
// ///////////////////////////////////////////////b8
// let a = (n)=>{
//    n=JSON.stringify(n);
//    let arr=n.split('');
//    console.log(arr.length);
//    let count = 0;
//    for(let i of arr){
//      if(parseInt(i)%2!=0){
//         count++;
//         console.log('co so le');
//         break;
//      }
//    }
//    if(count==0)
//    console.log('full so chan')
// }
// a(222432);
