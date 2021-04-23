<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    // function.call("biến đại diện cho 'this'",các tham số truyền vào....)
    function greeting(name,age){
        return `My name is ${name},i am ${age} year old!`;
    }
    console.log(greeting.call(null,"Quang",20));

    // 
    function greeting2(local){
       return `My name is ${this.name},i am ${this.age} year old!,i'm from ${local}`;
    }
    var sv={
        name:"Quan",
        age:17
    }
    console.log(greeting2.call(sv,"quang tri"));
     // function.apply("biến đại diện cho 'this'",1 mảng....)
    function sum(){
        var arr = Array.from(arguments);
        return arr.reduce((a,b)=>{
            return a+b;
        },0);
    };
    function demoApply(){
        var x = sum.apply(null,arguments);
        return x/arguments.length;
    }
    console.log(demoApply(1,2,3,4,5));
</script>
</html>