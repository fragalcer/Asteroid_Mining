var earthGif;
var theEarth;
var music;
var voice1;
var fadingValueForEarth = 0;
var fadingValueForSecondScene = 0;
var earthXPos;
var earthYPos;
var currentMouseXPos;
var currentEarthFrame;
var nextMouseXPos;
var earthFrame;
var theEarthIsNotCreated = true;
var stars = [];
var enoughStarsAlready = false;
var userIsMovingLeft = false;
var userIsMovingRight = false;
var widthOfTheUniverse;
var sunImage;
var moonImage;
var saturnImage;
var theSunIsNotCreated = true;
var theSun;
var theMoonIsNotCreated = true;
var theMoon;
var saturnIsNotCreated = true;
var thePlanetSaturn;
var voiceOneHasNotBeenPlayed = true;
var smallJupiterIsNotCreated = true;
var thePlanetSmallJupiter;
var bleepSound;
var bleepSoundHasNeverBeenPlayed = true;
var firstScene = true;
var secondScene = false;
// var buttonPressedSound;
var marsGif;
var jupiterGif;
var jupiterIsNotCreated = true;
var thePlanetJupiter;
var marsIsNotCreated = true;
var thePlanetMars;
var jupiterFrame;
var marsFrame;
var asteroid1;
var asteroid2;
var asteroid3;
var asteroid4;
var asteroid5;
var asteroid6;
var asteroid1xs;
var asteroid2xs;
var asteroid3xs;
var asteroid4xs;
var asteroid5xs;
var asteroid6xs;
var asteroid1xs2;
var asteroid2xs2;
var asteroid3xs2;
var asteroid4xs2;
var asteroid5xs2;
var asteroid6xs2;
var asteroid1xs3;
var asteroid2xs3;
var asteroid3xs3;
var asteroid4xs3;
var asteroid5xs3;
var asteroid6xs3;
var possibleAsteroids = [];
var asteroids = [];
var enoughAsteroidsAlready = false;
var showFact1 = false;
var showFact2 = false;
var showFact3 = false;
var showFact4 = false;
var showFact5 = false;
var fact1Button;
var fact1ButtonIsNotCreated = true;
var firstFact = true;

function preload() {
    earthGif = loadGif('earth.gif');
    music = loadSound('blue_fields.mp3');
    sunImage = loadImage('sun.png');
    moonImage = loadImage('moon.png');
    saturnImage = loadImage('saturn.png');
    voice1 = loadSound('voice_1.mp3');
    bleepSound = loadSound('bleep_sound.mp3');
    // buttonPressedSound = loadSound('button_pressed.mp3');
    marsGif = loadGif('mars.gif');
    jupiterGif = loadGif('jupiter_reversed_small.gif');
    asteroid1 = loadGif('asteroid_1_small.gif');
    asteroid2 = loadGif('asteroid_2_small.gif');
    asteroid3 = loadGif('asteroid_3_small.gif');
    asteroid4 = loadGif('asteroid_4_small.gif');
    asteroid5 = loadGif('asteroid_5_small.gif');
    asteroid6 = loadGif('asteroid_6_small.gif');
    asteroid1xs = loadGif('asteroid_1_extrasmall.gif');
    asteroid2xs = loadGif('asteroid_2_extrasmall.gif');
    asteroid3xs = loadGif('asteroid_3_extrasmall.gif');
    asteroid4xs = loadGif('asteroid_4_extrasmall.gif');
    asteroid5xs = loadGif('asteroid_5_extrasmall.gif');
    asteroid6xs = loadGif('asteroid_6_extrasmall.gif');
    asteroid1xs2 = loadGif('asteroid_1_extrasmall_2.gif');
    asteroid2xs2 = loadGif('asteroid_2_extrasmall_2.gif');
    asteroid3xs2 = loadGif('asteroid_3_extrasmall_2.gif');
    asteroid4xs2 = loadGif('asteroid_4_extrasmall_2.gif');
    asteroid5xs2 = loadGif('asteroid_5_extrasmall_2.gif');
    asteroid6xs2 = loadGif('asteroid_6_extrasmall_2.gif');
    asteroid1xs3 = loadGif('asteroid_1_extrasmall_3.gif');
    asteroid2xs3 = loadGif('asteroid_2_extrasmall_3.gif');
    asteroid3xs3 = loadGif('asteroid_3_extrasmall_3.gif');
    asteroid4xs3 = loadGif('asteroid_4_extrasmall_3.gif');
    asteroid5xs3 = loadGif('asteroid_5_extrasmall_3.gif');
    asteroid6xs3 = loadGif('asteroid_6_extrasmall_3.gif');
    possibleAsteroids.push(asteroid1);
    possibleAsteroids.push(asteroid2);
    possibleAsteroids.push(asteroid3);
    possibleAsteroids.push(asteroid4);
    possibleAsteroids.push(asteroid5);
    possibleAsteroids.push(asteroid6);
    possibleAsteroids.push(asteroid1xs);
    possibleAsteroids.push(asteroid2xs);
    possibleAsteroids.push(asteroid3xs);
    possibleAsteroids.push(asteroid4xs);
    possibleAsteroids.push(asteroid5xs);
    possibleAsteroids.push(asteroid6xs);
    possibleAsteroids.push(asteroid1xs2);
    possibleAsteroids.push(asteroid2xs2);
    possibleAsteroids.push(asteroid3xs2);
    possibleAsteroids.push(asteroid4xs2);
    possibleAsteroids.push(asteroid5xs2);
    possibleAsteroids.push(asteroid6xs2);
    possibleAsteroids.push(asteroid1xs3);
    possibleAsteroids.push(asteroid2xs3);
    possibleAsteroids.push(asteroid3xs3);
    possibleAsteroids.push(asteroid4xs3);
    possibleAsteroids.push(asteroid5xs3);
    possibleAsteroids.push(asteroid6xs3);

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // music.loop();
    earthXPos = windowWidth;
    widthOfTheUniverse = windowWidth;
    earthYPos = windowHeight;
}

function draw() {

    background('#000000');

    if (!enoughStarsAlready) {
        for (var s = 0; s <= 700; s++) {
            var star = new Star(random(-500, windowWidth + 500), random(0, windowHeight), random(4,15), random(1,2), random(8,10));
            stars.push(star);
            if (s === 700) {
                enoughStarsAlready = true;
            }
        }
    }

    currentMouseXPos = mouseX;

    for (var a = 0; a < stars.length; a++) {
        stars[a].show();
        if (userIsMovingRight) {
            stars[a].moveRight();
        }
        if (userIsMovingLeft) {
            stars[a].moveLeft();
        }
    }

    // Move x value of the stars to save memory ('recycle' the stars).
    for (var a = 0; a < stars.length; a++) {
        if (stars[a].getX() > windowWidth + 500) {
            // stars.splice(a, 1);
            stars[a].x = random(-500, 0);
        } else if (stars[a].getX() < - 500) {
            stars[a].x = random(windowWidth, windowWidth + 500);
        }
    }

    if (firstScene) {

        if (!fact1ButtonIsNotCreated) {
            fact1Button.hide();
        }

        if (theSunIsNotCreated) {
            theSun = new Sun(windowWidth / 2 - 300);
            theSunIsNotCreated = false;
        }

        theSun.show();

        // Recycle the sun X position.
        if (theSun.getX() > 8000) {
            theSun.x = -500;
        } else if (theSun.getX() < -8000) {
            theSun.x = windowWidth + 500;
        }

        if (frameCount % 300 === 0) {
            starsGenerator(1);
        }

        if (theMoonIsNotCreated) {
            theMoon = new Moon(windowWidth);
            theMoonIsNotCreated = false;
        }

        // Recycle the moon X position.
        if (theMoon.getX() > 5500) {
            theMoon.x = -500;
        } else if (theMoon.getX() < -5000) {
            theMoon.x = windowWidth + 500;
        }

        theMoon.show();

        if (smallJupiterIsNotCreated) {
            thePlanetSmallJupiter = new SmallJupiter(-1000);
            smallJupiterIsNotCreated = false;
        }

        // Recycle SmallJupiter X position.
        if (thePlanetSmallJupiter.getX() > 5500) {
            thePlanetSmallJupiter.x = -500;
        } else if (thePlanetSmallJupiter.getX() < -5000) {
            thePlanetSmallJupiter.x = windowWidth + 500;
        }

        thePlanetSmallJupiter.show();

        if (thePlanetSmallJupiter.mouseIsOver()) {
            if (bleepSoundHasNeverBeenPlayed) {
                bleepSound.play();
                bleepSoundHasNeverBeenPlayed = false;
            }
            cursor(HAND);
        } else {
            bleepSoundHasNeverBeenPlayed = true;
            cursor(ARROW);
        }

        if (theEarthIsNotCreated) {
            theEarth = new Earth(windowWidth, windowHeight / 2 - earthGif.height / 2);
            theEarthIsNotCreated = false;
        }

        push();
        currentEarthFrame = theEarth.getFrame();
        tint(255, fadingValueForEarth);
        theEarth.show();
        pop();

        if (userIsMovingRight) {
            theSun.moveRight();
            theMoon.moveRight();
            thePlanetSmallJupiter.moveRight();
        }
        if (userIsMovingLeft) {
            theSun.moveLeft();
            theMoon.moveLeft();
            thePlanetSmallJupiter.moveLeft();
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

        if (earthGif.loaded()) {
            if (voiceOneHasNotBeenPlayed) {
                // voice1.play();
                voiceOneHasNotBeenPlayed = false;
            }
            if (fadingValueForEarth <= 255) {
                if (frameCount % 5 === 0) {
                    fadingValueForEarth += 15;
                }
            }
        }

        if (theEarth.getX() > (windowWidth / 2 - earthGif.width / 2) && earthGif.loaded()) {
            theEarth.setX(-4);
        }

    } else if (secondScene) {

        if (!fact1ButtonIsNotCreated) {
            fact1Button.hide();
        }

        push();

        if (!enoughAsteroidsAlready) {
            for (var s = 0; s <= 10; s++) {
                var asteroid = new Asteroid(random(-499, 0), random(100, windowHeight - 200));
                asteroids.push(asteroid);
                if (s === 10) {
                    enoughAsteroidsAlready = true;
                }
            }
        }

        if (saturnIsNotCreated) {
            thePlanetSaturn = new Saturn(windowWidth / 2);
            saturnIsNotCreated = false;
        }

        tint(255, fadingValueForSecondScene);
        thePlanetSaturn.show();

        // Recycle saturn X position.
        if (thePlanetSaturn.getX() > 8000) {
            thePlanetSaturn.x = -500;
        } else if (thePlanetSaturn.getX() < -8000) {
            thePlanetSaturn.x = windowWidth + 500;
        }

        if (jupiterIsNotCreated) {
            if (jupiterGif.loaded()) {
                // thePlanetJupiter = new Jupiter((windowWidth / 2) - (jupiterGif.width / 2));
                thePlanetJupiter = new Jupiter(50);
                jupiterIsNotCreated = false;
            }
        }
        tint(255, fadingValueForSecondScene);
        thePlanetJupiter.show();

        if (marsIsNotCreated) {
            if (marsGif.loaded()) {
                thePlanetMars = new Mars((windowWidth / 2 * 1.5) - (marsGif.width / 2));
                marsIsNotCreated = false;
            }
        }

        for (var a = 0; a < asteroids.length; a++) {
            tint(255, fadingValueForSecondScene);
            asteroids[a].show();
            asteroids[a].move();
            if (asteroids[a].mouseIsOver()) {
                bleepSound.play();
                secondScene = false;
                if (firstFact) {
                    showFact1 = true;
                    firstFact = false;
                }
            }
        }

        tint(255, fadingValueForSecondScene);
        thePlanetMars.show();

        if (userIsMovingRight) {
            thePlanetMars.moveRight();
            thePlanetSaturn.moveRight();
            // thePlanetJupiter.moveRight();
            for (var a = 0; a < asteroids.length; a++) {
                asteroids[a].moveRight();
            }
        }
        if (userIsMovingLeft) {
            thePlanetMars.moveLeft();
            thePlanetSaturn.moveLeft();
            // thePlanetJupiter.moveLeft();
            for (var a = 0; a < asteroids.length; a++) {
                asteroids[a].moveLeft();
            }
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

        // Move x value of the asteroids to save memory ('recycle' the asteroids).
        for (var a = 0; a < asteroids.length; a++) {
            if (asteroids[a].getX() > windowWidth + 500) {
                // asteroids.splice(a, 1);
                asteroids[a].x = random(-500, 0);
            } else if (asteroids[a].getX() < - 500) {
                asteroids[a].x = random(windowWidth, windowWidth + 500);
            }
        }

        if (fadingValueForSecondScene <= 255) {
            if (frameCount % 5 === 0) {
                fadingValueForSecondScene += 15;
            }
        }

        pop();

    } else if (showFact1) {

        for (var a = 0; a < asteroids.length; a++) {
            asteroids.splice(a, 1);
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

        push();
        // textFont(myCustomFont);
        fill('#ffffff');
        textSize(40);
        var myText1 = text('ASTEROID MINING IS THE EXPLOITATION OF RAW', 100, (windowHeight / 2) - 50);
        var myText2 = text('MATERIALS FROM ASTEROIDS AND OTHER MINOR PLANETS, ', 100, (windowHeight / 2));
        var myText3 = text('INCLUDING NEAR-EARTH OBJECTS.', 100, (windowHeight / 2) + 50);
        pop();

        if (fact1ButtonIsNotCreated) {
            fact1Button = createButton('OK');
            fact1Button.size(130, 55);
            fact1Button.style('font-size', '35px');
            fact1Button.style('background-color', '#ffffff');
            fact1Button.style('border-radius', '4px');
            fact1Button.style('border', '2px solid #000000');
            fact1Button.position((windowWidth / 2) + 200, (windowHeight / 2) + 200);
            fact1Button.mousePressed(fact1OK);
            fact1ButtonIsNotCreated = false;
        }


    } else if (showFact2) {

        for (var a = 0; a < asteroids.length; a++) {
            asteroids.splice(a, 1);
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

        push();
        // textFont(myCustomFont);
        fill('#ffffff');
        textSize(40);
        var myText1 = text('THIS IS FACT 2', 100, (windowHeight / 2) - 50);
        // var myText1 = text('ASTEROID MINING IS THE EXPLOITATION OF RAW', 100, (windowHeight / 2) - 50);
        // var myText2 = text('MATERIALS FROM ASTEROIDS AND OTHER MINOR PLANETS, ', 100, (windowHeight / 2));
        // var myText3 = text('INCLUDING NEAR-EARTH OBJECTS.', 100, (windowHeight / 2) + 50);
        pop();

        fact1Button.show();
        fact1Button.mousePressed(fact2OK);

    } else if (showFact3) {

        for (var a = 0; a < asteroids.length; a++) {
            asteroids.splice(a, 1);
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

        push();
        // textFont(myCustomFont);
        fill('#ffffff');
        textSize(40);
        var myText1 = text('THIS IS FACT 3', 100, (windowHeight / 2) - 50);
        // var myText1 = text('ASTEROID MINING IS THE EXPLOITATION OF RAW', 100, (windowHeight / 2) - 50);
        // var myText2 = text('MATERIALS FROM ASTEROIDS AND OTHER MINOR PLANETS, ', 100, (windowHeight / 2));
        // var myText3 = text('INCLUDING NEAR-EARTH OBJECTS.', 100, (windowHeight / 2) + 50);
        pop();

        fact1Button.show();
        fact1Button.mousePressed(fact3OK);

    } else if (showFact4) {

        for (var a = 0; a < asteroids.length; a++) {
            asteroids.splice(a, 1);
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

        push();
        // textFont(myCustomFont);
        fill('#ffffff');
        textSize(40);
        var myText1 = text('THIS IS FACT 4', 100, (windowHeight / 2) - 50);
        // var myText1 = text('ASTEROID MINING IS THE EXPLOITATION OF RAW', 100, (windowHeight / 2) - 50);
        // var myText2 = text('MATERIALS FROM ASTEROIDS AND OTHER MINOR PLANETS, ', 100, (windowHeight / 2));
        // var myText3 = text('INCLUDING NEAR-EARTH OBJECTS.', 100, (windowHeight / 2) + 50);
        pop();

        fact1Button.show();
        fact1Button.mousePressed(fact4OK);

    } else if (showFact5) {

        for (var a = 0; a < asteroids.length; a++) {
            asteroids.splice(a, 1);
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

        push();
        // textFont(myCustomFont);
        fill('#ffffff');
        textSize(40);
        var myText1 = text('THIS IS FACT 5', 100, (windowHeight / 2) - 50);
        // var myText1 = text('ASTEROID MINING IS THE EXPLOITATION OF RAW', 100, (windowHeight / 2) - 50);
        // var myText2 = text('MATERIALS FROM ASTEROIDS AND OTHER MINOR PLANETS, ', 100, (windowHeight / 2));
        // var myText3 = text('INCLUDING NEAR-EARTH OBJECTS.', 100, (windowHeight / 2) + 50);
        pop();

        fact1Button.show();
        // fact1Button.setText('Try Again');
        fact1Button.mousePressed(reset);

    }

}

function mouseMoved() {

    nextMouseXPos = mouseX;

    if (earthGif.loaded()) {

        // left movement.
        if (nextMouseXPos > currentMouseXPos) {
            if (earthGif.loaded() && !theEarthIsNotCreated) {
                earthFrame = currentEarthFrame + 1;
                earthGif.frame(earthFrame);
            }

            if (jupiterGif.loaded() && !jupiterIsNotCreated) {
                jupiterFrame = thePlanetJupiter.getFrame() + 1;
                thePlanetJupiter.setFrame(jupiterFrame);
            }

            if (marsGif.loaded() && !marsIsNotCreated) {
                marsFrame = thePlanetMars.getFrame() + 1;
                thePlanetMars.setFrame(marsFrame);
            }
            currentMouseXPos = nextMouseXPos;
            userIsMovingLeft = true;
            userIsMovingRight = false;
        }

        // right movement.
        else if (nextMouseXPos < currentMouseXPos) {
            if (earthGif.loaded()) {
                if (currentEarthFrame === 0 && earthFrame === -1) {
                    currentEarthFrame = 99;
                    earthFrame = 100;
                }
                earthFrame = currentEarthFrame - 1;
                earthGif.frame(earthFrame);
            }

            if (jupiterGif.loaded() && !jupiterIsNotCreated) {
                if (thePlanetJupiter.getFrame() === 0 && jupiterFrame === -1) {
                    thePlanetJupiter.setFrame(35);
                    jupiterFrame = 36;
                }
                jupiterFrame = thePlanetJupiter.getFrame() - 1;
                thePlanetJupiter.setFrame(jupiterFrame);
            }

            if (marsGif.loaded() && !marsIsNotCreated) {
                if (thePlanetMars.getFrame() === 0 && marsFrame === -1) {
                    thePlanetMars.setFrame(29);
                    marsFrame = 30;
                }
                marsFrame = thePlanetMars.getFrame() - 1;
                thePlanetMars.setFrame(marsFrame);
            }
            currentMouseXPos = nextMouseXPos;
            userIsMovingRight = true;
            userIsMovingLeft = false;
        }
    }

}

function starsGenerator(numberOfStars) {
    for (var a = 0; a < numberOfStars; a++) {
        var star = new Star(random(widthOfTheUniverse * -3, widthOfTheUniverse * 2), random(0, windowHeight), random(4,10), random(1,2), random(8,10));
        stars.push(star);
    }
}

function Star(x, y, r1, r2, p) {
    this.x = x;
    this.y = y;
    this.r1 = r1;
    this.r2 = r2;
    this.p = p;
    this.velocity = random(50, 100);

    this.show = function () {
        push();
        fill('#ffffff');
        starMaker(this.x, this.y, this.r1, this.r2, this.p);
        pop();
    };

    this.moveLeft = function () {
        this.x += this.velocity;
    };

    this.moveRight = function () {
        this.x -= this.velocity;
    };

    this.getX = function () {
        return this.x;
    };
}

function Sun(x) {
    this.x = x;
    this.velocity = 100;

    this.show = function () {
        // push();
        image(sunImage, this.x, 250);
        // sunImage.resize(275, 275);
        // pop();
    };

    this.moveLeft = function () {
        this.x += this.velocity;
    };

    this.moveRight = function () {
        this.x -= this.velocity;
    };

    this.getX = function () {
        return this.x;
    };
}

function Earth(x) {
    this.x = x;
    this.gif = earthGif;

    this.show = function () {
        this.gif.pause();
        image(this.gif, this.x, windowHeight / 2 - earthGif.height / 2);
    };

    this.getFrame = function () {
        return this.gif.frame();
    };

    this.setFrame = function (x) {
        this.gif.frame(x);
    };

    this.getX = function () {
        return this.x;
    }

    this.setX = function (x) {
        this.x += x;
    }
}

function Moon(x) {
    this.x = x;
    this.velocity = 70;

    this.show = function () {
        image(moonImage, this.x, 225);
    };

    this.moveLeft = function () {
        this.x += this.velocity;
    };

    this.moveRight = function () {
        this.x -= this.velocity;
    };

    this.getX = function () {
        return this.x;
    };
}

function Jupiter(x) {
    this.x = x;
    this.velocity = 5;
    this.gif = jupiterGif;

    this.show = function () {
        this.gif.pause();
        image(this.gif, this.x, (windowHeight / 2) - (jupiterGif.height / 2 * 1.5));
        // image(this.gif, this.x, (50));
    };
    this.moveLeft = function () {
        this.x -= this.velocity;
    };

    this.moveRight = function () {
        this.x += this.velocity;
    };

    this.getFrame = function () {
        return this.gif.frame();
    };

    this.setFrame = function (x) {
        this.gif.frame(x);
    };
}

function Mars(x) {
    this.x = x;
    this.velocity = 150;
    this.gif = marsGif;

    this.show = function () {
        marsGif.pause();
        image(marsGif, this.x, (windowHeight / 2) - (marsGif.height / 2));
    };
    this.moveLeft = function () {
        this.x -= this.velocity;
    };

    this.moveRight = function () {
        this.x += this.velocity;
    };

    this.getFrame = function () {
        return this.gif.frame();
    };

    this.setFrame = function (x) {
        this.gif.frame(x);
    };

}

function Saturn(x) {
    this.x = x;
    this.velocity = 70;

    this.show = function () {
        image(saturnImage, this.x, 225);
    };

    this.moveLeft = function () {
        this.x += this.velocity;
    };

    this.moveRight = function () {
        this.x -= this.velocity;
    };

    this.getX = function () {
        return this.x;
    };
}

function Asteroid(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = random(50, 70);
    this.movingVelocity = random(5, 25);
    this.gif = possibleAsteroids[Math.floor(Math.random() * possibleAsteroids.length)];
    this.touchArea = this.gif.width / 2;

    this.show = function () {
        image(this.gif, this.x, this.y);
    };
    this.moveLeft = function () {
        this.x -= this.velocity;
    };

    this.moveRight = function () {
        this.x += this.velocity;
    };
    
    this.move = function () {
        this.x += this.movingVelocity;
    };

    this.getX = function () {
        return this.x;
    };

    this.mouseIsOver = function () {
        var d = dist(this.x + (this.gif.width / 2), this.y + (this.gif.height / 2), mouseX, mouseY);
        return d < this.touchArea;
    }
}

function SmallJupiter(x) {
    this.x = x;
    this.y = windowHeight - 220;
    this.velocity = 70;
    this.touchArea = 100;

    this.show = function () {
        push();
        fill('#ffbc61');
        noStroke();
        ellipse(this.x, this.y, 15, 15);
        pop();
    };

    this.moveLeft = function () {
        this.x += this.velocity;
    };

    this.moveRight = function () {
        this.x -= this.velocity;
    };

    this.getX = function () {
        return this.x;
    };

    this.mouseIsOver = function () {
        var d = dist(this.x, this.y, mouseX, mouseY);
        return d < this.touchArea;
    }

}

function starMaker(x, y, outerRadius, innerRadius, numberOfPoints) {

    var fullAngle = TWO_PI / numberOfPoints;
    var semiAngle = fullAngle/2.0;

    beginShape();
    for (var i = 0; i < TWO_PI; i += fullAngle) {
        var line1 = x + cos(i) * innerRadius;
        var line2 = y + sin(i) * innerRadius;
        vertex(line1, line2);
        line1 = x + cos(i+semiAngle) * outerRadius;
        line2 = y + sin(i+semiAngle) * outerRadius;
        vertex(line1, line2);
    }
    endShape(CLOSE);
}

function mouseClicked() {
    if (thePlanetSmallJupiter.mouseIsOver()) {
        secondScene = true;
        firstScene = false;
        bleepSoundHasNeverBeenPlayed = true;
        cursor(ARROW);
    }
    // prevent default
    return false;
}

function fact1OK() {
    if (asteroids.length === 0) {
        secondScene = true;
        showFact1 = false;
        showFact2 = true;
        enoughAsteroidsAlready = false;
    }
}

function fact2OK() {
    if (asteroids.length === 0) {
        secondScene = true;
        showFact2 = false;
        showFact3 = true;
        enoughAsteroidsAlready = false;
    }
}

function fact3OK() {
    if (asteroids.length === 0) {
        secondScene = true;
        showFact3 = false;
        showFact4 = true;
        enoughAsteroidsAlready = false;
    }
}

function fact4OK() {
    if (asteroids.length === 0) {
        secondScene = true;
        showFact4 = false;
        showFact5 = true;
        enoughAsteroidsAlready = false;
    }
}

function reset() {
    if (asteroids.length === 0) {
        fadingValueForEarth = 0;
        fadingValueForSecondScene = 0;
        theEarthIsNotCreated = true;
        enoughStarsAlready = true;
        userIsMovingLeft = false;
        userIsMovingRight = false;
        theSunIsNotCreated = true;
        theMoonIsNotCreated = true;
        saturnIsNotCreated = true;
        voiceOneHasNotBeenPlayed = true;
        smallJupiterIsNotCreated = true;
        bleepSoundHasNeverBeenPlayed = true;
        firstScene = true;
        secondScene = false;
        jupiterIsNotCreated = true;
        marsIsNotCreated = true;
        enoughAsteroidsAlready = false;
        showFact1 = false;
        showFact2 = false;
        showFact3 = false;
        showFact4 = false;
        showFact5 = false;
        fact1ButtonIsNotCreated = true;
        firstFact = true;
        fact1Button.hide();
    }
}