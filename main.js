moustacheX=0;
moustacheY=0;
function preload(){
    moustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}
function draw(){
    image(video,0,0,300,300);
    image(moustache,moustacheX,moustacheY,60,45)
}
function modelLoaded(){
    console.log("poseNet Is Initialized");
}
function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x-30);
        console.log("nose y="+results[0].pose.nose.y-10);
          moustacheX=results[0].pose.nose.x-30;
          moustacheY=results[0].pose.nose.y-10;
    };
}
function take_snapshot(){
    save("Moustaches.png");
}