var cat, catImg, catAni,catImg2
var mouse, mouseImg, mouseAni, mouseImg2
var ground,groundImg

function preload() {
    catImg = loadImage("images/cat1.png")
    catAni = loadAnimation("images/cat2.png" , "images/cat3.png")
    catImg2 = loadAnimation("images/cat4.png")
    mouseImg = loadImage("images/mouse1.png")
    mouseAni = loadAnimation("images/mouse2.png" , "images/mouse3.png")
    mouseImg2 = loadAnimation("images/mouse4.png")
    groundImg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);

    ground = createSprite(500,400,1000,800)
    ground.addImage("garden",groundImg)

    cat = createSprite(800,600,10,10)
    cat.addImage("Tom",catImg)
    cat.scale = 0.2

    mouse = createSprite(200,600,10,10)
    mouse.addImage("Jerry",mouseImg)
    mouse.scale = 0.2

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(isTouching()){
        console.log(isTouching())
        cat.addAnimation("TomH",catImg2)
        cat.changeAnimation("TomH")
        mouse.addAnimation("JerryH",mouseImg2)
        mouse.changeAnimation("JerryH")
        cat.velocityX = 0
        cat.x = 320
    }
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
    if(keyCode == LEFT_ARROW){
        mouse.addAnimation("Jerry2",mouseAni)
        mouse.changeAnimation("Jerry2")
        mouse.frameDelay = 20
        cat.addAnimation("Tom2",catAni)
        cat.changeAnimation("Tom2")
        cat.frameDelay = 5
        cat.velocityX = -4

    }

}

function isTouching(){
    if(cat.x - mouse.x < cat.width/2 + mouse.width/2){
        return true
    }
    else{
        return false
    }
}
