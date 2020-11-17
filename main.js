Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function click(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="image"src="'+data_uri+'"/>';
}
);}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yLdbguVu_/model.json',modelLoaded);
function modelLoaded(){
    console.log("model has loaded");
}
function check(){
    img=document.getElementById("image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
console.log(results);
document.getElementById("emotion_name").innerHTML=results[0].label;
document.getElementById("emotion_name2").innerHTML=results[1].label;
if(results[0].label=="Sleepy"){
document.getElementById("emoji").innerHTML="&#128558;";
}
if(results[0].label=="Happy"){
document.getElementById("emoji").innerHTML="&#128512;";
}
if(results[0].label=="scared"){
    document.getElementById("emoji").innerHTML="&#128560;";
    }
if(results[1].label=="Sleepy"){
 document.getElementById("emoji2").innerHTML="&#128558;";
}
 if(results[1].label=="Happy"){
 document.getElementById("emoji2").innerHTML="&#128512;";
}
if(results[1].label=="scared"){
document.getElementById("emoji2").innerHTML="&#128560;";
 }


    }
}