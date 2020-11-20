const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;;
const Constraint = Matter.Constraint;
var engine, world;
var ground, ball;

function preload(){
    polygonImage = loadImage("polygon.png");
}
function setup(){
     createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground();
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
    boxx1 = new Box(640,175,30,40);
    boxx2 = new Box(670,175,30,40);
    boxx3 = new Box(700,175,30,40);
    boxx4 = new Box(730,175,30,40);
    boxx5 = new Box(760,175,30,40);
    boxx6 = new Box(670,135,30,40);
    boxx7 = new Box(700,135,30,40);
    boxx8 = new Box(730,135,30,40);
    boxx9 = new Box(700,95,30,40);
    ball = Bodies.circle(50,200,20);
    World.add(world,ball)

/*var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);*/
    
    slingshot = new SlingShot(this.ball,{x : 100,y : 200
    })
   
    
}

function draw(){
    
    background(56,44,44);
    Engine.update(engine);
    
    slingshot.display();
    imageMode(CENTER);
    image(polygonImage,ball.position.x,ball.position.y,40,40);
    ground.display();
    stand1.display();
    stand2.display();
    fill("skyBlue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("yellow");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("pink");
    box13.display();
    box14.display();
    box15.display();
    fill("grey");
    box16.display();
    fill("skyBlue");
    boxx1.display();
    boxx2.display();
    boxx3.display();
    boxx4.display();
    boxx5.display();
    fill("yellow");
    boxx6.display();
    boxx7.display();
    boxx8.display();
    fill("pink");
    boxx9.display();
    
   // ellipseMode(RADIUS);
   // ellipse(ball.position.x, ball.position.y, 20, 20);
  
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x : mouseX,y : mouseY})
}
function mouseReleased(){
    slingshot.flight();
}
