const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var backgroundImg;

var score = 0;


function preload()
{
    getBackgroundImage();
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(200,100);

    pink1 = new Pink(400,230);
    pink2 = new Pink(440,230);
    pink3 = new Pink(480,230);
    pink4 = new Pink(520,230);
    pink5 = new Pink(560,230);
    pink6 = new Pink(600,230);
    pink7 = new Pink(900,190);
    pink8 = new Pink(860,190);
    pink9 = new Pink(820,190);
    pink10 = new Pink(940,190);
    pink11 = new Pink(980,190);

    green1 = new Green(420,190);
    green2 = new Green(460,190);
    green3 = new Green(500,150);
    green4 = new Green(540,190);
    green5 = new Green(580,190);
    green6 = new Green(860,150);
    green7 = new Green(860,110);
    green8 = new Green(860,70);
    
    blue1 = new Blue(460,150);
    blue2 = new Blue(540,150);
    blue3 = new Blue(940,150);
    blue4 = new Blue(940,110);
    blue5 = new Blue(940,70);

    
    white1 = new White(500,190);
    white2 = new White(500,110);
    white3 = new White(900,150);
    white4 = new White(900,110);
    white5 = new White(900,70);

    ground1 = new Ground(500,260,260);
    ground2 = new Ground(600,380,1200);
    ground3 = new Ground(900,220,200);



    slingshot = new SlingShot(polygon.body,{x:200,y:100});
}

function draw()
{
    if(backgroundImg)

    {
        background(backgroundImg);
    }
        push();
        textSize(20);
        strokeWeight(1);
        stroke("red");
        fill("red");

        text("Score : " + score,40,20 )
        pop();
    
    Engine.update(engine);

    polygon.display();
    //pink
    pink1.display();
    pink2.display();
    pink3.display();
    pink4.display();
    pink5.display();
    pink6.display();
    pink7.display();
    pink8.display();
    pink9.display();
    pink10.display();
    pink11.display();
    pink1.score();
    pink2.score();
    pink3.score();
    pink4.score();
    pink5.score();
    pink6.score();
    pink7.score();
    pink8.score();
    pink9.score();
    pink10.score();
    pink11.score();
    //green
    green1.display();
    green2.display();
    green3.display();
    green4.display();
    green5.display();
    green6.display();
    green7.display();
    green8.display();
    green1.score();
    green2.score();
    green3.score();
    green4.score();
    green5.score();
    green6.score();
    green7.score();
    green8.score();
    //white
    white1.display();
    white2.display();
    white3.display();
    white4.display();
    white5.display();
    white1.score();
    white2.score();
    white3.score();
    white4.score();
    white5.score();
    //blue
    blue1.display();
    blue2.display();
    blue3.display();
    blue4.display();
    blue5.display();
    blue1.score();
    blue2.score();
    blue3.score();
    blue4.score();
    blue5.score();


    slingshot.display();
    ground1.display();
    ground2.display();
    ground3.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{ x:mouseX, y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}


function keyPressed()
{
    if(keyCode === 32)
    {
        Matter.Body.setPosition(polygon.body,{x:200,y:100});
        slingshot.attach(polygon.body);
    }
}


async   function getBackgroundImage()
{
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON.datetime);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour >= 06 && hour<= 18)
    {
        bg = "white.png";
    }
    else{ 
        bg = "black.png";
    }
    backgroundImg = loadImage(bg);


    console.log(backgroundImg);
}




















