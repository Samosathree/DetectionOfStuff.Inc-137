video = "";
status = "";
objects = [];

function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas = createCanvas(500, 470);
    canvas.center();
}
function draw(){
    image(video, 0, 0, 500, 470);
    if(status != ""){
        objectDetector.detect(video, gotResult);
    }
    for(i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "We are saving Ucraine and trying to detect dis stuff so pls stand by";
        document.getElementById("NumberOfObjects").innerHTML = "We finnally got time to relize, there's " + objects.length + "things-a-ma-bob... bob : what'd u say Eugene? WAIT NOT U BOB";
        fill("#00ff00");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " "+ percent +"%",objects[i].x + 15, objects[i].y + 15);
        noFiil();
        stroke("#00ff00");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}

function start(){
    objectDetector = ml5.objectDetector('coccossd', modelLoaded);
    document.getElementById("status").innerHTML = "We are still detecting stuffs  pls wait :)";
}

function modelLoaded(){
    console.log("code word:E   meaning:SAVE UCRAINEEEEEEE");
    status : true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}