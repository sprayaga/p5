function setup(){
canvas=createCanvas(600,600);
canvas.position(100,150);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,120,120,200,200);
   fill(175, 138, 219);
   rect(80,75,300,30);
   rect(350,75,30,300);
   rect(70,360,300,30);
   rect(70,90,30,300);
   fill(116, 14, 240);
   circle(360,90,60);
   circle(90,90,60);
   circle(360,360,60);
   circle(75,360,60);
  
}

function take_snapshot(){
save('image.png');
}