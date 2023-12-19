difference=0;
rightWristX=0
leftWristX=0;

function setup() {
    video= createCapture(VIDEO);
    video.size(500,350);

    canvas= createCanvas(500,500);
    canvas.position(900,250);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()   {
    console.log('PoseNet Is Inrialized');
}

function gotPoses(results){
    if(results.length >0){
        console.log(results) 
        leftWrisX = results[0].pose.leftWrist.x;
        rightWristX  = results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);
        
    }
}
 function draw() {
    background('#6C91C2');

    document.getElementById("status").innerHTML= "Tamanho da fonte será =" + difference + "px";
    textSize(difference);
    fill('#FFE787');
    text('Pedro', 50, 400);
    
 }