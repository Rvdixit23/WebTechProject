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
