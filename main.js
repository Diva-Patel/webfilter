nose_x=0;
nose_y=0;
function preload(){
pom_pom=loadImage('https://i.postimg.cc/K8stQjZz/download.png')
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300)
video.hide();
posenet=ml5.poseNet(video,model_loaded);
posenet.on('pose',gotposes);
}

function model_loaded(){
    console.log('posenet is intialised')
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    console.log("nose x= "+results[0].pose.nose.x);
    console.log("nose y= "+results[0].pose.nose.y);
    nose_x=results[0].pose.nose.x-15;
    nose_y=results[0].pose.nose.y-15;

}
}

function draw(){
image(video,0,0,300,300)
image(pom_pom,nose_x,nose_y,54,45)
}

function take_snapshot(){
   save('my_pic.jpeg')
}