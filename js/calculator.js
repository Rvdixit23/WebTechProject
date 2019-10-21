var ipop = document.getElementById("ipop");
var store = "";
var symbol = "";
var flag = 0;
var equal = 0;
function fequal() {
    equal = 1;
    fcal();
    symbol = "";
    flag = 1;
}
function fac() {
    ipop.value = "";
    store = "";
}
function fclear() {
    ipop.value = "";
}
function fpoint() {
    if (flag == 1) {
        ipop.value = "";
        flag = 0;
    }
    ipop.value += ".";
}
function f0() {
    if (flag == 1) {
        ipop.value = "";
        flag = 0;
    }
    ipop.value += 0;
}
function f1() {
    if (flag == 1) {
        ipop.value = "";
        flag = 0;
    }
    ipop.value += "1";
}
function f2() {
    if (flag == 1) {
        ipop.value = "";
        flag = 0;
    }
    ipop.value += "2";
}
function f3() {
    if (flag == 1) {
        ipop.value = "";
        flag = 0;
    }
    ipop.value += "3";
}
function f4() {
    if (flag == 1) {
        ipop.value = "";
        flag = 0;
    }
    ipop.value += "4";
}
function f5() {
    if (flag == 1) {
        ipop.value = "";
        flag = 0;
    }
    ipop.value += "5";
}
function f6() {
    if (flag == 1) {
        ipop.value = "";
        flag = 0;
    }
    ipop.value += "6";
}
function f7() {
    if (flag == 1) {
        ipop.value = "";
        flag = 0;
    }
    ipop.value += "7";
}
function f8() {
    if (flag == 1) {
        ipop.value = "";
        flag = 0;
    }
    ipop.value += "8";
}
function f9() {
    if (flag == 1) {
        ipop.value = "";
        flag = 0;
    }
    ipop.value += "9";
}
function fadd() {
    fcal();
    if (symbol == "") symbol = "+";
}
function fsub() {
    if (ipop.value == "") ipop.value = "-";
    else {
        fcal();
        if (symbol == "") symbol = "-";
    }
}
function fmul() {
    fcal();
    if (symbol == "") symbol = "*";
}
function fdiv() {
    fcal();
    if (symbol == "") symbol = "/";
}
function fcal() {
    if (store == "") {
        store = ipop.value;
        ipop.value = "";
    } else {
        if (symbol == "+") {
            ipop.value = (parseFloat(ipop.value) + parseFloat(store)).toString();
        } else if (symbol == "-") {
            ipop.value = (parseFloat(store) - parseFloat(ipop.value)).toString();
        } else if (symbol == "*") {
            ipop.value = (parseFloat(ipop.value) * parseFloat(store)).toString();
        } else if (symbol == "/") {
            ipop.value = (parseFloat(store) / parseFloat(ipop.value)).toString();
        }
        symbol = "";
        if (equal == 0) {
            store = ipop.value;
        } else equal = 0;
        flag = 1;
    }
}
