//Generate Random Number
function rand(start, end) {
    var r = start + Math.floor(Math.random() * (end - start));
    return r;
}

//Some Style For Generating Buttons
document.body.style.textAlign = "center";
document.body.style.marginTop = "100px";

//Generate A New Button
function generateButton() {
    //Create A Button
    var btn = document.createElement("button");
    //Create A Name For Button
    var btnTtext = document.createTextNode("Button " + rand(1, 100));

    btn.appendChild(btnTtext);
    btn.style.margin = "5px";
    btn.style.cursor = "pointer";
    btn.className = "btn btn-primary";

    //Button Background Color
    var bgColor = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
    btn.style.backgroundColor = bgColor;
    //Show The Button
    document.body.appendChild(btn);
}

//Generate Multiple Buttons
function generateMultipleButton() {
    var buttonNumber = rand(1, 10);
    for (var i = 0; i < buttonNumber; i++) {
        generateButton();
    }
    alert(buttonNumber + " Button Generated");
}