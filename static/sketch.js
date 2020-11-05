let adjectives;
let nouns;
let verbs;

let rnd_adjective;
let rnd_noun;
let rnd_verb;

var xoff = 0;
var yoff = 1;

var randH = 0;

// New function called preload - called before setup to ensure strings are read from textfile (loadStrings is asynch)
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

    rnd_adjective = random(adjectives);
    rnd_noun = random(nouns);
    rnd_verb = random(verbs);

    textSize(75);
    fill(0, 0, 100);
    text("the", 50, 100);
    text(rnd_adjective, 50, 200);
    text(rnd_noun, 50, 300);
    text(rnd_verb, 50, 400)

    // AJAX call to return the adjectives array back to flask - probably better to move this to flask and send data upstream rather than piping back and forth
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/fetch-array",
        data: JSON.stringify(adjectives),
        dataType: "json"
    });
    // call function to read text at end of setup
    read_text(rnd_adjective, rnd_noun, rnd_verb)
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

// New function containing the text to speech code - 3 params for each adjective verb and noun
function read_text(adjective, noun, verb) {
    var start = "The";
    var textToSpeech = start.concat(adjective, noun, verb);
    let msg = new SpeechSynthesisUtterance(textToSpeech);
    msg.pitch = 0.01;
    msg.rate = 1;
    window.speechSynthesis.speak(msg);
}
