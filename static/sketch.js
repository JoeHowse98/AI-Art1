var adjectives = ["deep", "bitter", "hopeful", "mysterious", "bashful", "joyous", "intense", "lonesome", "terrible", "ominous", "infinite", "beautiful", "hopeless", "useless", "mystical"];
var nouns = ["tree", "cave", "horizon", "ship", "man", "woman", "lagoon", "mountain", "lake", "lover", "child", "bicycle", "road", "computer", "traveller"];
var verbs = ["cascades", "glows", "hums", "vibrates", "explodes", "cries", "wails", "sings", "crumbles", "grows", "loathes", "longs", "lingers", "looms", "awaits"];

var xoff = 0;
var yoff = 1;

var randH = 0;

function setup() {
  colorMode(HSB);

  randH = random(361)
  console.log(randH);

  createCanvas(2000, 2000);
  background(10);
  
    var rnd_adjective = random(adjectives);
    var rnd_noun = random(nouns);
    var rnd_verb = random(verbs);

  
  textSize(75)
  
  fill (0, 0, 100);
  
  text("the", 50, 100);
  
  text(rnd_adjective, 50, 200)
  
  text(rnd_noun, 50, 300)
  
  text(rnd_verb, 50, 400)
}

function draw () {
  
  var x = map(noise (xoff), 0, 1, 0, 2100);
  var y = map(noise (yoff), 0, 1, 0, 2100);

  //var randH = random(0, 360)

  xoff += 0.001
  yoff += 0.001
  
  noStroke();
  strokeCap(SQUARE)
  fill(randH, 100, 100, 0.1);
  ellipse (x, y, 5, 350);
  //Loop()
   
}
