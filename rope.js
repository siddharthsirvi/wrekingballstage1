class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 200
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB=pointB
    }

    fly(){
this.chain.bodyA=null;

    }
    display(){
   if (this.chain.bodyA) {
       

        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight();
        line(pointA.x, pointA.y, pointB.x, pointB.y);
   }
    }
    
}