const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ground2;

var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);

    var ball_options = {
        restitution: 1.5
    }
    ball = Bodies.circle(200,200,30,ball_options);
    console.log(ball);
    World.add(world,ball);
    
    var ground2_options = {
        isStatic: true
    }
    ground2 = Bodies.rectangle(200,10,400,20,ground2_options);
    World.add(world,ground2);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(RADIUS);
    ellipse(ball.position.x,ball.position.y,30,30);
    rectMode(CENTER);
    rect(ground2.position.x,ground2.position.y,400,20);
}