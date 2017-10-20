var earthGif;
var music;
var fadingValueForEarth = 0;
var earthXPos;
var earthYPos;
var currentMouseXPos;
var currentEarthFrame;
var currentMoonFrame;
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



function preload() {
    earthGif = loadGif('earth.gif');
    music = loadSound('blue_fields.mp3');
    sunImage = loadImage('sun.png');
    moonImage = loadImage('moon.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    music.loop();
    earthXPos = windowWidth;
    widthOfTheUniverse = windowWidth;
    earthYPos = windowHeight;
}

function draw() {

    background('#000000');

    if (!enoughStarsAlready) {
        for (var s = 0; s <= 500; s++) {
            var star = new Star(random(-500, windowWidth + 500), random(0, windowHeight), random(4,10), random(1,2), random(8,10));
            stars.push(star);
            if (s === 500) {
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

    // Move x value of the stars to save memory ('recycle' the stars).
    for (var a = 0; a < stars.length; a++) {
        if (stars[a].getX() > windowWidth + 500) {
            // stars.splice(a, 1);
            stars[a].x = random(-500, 0);
        } else if (stars[a].getX() < - 500) {
            stars[a].x = random(windowWidth, windowWidth + 500);
        }
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

    // // Recycle the sun and the moon.
    // if (theMoon.getX() > 7000 && theSun.getX() > 7000) {
    //     theMoon.x = -300;
    //     theSun.x = (-windowWidth / 2) - 1020;
    //     print("the moon x " + theMoon.x);
    //     print("the sun x " + theSun.x);
    // }else if (theMoon.getX() < -7000 && theSun.getX() < -7000) {
    //     theSun.x = windowWidth;
    //     theMoon.x = windowWidth + 1469 - theSun.width;
    // }

    theMoon.show();

    if (userIsMovingRight) {
        theSun.moveRight();
        theMoon.moveRight();
    }
    if (userIsMovingLeft) {
        theSun.moveLeft();
        theMoon.moveLeft();
    }

    userIsMovingLeft = false;
    userIsMovingRight = false;

    if (earthGif.loaded()) {
        earthGif.pause();
        currentEarthFrame = earthGif.frame();
        tint(255, fadingValueForEarth);
        image(earthGif, earthXPos, windowHeight / 2 - earthGif.height / 2);
    }

    if (fadingValueForEarth <= 255) {
        if (frameCount % 5 === 0) {
            fadingValueForEarth += 4;
        }
    }

    if (earthXPos > (windowWidth / 2 - earthGif.width / 2) && earthGif.loaded()) {
        earthXPos -= 2;
    }
}

function mouseMoved() {

    nextMouseXPos = mouseX;

    if (earthGif.loaded()) {

        // left movement.
        if (nextMouseXPos < currentMouseXPos) {
            earthFrame = currentEarthFrame + 1;
            earthGif.frame(earthFrame);
            currentMouseXPos = nextMouseXPos;
            userIsMovingLeft = true;
            userIsMovingRight = false;
        }

        // right movement.
        else if (nextMouseXPos > currentMouseXPos) {
            if (currentEarthFrame === 0 && earthFrame === -1) {
                currentEarthFrame = 99;
                earthFrame = 100;
            }
            earthFrame = currentEarthFrame - 1;
            earthGif.frame(earthFrame);
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

}function Moon(x) {
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