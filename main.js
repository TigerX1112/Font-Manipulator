leftWristX = "";
rightWristX = "";
difference = "";

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);

    canvas = createCanvas(500, 450);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}
function modalLoaded() {
    console.log("Modal is intiliazed");
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}
function draw() {
    background('#FF6347');

    textSize(difference);
    fill('#89CFF0');
    text("Hello", 50, 400);
}