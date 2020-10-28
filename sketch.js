//Create variables here
var dogImg, happyDogImg, database, foodS, foodStock,dog,happyDog;

function preload()
{
   dogImg= loadImage("images/dogImg.png");
   happyDogImg = loadImage("images/dogImg1.png");
  }

function setup() {
  	createCanvas(800, 700);
  
  database = firebase.database();
  dog = createSprite(380,400,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.5;
    var foodStock = database.ref('Food');
   foodStock.on("value",readStock,showerror);
}

function draw() {  
background(46, 139, 87);

if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImg);
}


  drawSprites();
  //add styles here
  textSize(24);
  fill("black");
text("NOTE: PRESS UP ARROW KEY TO FEED MILK TO DOG ",100,70);
text("REMAINING MILK BOTTLES :"+foodS,200,200);
}


function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
  Food:x
})

}

function showerror(){
  console.log("error");
}
