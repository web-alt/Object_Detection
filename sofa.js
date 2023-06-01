Status = "";
sofa_image = "";

function preload(){
    sofa_image = loadImage("Sofa.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(sofa_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(sofa_image,0,0,640,350);
        image(sofa_image, 0, 0, 640, 420);
        fill("#FF0000");
        text("Sofa", 35, 165);
        noFill();
        stroke("#FF0000");
        rect(30, 150, 300, 150);
}