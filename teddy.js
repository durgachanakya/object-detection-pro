status = "";

function preload(){
    image =  loadImage("teddy.jpg");
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();

    object_detector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting object";
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
    
}

function gotResult(error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object = results;
}