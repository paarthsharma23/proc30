const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world , polygon_img , backgroundImg1;
var Stand , stand2 , polygon ; 
var block , block1 , block2 , block3 , block4 , block5 , block6 , block7 , block8 , block9 , block10 , block11 , block12 , block13 , block14 , block15 , block16 , block17 , block18 , block19 , block20 , block21 , block22 , block23 , block24 ; 
var slingshot ; 

function preload() {
// getTime();
polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1400,750);
    engine = Engine.create();
    world =  engine.world;

    ground = new Ground(700,746,1400,5);
    
    stand = new Ground(1200,300,300,10);
    
    stand2 = new Ground(700,500,400,10);
    
    block  = new Box(1200,249,50,50);
    World.add(world,block);
    block1  = new Box(1250,249,50,50);
    World.add(world,block1);
    block2  = new Box(1300,249,50,50);
    World.add(world,block2);
    block3  = new Box(1150,249,50,50);
    World.add(world,block3);
    block4  = new Box(1100,249,50,50);
    World.add(world,block4);

    block5  = new Box(1200,198,50,50); 
    World.add(world,block5);
    block6  = new Box(1250,198,50,50);
    World.add(world,block6);
    block7  = new Box(1150,198,50,50);   
    World.add(world,block7);

    block8  = new Box(1200,148,50,50); 
    World.add(world,block8);

    block9  = new Box(700,449,50,50);
    World.add(world,block9);
    block10  = new Box(750,449,50,50);
    World.add(world,block10);
    block11  = new Box(650,449,50,50); 
    World.add(world,block11);
    block12  = new Box(800,449,50,50); 
    World.add(world,block12);
    block13  = new Box(600,449,50,50); 
    World.add(world,block13);
    block18  = new Box(850,449,50,50); 
    World.add(world,block18);
    block19  = new Box(550,449,50,50); 
    World.add(world,block19);

    block14  = new Box(700,398,50,50);  
    World.add(world,block14);
    block15  = new Box(750,398,50,50);   
    World.add(world,block15);
    block16  = new Box(650,398,50,50);
    World.add(world,block16);
    block20  = new Box(800,398,50,50); 
    World.add(world,block20);
    block21  = new Box(600,398,50,50); 
    World.add(world,block21);

    block17  = new Box(700,347,50,50); 
    World.add(world,block17);
    block22  = new Box(750,347,50,50); 
    World.add(world,block22);
    block23  = new Box(650,347,50,50); 
    World.add(world,block23);

    block24  = new Box(700,298,50,50); 
    World.add(world,block24);
    
    polygon = Bodies.circle(100,300,40,p={isStatic:false ,
    restitution:0.8,
    density:4
    });
    World.add(world,polygon);

    slingshot = new SlingShot(polygon , {x:200,y:300} );
}

function draw(){
    background("grey");
    Engine.update(engine);

    ground.display();

    stand.display();

    stand2.display();

    block.display();  
    block1.display(); 
    block2.display();
    block3.display();
    block4.display();

    block5.display();
    block6.display();
    block7.display();

    block8.display();

    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block18.display();
    block19.display();

    block14.display();
    block15.display();
    block16.display();
    block20.display();
    block21.display();

    block17.display();    
    block22.display();
    block23.display();

    block24.display();

    imageMode(CENTER);
    image(polygon_img , polygon.position.x , polygon.position.y , 100 , 100);

    slingshot.display();
}

function mouseDragged(){
    // if (gameState!=="launched"){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
   // }
}


function mouseReleased(){
    slingshot.fly();
    // gameState = "launched";
}

function keyPressed(){
if(keyCode = 32){
slingshot.attach(polygon);
Matter.Body.setPosition(polygon, {x: 100 , y: 300});
}
}