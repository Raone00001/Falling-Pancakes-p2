class Pancakes {

    constructor(x,y,r,angle){

        var options = {

            'restitution': 0.001,
            'friction':0.5,
            'density': 0.2

        }

        this.r = 0.05;
        this.image = loadImage("Images/Pancake 2.png");
        this.pancakes = Bodies.circle(x,y,0.05,options);
        World.add(world,this.pancakes);

    }

    updatePancake(){

        if(this.pancakes.position.y > height){

            Matter.Body.setPosition(this.pancakes, {x:random(0,400), y:random(0,400)})
        }

    }

    display(){

        var pos = this.pancakes.position;
        var angle = this.pancakes.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();

    }

}