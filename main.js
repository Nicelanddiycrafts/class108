function start_btn(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rVPNnBYoi/model.json", modelReady)
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
    document.getElementById("result_hear").innerHTML = results[0].label;
    document.getElementById("result_accuracy").innerHTML = (results[0].confidence * 100).toFixed(2) + " %";


    i1 = document.getElementById("a1");
    i2 = document.getElementById("a2");
    i3 = document.getElementById("a3");
    i4 = document.getElementById("a4");

    if(results[0].label == 'Bells'){
        i1.src = "aliens-01.gif";
        i2.src = "aliens-02.png";
        i3.src = "aliens-03.png";
        i4.src = "aliens-04.png";
    }

    if(results[0].label == 'Clapping'){
        i1.src = "aliens-01.png";
        i2.src = "aliens-02.gif";
        i3.src = "aliens-03.png";
        i4.src = "aliens-04.png";
    }

    if(results[0].label == 'Water'){
        i1.src = "aliens-01.png";
        i2.src = "aliens-02.png";
        i3.src = "aliens-03.gif";
        i4.src = "aliens-04.png";
    }

    if(results[0].label == 'Background Noise'){
        i1.src = "aliens-01.png";
        i2.src = "aliens-02.png";
        i3.src = "aliens-03.png";
        i4.src = "aliens-04.gif";
    }
}


}