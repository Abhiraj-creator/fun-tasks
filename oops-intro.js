class Biscuit{
    constructor(brand,smell,taste,shape,color){
        this.brand=brand;
        this.smell=smell;
        this.taste=taste;
        this.shape=shape;
        this.color=color;
    }
   
}
Biscuit.prototype.eat=function(msg){
    console.log(msg);
    
}
let b1= new Biscuit("parleG","sweet","sweet","round","skin");
let b2= new Biscuit("bikaner","sweet","sweet","rectangular","skin");
