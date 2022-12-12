var input_box=document.getElementById("result")

function UserClickButton(input){
    var oldinput=input_box.value;
    var newinput=oldinput+""+input;
    input_box.value=newinput;
}

function CalcValue(){
    var input=input_box.value;
    var equal=eval(input);
    input_box.value=equal;
}

function AC(){
    input_box.value="";
}