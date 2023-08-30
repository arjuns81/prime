function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses)
}
function draw(){
image(video,0,0,600,500);
}
song="";
function preload(){
    song=loadSound(ben.mp3);
    song=loadSound(luke.mp3);
    
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded() {
    console.log("posenet is working")
}
function gotPoses(results){
if(results.length>0){
console.log(results);
leftx=results[0].pose.leftWrist.x;
lefty=results[0].pose.leftWrist.y;
rightx=results[0].pose.rightWrist.x;
righty=results[0].pose.rightWrist.y;
}
}
