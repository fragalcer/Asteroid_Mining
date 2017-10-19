var earthGif;
var music;
var fadingValueForEarth = 0;
var earthXPos;
var earthYPos;
var currentMouseXPos;
var currentFrame;
var nextMouseXPos;
var frame;
var stars = [];
var enoughStarsAlready = false;
var userIsMovingLeft = false;
var userIsMovingRight = false;
var widthOfTheUniverse;



function preload() {
    earthGif = loadGif('earth.gif');
    music = loadSound('blue_fields.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    music.loop();
    earthXPos = windowWidth;
    widthOfTheUniverse = windowWidth;
    earthYPos = windowHeight;
    // any additional setup code goes here
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
    userIsMovingLeft = false;
    userIsMovingRight = false;

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
        // print("i am doing the thing")
    }

    if (earthGif.loaded()) {
        earthGif.pause();
        currentFrame = earthGif.frame();
        // currentMouseXPos = mouseX;
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
        // earthGif.play();
    } else {
        // earthGif.pause();
    }

}

function mouseMoved() {

    nextMouseXPos = mouseX;

    if (earthGif.loaded()) {

        // left movement.
        if (nextMouseXPos < currentMouseXPos) {
            frame = currentFrame + 1;
            earthGif.frame(frame);
            currentMouseXPos = nextMouseXPos;
            userIsMovingLeft = true;
            userIsMovingRight = false;
        }

        // right movement.
        else if (nextMouseXPos > currentMouseXPos) {
            if (currentFrame === 0 && frame === -1) {
                currentFrame = 99;
                frame = 100;
            }
            frame = currentFrame - 1;
            earthGif.frame(frame);
            currentMouseXPos = nextMouseXPos;
            userIsMovingRight = true;
            userIsMovingLeft = false;
        }
            // userIsMovingRight = false;
            // userIsMovingLeft = false;


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