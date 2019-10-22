document.body.onload = start;
var sensex = [300, 150, 200, 100, 50, 75, 200];
var nifty = [100, 200, 50, 75, 30, 60, 250];
var barg = [80, 70, 50, 20];
var sencount = 1.5;
var nifcount = 1.5;
var timer = 0;
var senobj = document.getElementById("sensexpoly");
var senstr = "";
var news = [
    "apple has messed its new product",
    "samsung fold is a joke",
    "oneplus phones are descent",
    "pixel 4 is the most buggy phone",
    "vivo is copying the other brands"
];
sensexInsert();
function start() {
    setInterval("TIMER()", 50); //in milliseconds
}
function pointConvert(a) {
    return 30 - a / 10 + 5;
}
function TIMER() {
    timer += 1;
    console.log(timer);
    sensexInsert();
    niftyInsert();
    barAssign();
    headLines();
}
function sensexInsert() {
    if (sensex.length && timer % 5 == 0) {
        var b = pointConvert(sensex.shift());
        var svg = document.getElementById("sen");
        var point = svg.createSVGPoint();
        point.x = sencount * 10 - 5;
        point.y = b;
        var senpoly = document.getElementById("sensexpoly");
        senpoly.points.appendItem(point);
        sencount++;
    }
}
function niftyInsert() {
    if (nifty.length && timer % 5 == 0) {
        var b = pointConvert(nifty.shift());
        var svg = document.getElementById("sen");
        var point = svg.createSVGPoint();
        point.x = nifcount * 10 - 5;
        point.y = b;
        var nifpoly = document.getElementById("niftypoly");
        nifpoly.points.appendItem(point);
        nifcount++;
    }
}
function barAssign() {
    if (timer % 10 == 0 && barg.length) {
        var svg = document.getElementById("sen");
        if (timer / 10 == 1) {
            var barobj = document.getElementById("bar1");
            var b = barg.shift() / 2;
            barobj.setAttribute("height", b);
            barobj.setAttribute("y", 170 - b);
        } else if (timer / 10 == 2) {
            var barobj = document.getElementById("bar2");
            var b = barg.shift() / 2;
            barobj.setAttribute("height", b);
            barobj.setAttribute("y", 170 - b);
        } else if (timer / 10 == 3) {
            var barobj = document.getElementById("bar3");
            var b = barg.shift() / 2;
            barobj.setAttribute("height", b);
            barobj.setAttribute("y", 170 - b);
        } else if (timer / 10 == 4) {
            var barobj = document.getElementById("bar4");
            var b = barg.shift() / 2;
            barobj.setAttribute("height", b);
            barobj.setAttribute("y", 170 - b);
        }
    }
}
function headLines() {
    if (news.length && (timer % 100 == 0 || timer == 10)) {
        var t1 = document.getElementById("hd1");
        var t2 = document.getElementById("hd2");
        var t3 = document.getElementById("hd3");
        var t4 = document.getElementById("hd4");
        var store;
        t4.innerHTML = t3.innerHTML;
        t3.innerHTML = t2.innerHTML;
        t2.innerHTML = t1.innerHTML;
        store = news.shift();
        t1.innerHTML = "-> " + store;
        news.push(store);
    }
}
