class PC {

    constructor(){

        this.positionX = 0;
        this.positionY = 0;
        this.width = 0;
        this.height = 0;

    }

    display(){

        rect(this.positionX, this.positionY, this.width, this.height);

    }

}