var iss
var spacecraft
var hasDocked = false

function preload() {
  issImg = loadImage("Docking-undocking/iss.png")
  bgImg = loadImage("Docking-undocking/spacebg.jpg")
  
  
  
  spacecraft1Img = loadImage("Docking-undocking/spacecraft1.png")
  spacecraft2Img = loadImage("Docking-undocking/spacecraft2.png")
  spacecraft3Img = loadImage("Docking-undocking/spacecraft3.png")
  spacecraftImg = loadImage("Docking-undocking/spacecraft4.png")


}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg)
  iss.scale = 0.5

  spacecraft = createSprite(400,250,50,30)
  spacecraft.addImage(spacecraft1Img)
  spacecraft.scale = 0.2
}

function draw() {
  background(bgImg)
  



  if(!hasDocked) {
    spacecraft.x = spacecraft.x+random(-1,1)

    if(keyDown(LEFT_ARROW)) {
      spacecraft.addImage(spacecraft3Img)
      spacecraft.x-=1
    }

    if(keyDown(RIGHT_ARROW)) {
      spacecraft.addImage(spacecraft2Img)
      spacecraft.x+=1
    }

    if(keyDown(DOWN_ARROW)) {
      spacecraft.addImage(spacecraft1Img)
      
    }

    if(keyDown(UP_ARROW)) {
      spacecraft.y-=1
    }


    if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)) {
      hasDocked = true
      textSize(25)
      fill("white")
      text("Docking Successful",200,300)

    }

   







  }
  drawSprites();
}