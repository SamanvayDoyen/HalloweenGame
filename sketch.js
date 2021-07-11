function preload() {
  //load game assets
  heropic = loadImage("HERO (2).png")
  ObPum = loadImage("PUMP.png")
  enemy = loadImage("ENEMY.png")
  Back = loadImage("BAckground.jpg")
}
function generateOb(){
  var Ob = createSprite(600,300,30,30)
  Ob.shapeColor = "red"
  Ob.addImage(ObPum)
  Ob.scale = random(0.01,0.03)
  Ob.velocityX = random(-10,10)
  Ob.velocityY = random(-10,10)
  ObGroup.add(Ob)
}

function setup() {
  createCanvas(1200,600);
  player = createSprite(200,200,40,40)
  player.shapeColor = "blue"
  player.addImage(heropic)
  player.scale = 0.03
  edges = createEdgeSprites()
  ObGroup = new Group()
  Crow = createSprite(600,300,50,50)
  Crow.addImage(enemy)
  Crow.scale = 0.02
}

var score = 0

function draw() {
  background(Back);
  stroke("pink")
  if (frameCount%30 == 0){
    generateOb()
  }
  for (d = 0;d < ObGroup.length;d +=1 ){
    var t = ObGroup.get(d)
    if ( player.isTouching(t)){
      t.destroy()
      t = null
      score += 1
    }
  }
  if (score < 50){
  player.x = mouseX
  player.y = mouseY
  }
  if (player.x > 550 && player.x < 650 && player.y > 250 && player.y < 350){
    player.x = 700
   }
 drawSprites()
 if (score >= 50){
   fill("green")
   textSize(50)
   text("You Won with"+score+"points",600,300)

 } 
 textSize(20)
 fill("purple")
 text("Score Obtained: "+score , 1000,500)
}
