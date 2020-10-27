let adjectives;
let nouns;
let verbs;

var xoff = 0;
var yoff = 1;

var randH = 0;

// New function called preload - called before setup to ensure strings are read from textfile
function preload() {
    adjectives = loadStrings('static/strings/adjectives.txt'); //loads contents of text file into adjectives array
    nouns = loadStrings('static/strings/nouns.txt'); //loads contents of text file into nouns array
    verbs = loadStrings('static/strings/verbs.txt'); //loads contents of text file into verbs array
}

function setup() {
    colorMode(HSB);
    randH = random(361);
    createCanvas(2000, 2000);
    background(10);
    var rnd_adjective = random(adjectives);
    var rnd_noun = random(nouns);
    var rnd_verb = random(verbs);

    textSize(75)
    fill(0, 0, 100);
    text("the", 50, 100);
    text(rnd_adjective, 50, 200);
    text(rnd_noun, 50, 300);
    text(rnd_verb, 50, 400)
}

function draw() {
    var x = map(noise(xoff), 0, 1, 0, 2100);
    var y = map(noise(yoff), 0, 1, 0, 2100);

    xoff += 0.001;
    yoff += 0.001;

    noStroke();
    strokeCap(SQUARE);
    fill(randH, 100, 100, 0.1);
    ellipse(x, y, 5, 350);
}
