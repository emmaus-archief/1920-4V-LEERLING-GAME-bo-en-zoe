/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const START = 0;
const SPELEN = 1;
const GAMEOVER = 2;
const GAMEWON = 3;
var spelStatus = START;

var imgRainbow;
var imgSun;
var imgCloud;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler
var prijsX = 1150;
var prijsY = 490;
var randomSpeed = 2;

var kogelX = randomX;    // x-positie van kogel
var kogelY = randomY;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten

var randomX = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var randomY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */



function preload() {
  imgRainbow = loadImage("rainbow.png");
  imgSun = loadImage("sun.png");
  imgCloud = loadImage("cloud.png");
}


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('black');

  // dit is het speelveld
  fill(189, 214, 255);
  rect(20, 20, width - 2 * 20, height - 2 * 20);
  
};

var tekenPrijs = function () {
  image(imgRainbow, prijsX, prijsY, 120, 120);
}


/**
 * Tekent de prijs
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */



/**
 * Tekent de kogel of de bal
 * 
 */
var tekenAlleKogels = function() {
    for(var i = 0; i < randomX.length; i++){
      image(imgCloud, randomX[i], randomY[i], 80, 80);
    }
 };


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  image(imgSun, x, y, 120, 120);
};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
    if (keyIsPressed === true) {
        
        if (key === " ") {  //checken op spatie

        }
        if (keyCode === LEFT_ARROW) {
            if (spelerX < width - 20) {
                spelerX = spelerX + randomSpeed;
            }
            
        }
        if (keyCode === RIGHT_ARROW) {
            if (spelerX > 20) {
                spelerX = spelerX - randomSpeed;
            }
        }
        if (keyCode === UP_ARROW) {
            if (spelerY < height - 20) {// gebruikt height voor de hoogte van het canvas
            spelerY = spelerY + randomSpeed;
            }
        }
        if (keyCode === DOWN_ARROW) {
            if (spelerY > 20) {
                spelerY = spelerY - randomSpeed;
            }
            
        }
    }
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */

var checkGameOver = function() {
    // botsing met eerste balletje
    // als spelerX vlakbij randomX && spelerY vlakbij randomY
    var gameOver = false;
    for (var i = 0; i < randomX.length; i++) {
        
          
        if (abs(spelerX - randomX[i]) < 60 && abs(spelerY - randomY[i]) < 60) {
            gameOver = true;
        }
    }
    return gameOver;
    
};
var checkGameWon = function() {
   var gameWon = false;
    for (var i = 0; i < randomX.length; i++) {
        
          
        if (abs(spelerX - prijsX) < 60 && abs(spelerY - prijsY) < 60) {
            gameWon = true;
        }
    }
    return gameWon;

}
/* tekent het vierkant met de tekst game over */
var eindScherm = function() {
    fill(255, 255, 255);
    rect(0, 0, width, height);
    stroke(0);
    strokeWeight(8);
    fill(189, 214, 255);
    textSize(100);
    text("Game Over", width / 2 - 256, height / 2 - 100);
    text("klik spatie om te herstartten" , width / 9 - 100, height / 2 - 20);
};

var winScherm = function() {
    fill(255, 255, 255);
    rect(0, 0, width, height);
    stroke(0);
    strokeWeight(8);
    fill(189, 214, 255);
    textSize(100);
    text("Game Gewonnen!", width / 2.5 - 250, height / 2 - 100);
    text("klik spatie om te herstartten" , width / 9 - 100, height / 2 - 20);
};


var resetGame = function () {
    spelerX = 100;
    spelerY = 100;

    for (var i=0; i<randomX.length;i++) {
     randomX[i] = random(60, width - 60);
     randomY[i] = random(60, height - 60);
   }
}


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 620);

  imageMode(CENTER);

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case START:
        resetGame();
        spelStatus = SPELEN;
    break;
    case SPELEN:
      beweegSpeler();
      tekenVeld();
      tekenAlleKogels();
      tekenPrijs();
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver() === true) {
        //console.log("Game over, jammer joh");
        spelStatus = GAMEOVER;
      }
            if (checkGameWon() === true) {
        //console.log("Game won!");
        spelStatus = GAMEWON;
      }
    break;
    case GAMEWON:

      winScherm();
      if (keyIsDown(32)) { // spatie
         randomSpeed = randomSpeed + 1.5;
         spelStatus = START;
      }
    break;

    case GAMEOVER:

      eindScherm();
      if (keyIsDown(32)) { // spatie
         spelStatus = START;
      }
    
    break;
  }
}
