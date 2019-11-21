function randomise() {
    tableDataList = document.querySelectorAll("td")
    for (var i = 0; i <= tableDataList.length; ++i) {
        if (tableDataList[i].getAttribute("class") != 'company-name') {
            tableDataList[i].innerHTML = Math.random() * 1000;
        }
    }
}

document.querySelector("body").addEventListener("mouseenter", randomise);