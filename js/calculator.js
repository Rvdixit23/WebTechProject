buttonList = document.querySelectorAll(".button");
nonPrintingButtons = ["AC", "C", "="];

for (let i = 0; i < buttonList.length; ++i) {
    if (!nonPrintingButtons.includes(buttonList[i].value)) {
        buttonList[i].addEventListener("click", function() {
            insert(buttonList[i].value);
        });
    } else {
        switch (buttonList[i].value) {
            case "AC":
                buttonList[i].addEventListener("click", clear);
                break;
            case "C":
                buttonList[i].addEventListener("click", del);
                break;
            case "=":
                buttonList[i].addEventListener("click", equal);
                break;
        }
    }
}

function insert(num) {
    document.form.textview.value += num;
}

function clear() {
    document.form.textview.value = "";
}

function del() {
    val = document.form.textview.value;
    val = val.slice(0, -1);
    document.form.textview.value = val;
}

function equal() {
    exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

function solve(){
    var v1=document.getElementById("stock");
    v1=v1.value;
    var v2=document.getElementById("number");
    v2=v2.value;
    var v3=document.getElementById("rate");
    v3=v3.value;
    var v4=document.getElementById("time");
    v4=v4.value;
    var v5=v1*v2*v3*v4/100;
    console.log(v5);
    var final= document.getElementById("final");
    final.value=v5;
}