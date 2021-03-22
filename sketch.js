var cue, cueBall, poolTable;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12, ball13, ball14, ball15;
var edges;
var gameState = "play";
var balls = []
var poolTableImage, cueImage, cueBallImage, blackBallImage, redBallImage, yellowBallImage;
var cushion1, cushion2, cushion3, cushion5;
var pocket1, pocket2, pocket3, pocket4, pocket5, pocket6;
var timeFlag="stop",time = 150


function preload() {
  poolTableImage = loadImage("assets/poolTable.png");
  cueImage = loadImage("assets/cue.png");
  cueBallImage = loadImage("assets/cueBall.png");
  blackBallImage = loadImage("assets/blackBall.png");
  redBallImage = loadImage("assets/redBall.png");
  yellowBallImage = loadImage("assets/yellowBall.png");

}

function setup() {
  createCanvas(1435, 736);

    
  cue = createSprite(180, 368, 350, 5);
  //cue = createSprite(717.5, 368, 350, 5);
  cueBall = createSprite(395, 368, 20, 20);
  //cueBall = createSprite(717.5,  368, 20, 20);
  ball1 = createSprite(972, 368, 20, 20);
  ball2 = createSprite(1006, 348, 20, 20);
  ball3 = createSprite(1006, 388, 20, 20);
  ball4 = createSprite(1040, 328, 20, 20);
  ball5 = createSprite(1040, 368, 20, 20);
  ball6 = createSprite(1040, 408, 20, 20);
  ball7 = createSprite(1074, 308, 20, 20);
  ball8 = createSprite(1074, 348, 20, 20);
  ball9 = createSprite(1074, 388, 20, 20);
  ball10 = createSprite(1074, 428, 20, 20);
  ball11 = createSprite(1108, 288, 20, 20);
  ball12 = createSprite(1108, 328, 20, 20);
  ball13 = createSprite(1108, 368, 20, 20);
  ball14 = createSprite(1108, 408, 20, 20);
  ball15 = createSprite(1108, 448, 20, 20);

  cue.addImage(cueImage)
  cueBall.addImage(cueBallImage)
  ball1.addImage(redBallImage);
  ball2.addImage(yellowBallImage);
  ball3.addImage(yellowBallImage);
  ball4.addImage(redBallImage);
  ball5.addImage(blackBallImage);
  ball6.addImage(redBallImage);
  ball7.addImage(redBallImage);
  ball8.addImage(yellowBallImage);
  ball9.addImage(redBallImage);
  ball10.addImage(yellowBallImage);
  ball11.addImage(yellowBallImage);
  ball12.addImage(redBallImage);
  ball13.addImage(yellowBallImage);
  ball14.addImage(redBallImage);
  ball15.addImage(redBallImage);

  cushion1 = createSprite(68,367,20,500);
  cushion2 = createSprite(1368,367,20,500);
  cushion3 = createSprite(404,60,550,20);
  cushion4 = createSprite(1032,60,550,20);
  cushion5 = createSprite(404,673,550,20);
  cushion6 = createSprite(1032,673,550,20);

  pocket1 = createSprite(60,50,10,10);


  cushion1.visible = false
  cushion2.visible = false
  cushion3.visible = false
  cushion4.visible = false
  cushion5.visible = false
  cushion6.visible = false

  cue.scale = 0.7

  //ball1.debug = true
  //ball5.debug = true
  cue.setCollider('rectangle',460,0,5,5);

  cueBall.setCollider('rectangle',0,0,40,40,270);
  ball1.setCollider('circle',0,0,19);
  ball2.setCollider('circle',0,0,19);
  ball3.setCollider('circle',0,0,19);
  ball4.setCollider('circle',0,0,19);
  ball5.setCollider('circle',0,0,19);
  ball6.setCollider('circle',0,0,19);
  ball7.setCollider('circle',0,0,19);
  ball8.setCollider('circle',0,0,19);
  ball9.setCollider('circle',0,0,19);
  ball10.setCollider('circle',0,0,19);
  ball11.setCollider('circle',0,0,19);
  ball12.setCollider('circle',0,0,19);
  ball13.setCollider('circle',0,0,19);
  ball14.setCollider('circle',0,0,19);
  ball15.setCollider('circle',0,0,19);

  //ball1.debug = true

  cue.debug = true
  //cueBall.debug = true
  



    

  edges = createEdgeSprites();

    

  balls = [ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12, ball13, ball14, ball15]

}

function draw() {

  

    cueBall.bounceOff(cushion1)
    cueBall.bounceOff(cushion2)
    cueBall.bounceOff(cushion3)
    cueBall.bounceOff(cushion4)
    cueBall.bounceOff(cushion5)
    cueBall.bounceOff(cushion6)
    
    background(poolTableImage);
    cue.x = mouseX;
    cue.y = mouseY;

    if (gameState === "play") {
        cue.pointTo(cueBall.x, cueBall.y);
    } 
    //console.log("Cue direction-->"+cue.x + " " + cue.y);

    if (cue.isTouching(cueBall) && timeFlag==="stop") {
    
      cueBall.setSpeedAndDirection(-20);
      gameState = "end";
      timeFlag = "start"
    }

    cueBall.pointTo(cue.x, cue.y);

    if(timeFlag === "start"){
       time--;
     /*  for (var i = 0; i < balls.length; i++) {
         var s =balls[i].getSpeed()
        balls[i].setSpeedAndDirection(s--)
       // cueBall.setSpeedAndDirection(cueBall.getSpeed()-=5)

      }*/
      cue.visible = false
    }
    if(time===0 ){
      timeFlag = "stop"
      time = 150
    }
    if(timeFlag === "stop"){
      for (var i = 0; i < balls.length; i++) {
        balls[i].setVelocity(0,0)
        cueBall.setVelocity(0,0)
        cue.visible = true
        cue.pointTo(cueBall.x, cueBall.y);
        
      }
    }

    for (var i = 0; i < balls.length; i++) {
      for (var j = i + 1; j < balls.length; j++) {
        balls[i].bounce(balls[j]);
        balls[i].bounceOff(cushion1);
        balls[i].bounceOff(cushion2);
        balls[i].bounceOff(cushion3);
        balls[i].bounceOff(cushion4);
        balls[i].bounceOff(cushion5);
        balls[i].bounceOff(cushion6);
        cueBall.bounce(balls[i])
      }
    }

    

  /*  for (var i = 0; i < balls.length; i++) {
      if (balls[i].velocityX != 0 || balls[i].velocityY != 0) {
        if (balls[i].velocityX > 0)
             balls[i].velocityX-=90;
        if (balls[i].velocityX < 0)
             balls[i].velocityX+=90;
        if (balls[i].velocityY > 0)
             balls[i].velocityY-=90;
        if (balls[i].velocityY < 0)
             balls[i].velocityY+=90;

      }
    }*/

    //console.log(balls[0].velocityX)

    

    if (cueBall.isTouching(pocket1)) {
      cueBall.visible = false
    }
    if(cueBall.x < 0 || cueBall.x > width || cueBall.y > height || cueBall.y <0 ){
       cueBall.x = 395
       cueBall.y = 368
       cueBall.setVelocity(0,0)
    }

    //console.log(cue.x + "x")
    //console.log(cue.y + "y")
  
  drawSprites();
  


  }