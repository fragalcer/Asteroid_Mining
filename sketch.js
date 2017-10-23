var earthGif;
var music;
var voice1;
var fadingValueForEarth = 0;
var earthXPos;
var earthYPos;
var currentMouseXPos;
var currentEarthFrame;
var nextMouseXPos;
var earthFrame;
var stars = [];
var enoughStarsAlready = false;
var userIsMovingLeft = false;
var userIsMovingRight = false;
var widthOfTheUniverse;
var sunImage;
var moonImage;
var theSunIsNotCreated = true;
var theSun;
var theMoonIsNotCreated = true;
var theMoon;
var voiceOneHasNotBeenPlayed = true;
var smallJupiterIsNotCreated = true;
var thePlanetSmallJupiter;
var bleepSound;
var bleepSoundHasNeverBeenPlayed = true;
var firstScene = true;
var secondScene = false;
var buttonPressedSound;
var marsGif;
var jupiterGif;
var jupiterIsNotCreated = true;
var thePlanetJupiter;
var marsIsNotCreated = true;
var thePlanetMars;
var jupiterFrame;
var marsFrame;



function preload() {
    earthGif = loadGif('earth.gif');
    music = loadSound('blue_fields.mp3');
    sunImage = loadImage('sun.png');
    moonImage = loadImage('moon.png');
    voice1 = loadSound('voice_1.mp3');
    bleepSound = loadSound('bleep_sound.mp3');
    buttonPressedSound = loadSound('button_pressed.mp3')
    marsGif = loadGif('mars.gif');
    jupiterGif = loadGif('jupiter_reversed_medium.gif');

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
            earthGif.pause();
            if (voiceOneHasNotBeenPlayed) {
                voice1.play();
                voiceOneHasNotBeenPlayed = false;
            }
            push();
            currentEarthFrame = earthGif.frame();
            tint(255, fadingValueForEarth);
            image(earthGif, earthXPos, windowHeight / 2 - earthGif.height / 2);
            pop();
        }

        if (fadingValueForEarth <= 255) {
            if (frameCount % 5 === 0) {
                fadingValueForEarth += 4;
            }
        }

        if (earthXPos > (windowWidth / 2 - earthGif.width / 2) && earthGif.loaded()) {
            earthXPos -= 2;
        }
    } else if (secondScene) {

        if (jupiterIsNotCreated) {
            if (jupiterGif.loaded()) {
                thePlanetJupiter = new Jupiter((windowWidth / 2) - (jupiterGif.width / 2));
                jupiterIsNotCreated = false;
            }
        }

        thePlanetJupiter.show();

        if (marsIsNotCreated) {
            if (marsGif.loaded()) {
                thePlanetMars = new Mars((windowWidth / 2) - (marsGif.width / 2));
                marsIsNotCreated = false;
            }
        }

        thePlanetMars.show();

        if (userIsMovingRight) {
            thePlanetMars.moveRight();
            thePlanetJupiter.moveRight();
        }
        if (userIsMovingLeft) {
            thePlanetMars.moveLeft();
            thePlanetJupiter.moveLeft();
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

    }


}

function mouseMoved() {

    nextMouseXPos = mouseX;

    if (earthGif.loaded()) {

        // left movement.
        if (nextMouseXPos < currentMouseXPos) {
            if (earthGif.loaded()) {
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
        else if (nextMouseXPos > currentMouseXPos) {
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

function starsGenerator(numberOfAsteroids) {
    for (var a = 0; a < numberOfAsteroids; a++) {
        var asteroid = new Star(random(widthOfTheUniverse * -3, widthOfTheUniverse * 2), random(0, windowHeight), random(4,10), random(1,2), random(8,10));
        stars.push(asteroid);
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
        fill('#f6fce9');
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
        image(this.gif, this.x, (windowHeight / 2) - (jupiterGif.height / 2));
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
    this.velocity = 100;
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
        buttonPressedSound.play();

    }

    // prevent default
    return false;
}