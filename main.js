function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);

    canvas = createCanvas(500, 450);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background("#FF6347");
}
function modalLoaded() {
    console.log("Modal is intiliazed");
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
    }
}