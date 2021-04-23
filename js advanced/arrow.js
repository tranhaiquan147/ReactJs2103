
    // k xác định được "this.name" 
    // let car = {
    //     name:"Lamborghini Aventador SV",
    //     method:function(){
    //         var a = function(){
    //         console.log("This car is: " + this.name);
    //         }
    //         a();
    //     }
    // }
    // cách 1:
    // let car = {
    //     name:"Lamborghini Aventador SV",
    //     method:function(){
    //         var a = function(){
    //         console.log("This car is: " + this.name);
    //         };
    //         a.bind(car)();
    //     }
    // }
    // cách 2: dùng hàm mũi tên,vì hàm mũi tên nến k có tham số truyền vào thì nó sẽ lấy tham số của thằng cha để add vào
    // let car = {
    //     name:"Lamborghini Aventador SV",
    //     method:function(){
    //         var a = ()=>{
    //         console.log("This car is: " + this.name);
    //         };
    //         a();
    //     }
    // }




    // car.method();

    // bài tập ví dụ
    let car = {
        name:"Lamborghini Aventador SV",
        method:function(){
           setInterval(()=>{
             console.log("This car is:"+this.name);
           },2000);
        }
    }
    // let car = {
    //     name:"Lamborghini Aventador SV",
    //     method:function(){
    //        setInterval(function(){
    //          console.log("This car is:"+this.name);
    //        }.bind(car),2000);
    //     }
    // }
    car.method();