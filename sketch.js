var player, playerIMG;

var pancake, pancakeIMG;
var pancakeGroup;

var bgIMG;

var score = 0;
var goal = 1000;

var canvas;

function preload() {

    playerIMG = loadImage("Images/Plate 2.png");
    pancakeIMG = loadImage("Images/Pancake 2.png");
    
    bgIMG = loadImage("Images/Background Image 2.jpg");

}

function setup(){
    canvas = createCanvas(1200,500);

    player = createSprite(600, 450, 10, 10);
    player.addImage("player", playerIMG);
    player.scale = 0.3;

    pancakeGroup = new Group();

    //player.debug = true;
    player.setCollider("rectangle", 0, 0, 10, 10);

}

function draw(){
    background(bgIMG);

    fill("White");
    textSize(25);
    textFont("Cinzel");
    text("Score: " + score, 5,20);
    text("Goal: " + goal, 1080, 490);

    spawnPancake();

    if (keyDown(LEFT_ARROW)){

        player.x = player.x-10;

    } else if (keyDown(RIGHT_ARROW)){

        player.x = player.x+10;

    }

    if (pancakeGroup.isTouching(player)){

        pancake.destroy();
        score = score+25;

    } else if (pancakeGroup >= height){

        score = score-10;
        pancake.destroy();

    }

    drawSprites();

}

function spawnPancake(){

    if(frameCount % 60 === 0) {

        pancake = createSprite(600,50,10,40);
        pancake.x = Math.round(random(0, 1200));
        pancake.addImage("pancakes", pancakeIMG);

        //pancake.debug = true;

        pancake.scale = 0.05;
        pancake.velocityY = 10;

        //pancake.velocityY = -(6 + 3*score/100);
        pancakeGroup.add(pancake);
        
    }

}