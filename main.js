noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500)
    canvas.position(560,150)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)

}

function modelLoaded(){
    console.log('Model is loaded!')
}

function draw(){
    background('#ff3f05')
    document.getElementById("text_size").innerHTML="text size will be = "+difference+"px";
    fill('#ff3f05')
    stroke('#ff3f05')
    textSize(noseX,noseY,difference)
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
    
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
    
        console.log("leftWristX="+leftwristX+"rightwristX="+rightwristX + "difference="+difference);
    }
}