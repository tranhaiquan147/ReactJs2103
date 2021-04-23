let cat = {
   name:"Tom",
   method: function(){
     console.log("Hello,my name is "+ this.name);
   }
};
function render(){
    let name=cat.method.bind(cat);
    name();
}
render();
