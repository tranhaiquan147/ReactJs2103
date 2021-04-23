
    function sum(){
        console.log(arguments);
        let result=0;
        for(let i=0;i<arguments.length;i++)
           result+=arguments[i]
        return result;
    }
    console.log(sum(1,2,4,5,76,89,6,5,4));

    function sum2(){
        var arr = Array.from(arguments);
        return arr.reduce((a,b)=>{
            return a+b;
        },0);
    }
    console.log(sum2(1,2,4,5,76,89,6,5,4));
    
    var hehe={
        0:12,
        1:22,
        2:32,
        3:42,
        4:52,
        5:62,
        6:72,
        length:7
    }
    for(var i=0;i<hehe.length;i++)
      console.log(hehe[i]);