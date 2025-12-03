// class Biscuit{
//     constructor(brand,smell,taste,shape,color){
//         this.brand=brand;
//         this.smell=smell;
//         this.taste=taste;
//         this.shape=shape;
//         this.color=color;
//     }
//     eat(){
//         console.log("you are eating biscuit");
//     }
// }

// let b1= new Biscuit("parleG","sweet","sweet","round","skin");
// let b2= new Biscuit("bikaner","sweet","sweet","rectangular","skin");

// obj.ai()

1//console.log(this);// window
2// function abc(){
//     console.log(this);
    
// }
// abc() window
3// let obj={
//     name:"abhi",
//     age:19,
//     some:function(){
//         console.log(this);
        
//     }
// }
// obj.some() this value is object
4// let obj={
//     name:"abhi",
//     age:19,
//     some:()=>{
//         console.log(this);
//     }
// }
// obj.some() window
5// let obj={
//     name:"abhi",
//     age:19,
//     some:function(){
//         function something(){
//             console.log(this);
            
//         }
//         something()
        
//     }
// }
6 // obj.some(); window
// let obj={
//     name:"abhi",
//     age:19,
//     some:function(){
//       let something=()=>{
//         console.log(this);
        
//        }
//         something()
//     }
// }
// obj.some() object



let obj={
    name:"abhi",
    age:19,
   some:function(){
    let some1=()=>{
        console.log(this);
        
    }
    some1();
   }
}
let binded_fnc=obj.some.bind(obj)
binded_fnc()
