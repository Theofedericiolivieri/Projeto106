function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/h5art25Df/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = "Posso ouvir - "+ results[0].label;
        document.getElementById("result_confidence").innerHTML= 'Precisão - '+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img= document.getElementById("gato");
        img1= document.getElementById("cachorro");
        img2= document.getElementById("golfinho");
        if(results[0].label=="assovio"){
         img.src="Golfinho.jpg";
         img1.src="Golfinho.jpg";
         img2.src="Golfinho.jpg";  
        }else if(results[0].label=="latido"){
            img.src="Cachorro.jpg";
            img1.src="Cachorro.jpg";
            img2.src="Cachorro.jpg";  
        }else if(results[0].label=="miado"){
            img.src="gato.jpg";
            img1.src="gato.jpg";
            img2.src="gato.jpg";  
        }
    }
}