// Name any p5.js functions we use in the global so Glitch can recognize them.    *
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW sqrt frameRate, random,collideRectCircle,
          noFill millis() setVolume soundFormats loadSound millis ENTER frameCount keyIsDown second circle second() DELETE mouseX mouseY textAlign CENTER textFont createImage DOWN_ARROW loadFont RIGHT_ARROW LEFT_ARROW collideRectRect Clickable*/
//defining global variables

let backgroundColor,
  conditionGameOver,
  gameOverButton,
  gameOverImg,
  img,
  myFont,
  fish,
  ocean,
  score,
  hit,
  lives,
  trash1obj,
  trash2obj,
  trash3obj,
  fishobj;
let startPageButton,
  instructPageButton,
  conditionStart,
  scubadiver,
  scubaChoice1,
  scubaChoice2,
  scubaX,
  scubaY,
  trash1,
  trash2,
  trash3,
  startGame,
  hitFish;
let trashObjects,
  trashImages,
  fishObjects,
  oceanBack,
  oceanBack1,
  oceanBack2,
  oceanBack3,
  oceanBack4,
  conditionInstruct,
  showPowerUp4,
    conditionChar,
    charButton;

let powerImg1, powerImg2, powerImg3, powerImg4;
let powerVelocity;
let fishVelocity;
let trashVelocity;
let storedScore;
let scubaSpeed;
let point;
let fishPoint;
let powerObjects;
let livePoint;
let levelNum;
let hitPower;
let storedLevel;
let coinSound;
let fishSound;
let characterImage;

const NUM_OF_TRASH = 5;
const NUM_OF_FISH = 3;
const NUM_OF_POWER = 2;
function preload() {
  //sounds
  soundFormats('wav', 'mp3');
  coinSound = loadSound("https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2FcoinSound.mp3?v=1596126600310");
  fishSound = loadSound("https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2Ffishcollide.mp3?v=1596126031561");
  
  //images
  oceanBack = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2FoceanBack.jpg?v=1595860089623"
  );
  oceanBack1 = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2FoceanBack1.jpg?v=1595953764254"
  );
  oceanBack2 = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2FoceanBack2.jpg?v=1595953771531"
  );
  oceanBack3 = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2FoceanBack3.jpg?v=1595953777392"
  );
  oceanBack4 = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2FoceanBack4.jpg?v=1595953784944"
  );
  myFont = loadFont(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2FRanchers-Regular.ttf?v=1595793770354"
  );
  fish = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2Ffish.png?v=1595796025017"
  );
  ocean = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2Focean.jpg?v=1595797322413"
  );
  scubaChoice1 = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2Fscubadiver.png?v=1595867159401"
  );
  scubaChoice2 = loadImage("https://cdn.glitch.com/5b39ca59-be12-463e-8e13-aec01e39ced9%2Fscubadiver.png?v=1596129649217");
  
  trash1 = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2Ftrash1.png?v=1595867270663"
  );
  trash2 = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2Ftrash2.png?v=1595867253355"
  );
  trash3 = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2Ftrash3.png?v=1595867230903"
  );
  powerImg1 = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2Fpowerup1.png?v=1596053465509"
  );
  powerImg2 = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2Fpowerup2.webp?v=1596053986103"
  );
  powerImg3 = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2Fpowerup3.jpg?v=1596054022442"
  );
  powerImg4 = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2Fpowerup4.png?v=1596054084581"
  );
  gameOverImg = loadImage(
    "https://cdn.glitch.com/cfbd10bf-4829-4aa4-8a10-769beeced6cf%2Fcoralreef.png?v=1596065212376"
  );
}

function setup() {
  /*set canvas and initial variables*/
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  fishVelocity = 3;
  trashVelocity = 2;
  hit = false;
  hitPower = false;
  hitFish = false;
  conditionChar = false;
  background(255);
  score = 0;
  lives = 3;
  powerVelocity = 2;
  scubaSpeed = 1;
  storedScore = [0];
  storedLevel = [1];
  levelNum = 1;
  point = 1;
  fishPoint = 2;
  livePoint = 1;
  startPage();
  showPowerUp4 = false;
  startGame = true;

  /*start button setup*/
  conditionStart = true;
  startPageButton = new Clickable();
  startPageButton.resize(200, 75);
  startPageButton.locate(width / 2 - 100, height/2);
  //start button functions
  startPageButton.onHover = function() {
    this.color = "#AAAAFF";
    this.textFont = myFont;
    this.textColor = "#FFFFFF";
    this.text = "Click on me to get started!";
  };
  //This function is ran when the clickable is NOT hovered.
  startPageButton.onOutside = function() {
    this.color = "#EEEEEE";
    this.textFont = myFont;
    this.textSize = 20;
    this.text = "Hello there!";
    this.textColor = "#000000";
  };
  //This function is ran when the clickable is pressed.
  startPageButton.onRelease = function() {
    conditionChar = true;
    conditionStart = false;
  };

  /*instruction page button setup*/
  conditionInstruct = true;
  instructPageButton = new Clickable();
  instructPageButton.resize(260, 140);
  instructPageButton.locate(width/2-125, 200);
  instructPageButton.textScaled = true; 


  instructPageButton.onHover = function() {
    this.color = "#AAAAFF";
    this.textFont = myFont;
    this.textSize = 10;
    this.textColor = "#FFFFFF";
    this.text = " ";
    textSize(10);
    text("Ocean Pollution Facts:", width / 2, 220);
  text(
    "--5.25 trillion pieces of plastic is present in the ocean, most",
    width / 2,
    245
  );
  text("of which pollute the deep sea", width / 2, 255);
  text(
    "--100,000 marine creatures die anually from plastic debris",
    width / 2,
    270
  );
  text(
    "--13,000 to 15,000 pieces of plastic are thrown into the ocean",
    width / 2,
    285
  );
  text("everyday", width / 2, 295);
  text(
    "--The ocean contains 'dead zones' where no life can be sustained",
    width / 2,
    310);

  }
  //This function is ran when the clickable is NOT hovered.
  instructPageButton.onOutside = function() {
    this.color = "#EEEEEE";
    this.textFont = myFont;
    this.textSize = 20;
    this.text = "Click to play game!";
    this.textColor = "#000000";
  };
  //This function is ran when the clickable is pressed.
  instructPageButton.onRelease = function() {
    conditionInstruct = false;
  };

  /*game over page button setup*/
  conditionGameOver = false;
  gameOverButton = new Clickable();
  gameOverButton.resize(300, 175);
  gameOverButton.locate(width / 2 - 150, 200);

  gameOverButton.onHover = function() {
    this.color = "#AAAAFF";
    this.textFont = myFont;
    this.textColor = "#FFFFFF";
    this.text = "Click on me to play again!";
  };
  //This function is ran when the clickable is NOT hovered.
  gameOverButton.onOutside = function() {
    this.color = "#EEEEEE";
    this.textFont = myFont;
    this.textSize = 20;
    this.text = "Game Over";
    this.textColor = "#000000";
  };
  //This function is ran when the clickable is pressed.
  gameOverButton.onRelease = function() {
    conditionGameOver = false;
    startPage();
    setup();
    conditionStart = true;
    conditionInstruct = true;
  };
  
  //char page button
charButton = new Clickable();
  charButton.resize(200, 75);
  charButton.locate(width / 2 - 100, 320);
  this.textScale = true;
  //start button functions
  charButton.onHover = function() {
    this.color = "#AAAAFF";
    this.textFont = myFont;
    this.textColor = "#FFFFFF";
    this.text = "Get instructions!";
  };
  //This function is ran when the clickable is NOT hovered.
  charButton.onOutside = function() {
    this.color = "#EEEEEE";
    this.textFont = myFont;
    this.textSize = 20;
    this.textScale = true;
    this.text = "Click here!";
    this.textColor = "#000000";
  };
  //This function is ran when the clickable is pressed.
  charButton.onRelease = function() {
    conditionChar = false;
    conditionInstruct = true;
  };
  
  
  /*fish and trash objects*/
  scubaX = 0;
  scubaY = 10;
  startGame = false;
  trashImages = [trash1, trash2, trash3];
  trashObjects = [];
  let randomNum;
  for (let i = 0; i < NUM_OF_TRASH; i++) {
    randomNum = Math.floor(random(0, trashImages.length));
    trashObjects.push(new Trash(trashImages[randomNum]));
  }
  fishObjects = [];
  for (let i = 0; i < NUM_OF_FISH; i++) {
    fishObjects.push(new Fish(fish));
  }

  powerObjects = [];
  for (let i = 0; i < NUM_OF_POWER; i++) {
    powerObjects.push(new Power(powerImg1));
    powerObjects.push(new Power(powerImg2));
    powerObjects.push(new Power(powerImg3));
    powerObjects.push(new Power(powerImg4));
  }
}
//draw function
function draw() {
  if (conditionStart === true) {
    startPageButton.draw();
  } else {
    if (conditionChar === true) {
      chooseCharacter();
      
      charButton.draw();
    } else {
          if (conditionInstruct === true) {
      instructionPage();
      instructPageButton.draw();
    } else {
      drawGame();
      playGame();
      if (conditionGameOver === true) {
        fill("#FFBB99");
        rect(0, 32, width, 800);
        background(gameOverImg);
        displayStats();
        gameOverButton.draw();
      }
    }
    }

  }
}

/*the actual game*/

function drawGame() {
  if (storedLevel[0] >= 1 && storedLevel[0] <=3) {
    background(oceanBack);
  } else if (storedLevel[0] > 3  &&  storedLevel[0]<= 6) {
    background(oceanBack1);
  } else if (storedLevel[0] > 6 && storedLevel[0] <=9) {
    background(oceanBack2);
  } else if (storedLevel[0] > 9 && storedLevel[0] <= 12) {
    background(oceanBack3);
  } else if (storedLevel[0] > 12) {
    background(oceanBack4);
  }
  image(scubadiver, scubaX, scubaY, 70, 70);
  
  displayStats();
}

function chooseCharacter() {
  //one more image 
  //if mouse pressed in that area, then set a variable to that image 
  conditionChar = true;
  background(ocean);
  textFont(myFont);
  fill('white');
  textSize(30);
  text("Choose a character", width/2,80);
  textSize(20);
  text("Click on a scuba diver below", width/2, 130);
  
  fill(58, 17, 97);
  rect(190-20,180,100,100,30);
  image(scubaChoice1, 210-20, 200, 70, 70);
  fill(58, 17, 97);
  rect(350-20,180,100,100,30);
  image(scubaChoice2,370-20,200,70,70);
 
  if (mouseY > 200 && mouseY < 270){
   if (mouseIsPressed && mouseX < 190+70 && mouseX > 190-35){
    scubadiver = scubaChoice1;
    }else if(mouseIsPressed && mouseX < 350+70 && mouseX > 350-35){  
      scubadiver = scubaChoice2;
    } 
  }

if (scubadiver === scubaChoice1) {
    noFill();
    stroke('white');
    rect(200-40,170,120,120);
  } else if (scubadiver === scubaChoice2) {
    noFill();
    stroke("white");
    rect(360-40,170,120,120);    
  }

}
function displayStats() {
  fill("#33ccff");
  rect(0, 0, width, 30);
  fill("black");
  textSize(20);
  if (score < 0) {
    score = 0;
  }

  text(`Score : ${score}`, 40, 15);
  text(`Lives : ${lives}`, 330, 15);
  text(`Level : ${storedLevel[0]}`, 200, 15);
}

function playGame() {
  if (!startGame) {
    for (let i = 0; i < NUM_OF_TRASH; i++) {
      trashObjects[i].draw();
      trashObjects[i].move();
      trashObjects[i].collide();
    }
    for (let i = 0; i < NUM_OF_FISH; i++) {
      fishObjects[i].draw();
      fishObjects[i].collide();
      fishObjects[i].move();
    }
    for (let i = 0; i < NUM_OF_POWER * 4; i++) {
      powerObjects[i].draw();
      powerObjects[i].move();
      powerObjects[i].collide();

      scubaControls();
    }
  }
}

function scubaControls() {
  if (keyIsDown(RIGHT_ARROW) && scubaX < width - 60) {
    scubaX += scubaSpeed;
  }
  if (keyIsDown(LEFT_ARROW) && scubaX > 0) {
    scubaX -= scubaSpeed;
  }
  if (keyIsDown(DOWN_ARROW) && scubaY < height - 50) {
    scubaY += scubaSpeed;
  }
  if (keyIsDown(UP_ARROW) && scubaY > 0) {
    scubaY -= scubaSpeed;
  }
}

/*trash class*/
class Trash {
  constructor(img) {
    //needs an x, y, width, height, velocity,img
    this.x = random(width - 50);
    this.y = random(50, height - 30);
    this.width = 50;
    this.height = 50;
    this.velocity = trashVelocity;
    this.img = img;
    this.point = point;
  }
  //draw trash
  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
  }

  //methods
  //move trash
  move() {
    this.x -= trashVelocity;
    if (this.x < 0) {
      this.x = width;
      this.y = random(50, height - 50);
    }
  }

  collide() {
    hit = collideRectRect(
      scubaX,
      scubaY,
      70,
      70,
      this.x,
      this.y,
      this.width,
      this.height
    );

    if (hit === true) {
      score += this.point;
      if (score > storedScore[0]) {
        storedScore.pop();
        storedScore.push(score);
      }
      levels();
      console.log("trash velocity collide " + trashVelocity);
      this.x = width;
      this.y = random(height - 50);
    } else if (lives <= 0) {
      gameOver();
    }
  }
}

// fish class
class Fish {
  constructor(img) {
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
    this.width = random(30, 60);
    this.height = this.width;
    this.velocity = fishVelocity;
    this.img = img;
    this.point = fishPoint;
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x -= fishVelocity;
    if (this.x < 0) {
      this.x = width;
      this.y = random(60, height - 50);
    }
  }
  collide() {
    hitFish = collideRectRect(
      scubaX,
      scubaY,
      70,
      70,
      this.x,
      this.y,
      this.width,
      this.height
    );
    if (hitFish === true) {
      fishSound.play();
      lives -= livePoint;
      this.x = width;
      this.y = random(height - 50);
      if (score > 0) {
        score -= this.point;
      }
    } else if (lives <= 0) {
      gameOver();
    }
  }
}

/*Power ups class*/

class Power {
  constructor(img) {
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
    this.width = 20;
    this.height = this.width;
    this.velocity = powerVelocity;
    this.img = img;
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x -= powerVelocity;
    if (this.x < 0) {
      this.x = width;
      this.y = random(60, height - 50);
    }
  }

  collide() {
    hitPower = collideRectRect(
      scubaX,
      scubaY,
      70,
      70,
      this.x,
      this.y,
      this.width,
      this.height
    );
    if (hitPower === true) {
      coinSound.play();
      if (this.img === powerImg1) {
        powerUp1();
        textSize(40);
        fill("black");
        text("+3", this.x + 10, this.y + 10);
      } else if (this.img === powerImg2) {
        powerUp2();
        textSize(40);
        fill("black");
        text("+2", this.x + 10, this.y + 10);
      } else if (this.img === powerImg3) {
        powerUp3();
        textSize(40);
        fill("black");
        text("+speed", this.x + 10, this.y + 10);
      } else if (this.img === powerImg4) {
        powerUp4();
        textSize(40);
        fill("black");
        text("+lives", this.x + 10, this.y + 10);
      }
      this.x = width;
      this.y = random(height - 50);
    }
  }
}

//store highest level attained

//functions for levels() and powerups()
function levels() {
  if (levelNum > storedLevel[0]) {
    storedLevel.pop();
    storedLevel.push(levelNum);
  }

  if (score % 10 >= 0) {
    if (score < storedScore[0]) {
      return;
    } else {
      increaseLevel();
    }
  }
}

function increaseLevel() {
  levelNum = Math.floor(score / 10) + 1;
  scubaSpeed += 0.05;
  fishVelocity += 0.1;
  trashVelocity += 0.1;
  powerVelocity+=0.1
}

//adds points three times the point value
function powerUp1() {
  score += point * 3;
}

//increases score by three times the point value
function powerUp2() {
  score += point * 2;
}

//you get extra speed
function powerUp3() {
  scubaSpeed += 0.05;
}

//lives set back to three
function powerUp4() {
  lives = 3;
}

/*informational pages */

//start page
function startPage() {
  background(ocean);
  fill("white");
  textFont(myFont);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("Welcome to Diving", width/2, 200);
  text("through the Ocean!", width/2, 250);
  image(fish, 100, 70, 50, 50);
  image(fish, 250, 40, 70, 70);
   image(fish, 150, 400, 80, 80);
   image(fish, 400, 450, 70, 70);
}

//instruction page
function instructionPage() {
  background(ocean);
  noStroke();
  fill("white");
  rect(50, 50, width - 100, height - 100);
  fill("black");
  textSize(30);
  text("Instructions", width / 2, 80);

  textSize(20);
  text("Use the arrow keys to move the scuba", width / 2, 120);
  text("diver through the ocean. Try to pick up", width / 2, 140);
  text("as much trash as you can without ", width / 2, 160);
  text("running into any fish! Collect the coins for powerups!", width / 2, 180);
   image(fish, 100, 350, 50, 50);
  image(fish, 270, 380, 70, 70);
   image(fish, 150, 400, 80, 80);
   image(fish, 400, 450, 70, 70);
  //textSize(10);

  // fill(58, 17, 97);
  // rect(55, 205, width - 110, 120);
  // fill("black");
  // text("Ocean Pollution Facts:", width / 2, 220);
  // text(
  //   "--5.25 trillion pieces of plastic is present in the ocean, most",
  //   width / 2,
  //   245
  // );
  // text("of which pollute the deep sea", width / 2, 255);
  // text(
  //   "--100,000 marine creatures die anually from plastic debris",
  //   width / 2,
  //   270
  // );
  // text(
  //   "--13,000 to 15,000 pieces of plastic are thrown into the ocean",
  //   width / 2,
  //   285
  // );
  // text("everyday", width / 2, 295);
  // text(
  //   "--The ocean contains 'dead zones' where no life can be sustained",
  //   width / 2,
  //   310
  // );
}

//game over page
function gameOver() {
  //background(255);
  startGame = false;
  powerVelocity = 0;
  trashVelocity = 0;
  fishVelocity = 0;
  scubaSpeed = 0;
  let rectY = 0;

  conditionGameOver = true;
}

/*key pressed functions*/

//if delete is pressed, it will reset
function keyPressed() {
  if (keyCode === DELETE) {
    setup();
    conditionStart = true;
    conditionInstruct = true;
    startPage();
  }
}
