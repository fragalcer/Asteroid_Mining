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
var fontUniversStandard;
var fontUniversBold;
var fontUniversLight;
var fontUniversBlack;
var asteroidBaseImage;
var voice2;
var voice3;
var voice4;
var voice5;
var voice6;
var voice7;
var voice3HasNeverBeenPlayed = true;
var voice4HasNeverBeenPlayed = true;
var voice5HasNeverBeenPlayed = true;
var voice6HasNeverBeenPlayed = true;
var voice7HasNeverBeenPlayed = true;
var asteroidMineralsImage;
var asteroidEconimicImage;
var asteroidSustainabilityImage;
var asteroidDestinyImage;

function preload() {
    fontUniversStandard = loadFont('UniversLTStd.otf');
    fontUniversBold = loadFont('UniversLTStd-Bold.otf');
    fontUniversLight = loadFont('Univers-light-normal.ttf');
    fontUniversBlack = loadFont('UniversBlack.ttf');
    earthGif = loadGif('earth.gif');
    music = loadSound('blue_fields.mp3');
    sunImage = loadImage('sun.png');
    moonImage = loadImage('moon.png');
    saturnImage = loadImage('saturn.png');
    asteroidBaseImage = loadImage('asteroid_base.png');
    asteroidMineralsImage = loadImage('asteroid_minerals.jpg');
    asteroidEconimicImage = loadImage('asteroid_economic.jpg');
    asteroidSustainabilityImage = loadImage('asteroid_sustainability.jpg');
    asteroidDestinyImage = loadImage('asteroid_destiny.jpg');
    voice1 = loadSound('voice_1.mp3');
    voice2 = loadSound('voice_2.mp3');
    voice3 = loadSound('voice_3.mp3');
    voice4 = loadSound('voice_4.mp3');
    voice5 = loadSound('voice_5.mp3');
    voice6 = loadSound('voice_6.mp3');
    voice7 = loadSound('voice_7.mp3');
    bleepSound = loadSound('bleep_sound.mp3');
    marsGif = loadGif('mars.gif');
    jupiterGif = loadGif('jupiter_reversed_medium.gif');
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
    music.loop();
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

        if (voice7.isPlaying()) {
            voice7.stop();
        }

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
                voice1.play();
                voiceOneHasNotBeenPlayed = false;
            }
            if (fadingValueForEarth <= 255) {
                if (frameCount % 5 === 0) {
                    fadingValueForEarth += 15;
                }
            }
        } else {
            push();
            stroke('#2b2b2b');
            strokeWeight(4);
            fill('#ffffff');
            textFont(fontUniversBold);
            textSize(40);
            text('THE ANU ASTEROID MINING MISSION', 100, (windowHeight / 2) - 50);
            textFont(fontUniversLight);
            textSize(30);
            text('An Interactive Experience by Francisco Gallardo', 100, (windowHeight / 2));
            textSize(20);
            text('LOADING...', 100, (windowHeight / 2) + 50);
            pop();
        }

        if (theEarth.getX() > (windowWidth / 2 - earthGif.width / 2) && earthGif.loaded()) {
            theEarth.setX(-4);
        }

    } else if (secondScene) {

        if (voice1.isPlaying()) {
            voice1.stop();
        }

        if (!fact1ButtonIsNotCreated) {
            fact1Button.hide();
        }

        push();

        if (!enoughAsteroidsAlready) {
            for (var s = 0; s <= 10; s++) {
                var asteroid = new Asteroid(random(-499, windowWidth), random(100, windowHeight / 2));
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

        if (voice2.isPlaying()) {
            voice2.stop();
        }

        for (var a = 0; a < asteroids.length; a++) {
            asteroids.splice(a, 1);
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

        if (voice3HasNeverBeenPlayed) {
            voice3.play();
            voice3HasNeverBeenPlayed = false;
        }

        push();
        fill('#ffffff');
        textSize(40);
        textFont(fontUniversBold);
        text('Asteroid mining is the exploitation of raw ', (windowWidth / 2) - (asteroidBaseImage.width / 2), (asteroidBaseImage.height + 150));
        text('materials from asteroids and other minor ', (windowWidth / 2) - (asteroidBaseImage.width / 2), (asteroidBaseImage.height + 200));
        text('planets, including near-earth objects.', (windowWidth / 2) - (asteroidBaseImage.width / 2), (asteroidBaseImage.height + 250));
        text('Most asteroids orbit between Mars and ', (windowWidth / 2) - (asteroidBaseImage.width / 2), (asteroidBaseImage.height + 300));
        text('Jupiter in a grouping known as the main', (windowWidth / 2) - (asteroidBaseImage.width / 2), (asteroidBaseImage.height + 350));
        text('asteroid belt.', (windowWidth / 2) - (asteroidBaseImage.width / 2), (asteroidBaseImage.height + 400));
        pop();

        image(asteroidBaseImage, (windowWidth / 2) - (asteroidBaseImage.width / 2), 100);

        if (fact1ButtonIsNotCreated) {
            fact1Button = createButton('OK');
            fact1Button.size(130, 55);
            fact1Button.style('font-size', '35px');
            fact1Button.style('background-color', '#ffffff');
            fact1Button.style('border-radius', '4px');
            fact1Button.style('border', '2px solid #000000');
            fact1Button.position((windowWidth / 2) + (asteroidBaseImage.width /2) - fact1Button.width, windowHeight - 100);
            fact1Button.mousePressed(fact1OK);
            fact1ButtonIsNotCreated = false;
        }


    } else if (showFact2) {

        if (voice3.isPlaying()) {
            voice3.stop();
        }

        for (var a = 0; a < asteroids.length; a++) {
            asteroids.splice(a, 1);
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

        if (voice4HasNeverBeenPlayed) {
            voice4.play();
            voice4HasNeverBeenPlayed = false;
        }

        push();
        fill('#ffffff');
        textSize(35);
        textFont(fontUniversBold);
        text('Minerals can be mined from an asteroid and used in ', (windowWidth / 2) - (asteroidMineralsImage.width / 2), (asteroidMineralsImage.height + 100));
        text('space for construction materials or taken back to', (windowWidth / 2) - (asteroidMineralsImage.width / 2), (asteroidMineralsImage.height + 150));
        text('Earth. Some of the minerals found in asteroids are:', (windowWidth / 2) - (asteroidMineralsImage.width / 2), (asteroidMineralsImage.height + 200));
        text('gold, iridium, silver, osmium, palladium, platinum,', (windowWidth / 2) - (asteroidMineralsImage.width / 2), (asteroidMineralsImage.height + 250));
        text('rhenium, rhodium, ruthenium, tungsten, iron, cobalt,', (windowWidth / 2) - (asteroidMineralsImage.width / 2), (asteroidMineralsImage.height + 300));
        text('manganese, titanium, nickel, and aluminium', (windowWidth / 2) - (asteroidMineralsImage.width / 2), (asteroidMineralsImage.height + 350));
        pop();

        image(asteroidMineralsImage, (windowWidth / 2) - (asteroidMineralsImage.width / 2), 50);

        fact1Button.position((windowWidth / 2) + (asteroidMineralsImage.width /2) - fact1Button.width, (asteroidMineralsImage.height + 375));

        fact1Button.show();
        fact1Button.mousePressed(fact2OK);

    } else if (showFact3) {

        if (voice4.isPlaying()) {
            voice4.stop();
        }

        for (var a = 0; a < asteroids.length; a++) {
            asteroids.splice(a, 1);
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

        if (voice5HasNeverBeenPlayed) {
            voice5.play();
            voice5HasNeverBeenPlayed = false;
        }

        push();
        fill('#ffffff');
        textSize(35);
        textFont(fontUniversBold);
        text('Scientists have speculated that a relatively small ', (windowWidth / 2) - (asteroidEconimicImage.width / 2), (asteroidEconimicImage.height + 100));
        text('metallic asteroid with a diameter of 1 mile contains ', (windowWidth / 2) - (asteroidEconimicImage.width / 2), (asteroidEconimicImage.height + 150));
        text('more than $20 trillion worth of industrial and ', (windowWidth / 2) - (asteroidEconimicImage.width / 2), (asteroidEconimicImage.height + 200));
        text('precious metals. The potential benefits to asteroid ', (windowWidth / 2) - (asteroidEconimicImage.width / 2), (asteroidEconimicImage.height + 250));
        text('mining reach far beyond just profit, economic ', (windowWidth / 2) - (asteroidEconimicImage.width / 2), (asteroidEconimicImage.height + 300));
        text('growth, and expanding Earth\'s resource base. ', (windowWidth / 2) - (asteroidEconimicImage.width / 2), (asteroidEconimicImage.height + 350));
        pop();

        image(asteroidEconimicImage, (windowWidth / 2) - (asteroidEconimicImage.width / 2), 50);

        fact1Button.position((windowWidth / 2) + (asteroidEconimicImage.width /2) - fact1Button.width, (asteroidEconimicImage.height + 375));

        fact1Button.show();
        fact1Button.mousePressed(fact3OK);

    } else if (showFact4) {

        if (voice5.isPlaying()) {
            voice5.stop();
        }

        for (var a = 0; a < asteroids.length; a++) {
            asteroids.splice(a, 1);
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

        if (voice6HasNeverBeenPlayed) {
            voice6.play();
            voice6HasNeverBeenPlayed = false;
        }

        push();
        fill('#ffffff');
        textSize(33);
        textFont(fontUniversBold);
        text('While mining on Earth can be highly destructive to ', (windowWidth / 2) - (asteroidSustainabilityImage.width / 2), (asteroidSustainabilityImage.height + 100));
        text('natural habitats resulting in deforestation, soil', (windowWidth / 2) - (asteroidSustainabilityImage.width / 2), (asteroidSustainabilityImage.height + 150));
        text('erosion, chemical contamination, and the pollution of ', (windowWidth / 2) - (asteroidSustainabilityImage.width / 2), (asteroidSustainabilityImage.height + 200));
        text('groundwater mining in space doesn\'t damage any ', (windowWidth / 2) - (asteroidSustainabilityImage.width / 2), (asteroidSustainabilityImage.height + 250));
        text('natural habitats. Asteroid mining can improve our ', (windowWidth / 2) - (asteroidSustainabilityImage.width / 2), (asteroidSustainabilityImage.height + 300));
        text('environment, and the natural resources of the Earth.', (windowWidth / 2) - (asteroidSustainabilityImage.width / 2), (asteroidSustainabilityImage.height + 350));
        pop();

        image(asteroidSustainabilityImage, (windowWidth / 2) - (asteroidSustainabilityImage.width / 2), 50);

        fact1Button.position((windowWidth / 2) + (asteroidSustainabilityImage.width /2) - fact1Button.width, (asteroidSustainabilityImage.height + 375));

        fact1Button.show();
        fact1Button.mousePressed(fact4OK);

    } else if (showFact5) {

        if (voice6.isPlaying()) {
            voice6.stop();
        }

        for (var a = 0; a < asteroids.length; a++) {
            asteroids.splice(a, 1);
        }

        userIsMovingLeft = false;
        userIsMovingRight = false;

        if (voice7HasNeverBeenPlayed) {
            voice7.play();
            voice7HasNeverBeenPlayed = false;
        }

        push();
        fill('#ffffff');
        textSize(33);
        textFont(fontUniversBold);
        text('In the long run, being able to mine resources in ', (windowWidth / 2) - (asteroidDestinyImage.width / 2), (asteroidDestinyImage.height + 100));
        text('space will help humans create space-based', (windowWidth / 2) - (asteroidDestinyImage.width / 2), (asteroidDestinyImage.height + 150));
        text('communities, and explore deeper and deeper into the', (windowWidth / 2) - (asteroidDestinyImage.width / 2), (asteroidDestinyImage.height + 200));
        text('universe, eventually transitioning us away from an', (windowWidth / 2) - (asteroidDestinyImage.width / 2), (asteroidDestinyImage.height + 250));
        text('entirely Earth-based civilization. Asteroid Mining is', (windowWidth / 2) - (asteroidDestinyImage.width / 2), (asteroidDestinyImage.height + 300));
        text('possible, and is one of the ANU Grand Challenges.', (windowWidth / 2) - (asteroidDestinyImage.width / 2), (asteroidDestinyImage.height + 350));
        pop();

        image(asteroidDestinyImage, (windowWidth / 2) - (asteroidDestinyImage.width / 2), 50);

        fact1Button.position((windowWidth / 2) + (asteroidDestinyImage.width /2) - fact1Button.width, (asteroidDestinyImage.height + 375));

        fact1Button.show();
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
        image(this.gif, this.x, (windowHeight / 2) - (jupiterGif.height / 2));
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
    this.movingVelocity = random(5, 15);
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
        voice2.play();
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
        voice3HasNeverBeenPlayed = true;
        voice4HasNeverBeenPlayed = true;
        voice5HasNeverBeenPlayed = true;
        voice6HasNeverBeenPlayed = true;
        voice7HasNeverBeenPlayed = true;
        fact1Button.hide();
    }
}