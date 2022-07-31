function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let minutes = minute(),
      seconds = second(),
      hours = hour(),
      secondAngle = map(seconds,0,60,0,360),
      minuteAngle = map(minutes,0,60,0,360),
      hourAngle = map(hours % 12,0,12,0,360);
  
  background(0);
  translate(200, 200);
  rotate(-90);
  strokeWeight(8);
  stroke(255,300,50);
  noFill();
  arc(0, 0, 280, 280, 0, 360);

  
  push();
  rotate(secondAngle);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(minuteAngle);
  stroke(150,255,100);
  line(0,0,75,0);
  pop(); 
  
  push();
  rotate(hourAngle);
  stroke(150,100, 255);
  line(0,0,50,0);
  pop(); 

}