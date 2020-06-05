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

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten

//plaatjes 

var imgA=0;

function preload () {
    imgA = loadImage ();
}


/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */

var randomX = 0;
var randomY = 0;
var randomX2 = 0;
var randomY2= 0;
var randomX3 = 0;
var randomY3 = 0;
var randomX4 = 0;
var randomY4 = 0;
var randomX5 = 0;
var randomY5 = 0;
var randomX6 = 0;
var randomY6 = 0;
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
  fill(0, 0, 0);
  rect(400, 400, width - 2 * 20, height - 2 * 20);
  
};
/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x,y){



};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {
    fill(255, 255, 255);
    ellipse(randomX, randomY, 20, 20);
};

var tekenKogel2 = function(x, y) {
    fill(255, 255, 255);
    ellipse(randomX2, randomY2, 20, 20);
};
var tekenKogel3 = function(x, y) {
    fill(255, 255, 255);
    ellipse(randomX3, randomY3, 20, 20);
};
var tekenKogel4 = function(x, y) {
    fill(255, 255, 255);
    ellipse(randomX4, randomY4, 20, 20);
};
var tekenKogel5 = function(x, y) {
    fill(255, 255, 255);
    ellipse(randomX5, randomY5, 20, 20);
};
var tekenKogel6 = function(x, y) {
    fill(255, 255, 255);
    ellipse(randomX6, randomY6, 20, 20);
};
/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill("white");
  ellipse(spelerX, spelerY, 50, 50);
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

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
                spelerX = spelerX + 5;
            }
            
        }
        if (keyCode === RIGHT_ARROW) {
            if (spelerX > 20) {
                spelerX = spelerX - 5;
            }
        }
        if (keyCode === UP_ARROW) {
            if (spelerY < height - 20) {// gebruikt height voor de hoogte van het canvas
            spelerY = spelerY + 5;
            }
        }
        if (keyCode === DOWN_ARROW) {
            if (spelerY > 20) {
                spelerY = spelerY - 5;
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
    if ( abs(spelerX - randomX) <10 && // afstand randomX en spelerX is kleiner dan 10
        abs(spelerY - randomY) <10) {
        return true;
    }
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 620);
  randomX = random(0,width - 100);
  randomY = random(0,height - 100);
    randomX2 = random(0,width - 100);
  randomY2 = random(0,height);
    randomX3 = random(0,width - 100);
  randomY3 = random(0,height - 100);
    randomX4 = random(0,width) - 100;
  randomY4 = random(0,height);
    randomX5 = random(0,width);
  randomY5 = random(0,height);
      randomX6 = random(0,width);
  randomY6 = random(0,height);

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenKogel2(kogelX, kogelY);
      tekenKogel3(kogelX, kogelY);
      tekenKogel4(kogelX, kogelY);
      tekenKogel5(kogelX, kogelY);
      tekenKogel6(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
