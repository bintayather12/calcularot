function getBtn(number) {
    var input = document.getElementById("result");
    input.value += number
}

function clearResult(){
    var input = document.getElementById("result");
    input.value = "";
}

function backSpace(){
    var input =document.getElementById("result")
    input.value = input.value.slice(0,-1);
}
function getResult(){
    var input =document.getElementById("result")
    input.value = eval(input.value);
}
