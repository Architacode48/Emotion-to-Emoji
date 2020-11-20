Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function takePhoto(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="image"src="'+data_uri+'"/>';
}
);}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GkpTDO10R/model.json',modelLoaded);
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
prediction1=results[0].label;
prediction2=results[1].label;
speak();
if(results[0].label=="Sleepy"){
document.getElementById("emoji").innerHTML="&#128554;";
}
if(results[0].label=="Happy"){
document.getElementById("emoji").innerHTML="&#128512;";
}
if(results[0].label=="Surprise"){
    document.getElementById("emoji").innerHTML="&#128558;";
    }
if(results[1].label=="Sleepy"){
 document.getElementById("emoji2").innerHTML="&#128554;";
}
 if(results[1].label=="Happy"){
 document.getElementById("emoji2").innerHTML="&#128512;";
}
if(results[1].label=="Surprise"){
document.getElementById("emoji2").innerHTML="&#128558;";
 }
    }
}
function speak()
{
    var synth=window.speechSynthesis;
    speakData1="The first prediction is "+ prediction1;
    speakData2="The second prediction is"+ prediction2;
    var utterThis= new SpeechSynthesisUtterance(speakData1+speakData2);
   utterThis.rate=1.0;
    synth.speak(utterThis);

}
