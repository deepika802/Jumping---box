var canvas;
var music;
var surface1,surface2,surface3,surface4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);


    surface1 = createSprite(100,570,200,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(350,570,200,20);
    surface2.shapeColor = "pink";

    surface3 = createSprite(600,570,200,20);
    surface3.shapeColor = "green";

    surface4 = createSprite(850,570,200,20);
    surface4.shapeColor = "yellow";
    //create 4 different surfaces

    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX =  4;
    ball.velocityY = 9;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    edges = createEdgeSprites();

    surface1.bounceOff(edges);
    surface2.bounceOff(edges);
    surface3.bounceOff(edges);
    surface4.bounceOff(edges);

    ball.bounceOff(edges);

   

    if(ball.isTouching(surface1) && ball.bounceOff(surface1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(ball.isTouching(surface2) && ball.bounceOff(surface2)){
        ball.shapeColor = "pink";
        music.play();
    }

    if(ball.isTouching(surface4) && ball.bounceOff(surface4)){
        ball.shapeColor = "yellow";
        music.play();
    }

    if(ball.isTouching(surface3) && ball.bounceOff(surface3)){
        ball.shapeColor = "green";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(ball.isTouching(surface2) && ball.bounceOff(surface2)){
        ball.shapeColor = "green";
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

   drawSprites();

    //add condition to check if box touching surface and make it box
}
