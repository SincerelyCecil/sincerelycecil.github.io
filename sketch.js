var paletteSize = 80
var brush1
var brush2 
var brush3 
var brush4 

function preload() {
  brush4 = loadImage('Cloud-Brush.png')
}

function setup() {
  createCanvas(600, paletteSize*6)
  background(255)
  mousePressed()
  
//set the colours
  colour1 = color(84, 13, 110)
  colour2 = color(238, 66, 102)
  colour3 = color(253, 207, 243)
  colour4 = color(255, 210, 63)
  colour5 = color(0, 206, 203)

// welcome and instructions
  fill(colour5)
  textSize(36)
  textStyle(BOLD)
  textAlign(CENTER)
  text('WELCOME', width/2, 60)
  
  fill(colour2)
  textSize(21)
  textAlign(LEFT)
  text('Instructions:', 100, 100)
  
  fill(colour1)
  textSize(16)
  textStyle(NORMAL)
  textAlign(LEFT)
  text('Click on the palette to select your paint colour.', 100, 130)

  fill(colour1)
  textSize(16)
  textStyle(NORMAL);
  textAlign(LEFT)
  text('Use the [←] and [→] arrow keys to select your brush.', 100, 150)
  
  fill(colour1)
  textSize(16)
  textStyle(NORMAL)
  textAlign(LEFT)
  text('Use the [ ↑ ] and [ ↓ ] arrow keys to adjust your brush size.', 100, 170)
 
  fill(colour1)
  textSize(16)
  textStyle(NORMAL)
  textAlign(LEFT)
  text('Click and drag to draw!', 100, 190)
  
  fill(colour4)
  noStroke()
  rect(230, 220, 140, 50, 15)
  
  fill(0)
  textSize(21)
  textStyle(BOLD)
  textAlign(CENTER)
  text("START", width/2, 252)
}

function mousePressed() {

// click start button to proceed
  if (mouseX > 225 && mouseX < 375) {
    if (mouseY > 215 && mouseY < 265) {
      if (mouseIsPressed === true) {
        clear()
        start()
      }
    }
  }
}

class Brush {
  constructor(xsize, ysize) {
    this.colour = 255
    this.xsize = xsize
    this.ysize = ysize
  }
  
  paint() {    
// change brush size   
  if (keyIsDown(DOWN_ARROW)) { 
    if (this.xsize > 0) {
    this.xsize = this.xsize*0.9
    this.ysize = this.ysize*0.9
    }
  }
  else if (keyIsDown(UP_ARROW)) {
    if (this.xsize < 60) {
    this.xsize = this.xsize*1.1
    this.ysize = this.ysize*1.1
    }
  }
    
// colour picker
    if (mouseY < paletteSize*6) {
      if (mouseX < paletteSize) {
        this.colour = get(mouseX, mouseY)
      }
    }
    
// drag to draw
    if (mouseIsPressed) {
      fill(this.colour)
      noStroke()
      ellipse(mouseX, mouseY, this.xsize, this.ysize)
    }
  }
}

function start() {
  background(255)
  imageMode(CENTER)
  
// on-screen colour palette  
  fill(colour1)
  stroke(0)
  strokeWeight(1)
  rect(0, 0, paletteSize, paletteSize)

  fill(colour2)
  stroke(0)
  strokeWeight(1)
  rect(0, paletteSize*1, paletteSize, paletteSize)

  fill(colour3)
  stroke(0)
  strokeWeight(1)
  rect(0, paletteSize*2, paletteSize, paletteSize)

  fill(colour4)
  stroke(0)
  strokeWeight(1)
  rect(0, paletteSize*3, paletteSize, paletteSize)

  fill(colour5)
  stroke(0)
  strokeWeight(1)
  rect(0, paletteSize*4, paletteSize, paletteSize)

  fill(255)
  stroke(0)
  strokeWeight(1)
  rect(0, paletteSize*5, paletteSize, paletteSize)
}

brush1 = new Brush(14, 14)
brush2 = new Brush(14, 7)
brush3 = new Brush(7, 14)

var brushNumber = 1

function keyPressed() {
  
// choose brush
  if (keyCode === RIGHT_ARROW) {
    if (brushNumber < 4) {
    brushNumber = brushNumber+1
    }
  }  
  else if (keyCode === LEFT_ARROW) {
    if (brushNumber > 1) {
    brushNumber = brushNumber-1
    }    
  }
}

function draw() {

  if (brushNumber == 1) {
  brush1.paint()
  }
  if (brushNumber == 2) {
  brush2.paint()
  }
  if (brushNumber == 3) {
  brush3.paint()
  }
  if (brushNumber == 4) {
    if(mouseIsPressed == true) {
      image(brush4, mouseX, mouseY, 60, 60)
    }
  }
}