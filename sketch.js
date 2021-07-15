 var runner, runner_moving;
 var power, path, energyDrink, coin, bomb;

 function preload(){
  //pre-load images
 runner_moving = loadImage("runner-1.png", "runner-2.png");
 backgroundImage = loadImage("path.png", "power.png", "energyDrink.png", "coin.png", "bomb.png");

 }

 function setup () {
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(backgroundImage);
  path.velocityY = 4

  runner = createSprite(300, 300);
  runner.addImage(runner_moving);
  runner.scale = 0.1;
  runner.x = mouseX;
 }

 function draw() {
  background(0);

  drawSprites()

 }
