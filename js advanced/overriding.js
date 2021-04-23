class makeCoffee{
    makeCoffeeMachine() {
        console.log("make coffee");
    }
}

class specialMakeCoffee extends makeCoffee{
    makeCoffeeMachine(cb){
        console.log("make special coffee");
        cb();
    }
}
var i = 0;
const trungnguyenCf = new specialMakeCoffee;
const quankuteCf = new makeCoffee
trungnguyenCf.makeCoffeeMachine(()=>{
    var i = 0;
    var stop = setInterval(()=>{
       console.log(i);
       i++;
       if(i==5){
           console.log("call the boss");
           clearInterval(stop);
       }
    },1000);
});
quankuteCf.makeCoffeeMachine();