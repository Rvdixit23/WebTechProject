document.body.onload = start;
var sensex = [300, 150, 200, 100, 50, 75, 200];
var nifty = [100, 200, 50, 75, 30, 60, 250];
var barg = [80, 70, 50, 20, 30];
var sencount = 1.5;
var nifcount = 1.5;
var timer = 0;
var senobj = document.getElementById("sensexpoly");
var senstr = "";
var news = [
    "Infosys fall not found its edge yet",
    "Apple have been leading this week",
    "Wallmart influences India now",
    "RBI supercedes DFHL",
    "Sensex zooms 23%",
    "Oneplus soars in market"
];
sensexInsert();

function start() {
    signFunc()
    setInterval("TIMER()", 50); //in milliseconds
}

function pointConvert(a) {
    return 30 - a / 10 + 5;
}

function TIMER() {
    timer += 1;
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
    var svg = document.getElementById("sen");
    if (timer % 20 == 5) {
        var barobj = document.getElementById("bar1");
        var b = barg.shift() / 2;
        barobj.setAttribute("height", b);
        barobj.setAttribute("y", 50 - b);
        barg.push(b * 2);
    } else if (timer % 20 == 10) {
        var barobj = document.getElementById("bar2");
        var b = barg.shift() / 2;
        barobj.setAttribute("height", b);
        barobj.setAttribute("y", 50 - b);
        barg.push(b * 2);
    } else if (timer % 20 == 15) {
        var barobj = document.getElementById("bar3");
        var b = barg.shift() / 2;
        barobj.setAttribute("height", b);
        barobj.setAttribute("y", 50 - b);
        barg.push(b * 2);
    } else if (timer % 20 == 0) {
        var barobj = document.getElementById("bar4");
        var b = barg.shift() / 2;
        barobj.setAttribute("height", b);
        barobj.setAttribute("y", 50 - b);
        barg.push(b * 2);
    }
}

function headLines() {
    if (news.length && (timer % 20 == 0 || timer == 10)) {
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

function signFunc() {
    var div = document.getElementById("topbarRight")
    var faq = document.createElement("a");
    faq.id = 'faq';
    faq.innerHTML = 'FAQ';
    faq.href = 'about.html';
    div.appendChild(faq);
    var cook = document.cookie.split(";")
    var cook = cook[0].split('=');

    if (cook[1] == "%2F") {
        var signup = document.createElement("a");
        signup.id = 'sup';
        signup.href = 'signup.html';
        signup.innerHTML = 'Sign Up';
        var login = document.createElement("a");
        login.id = 'lin';
        login.href = 'login.html';
        login.innerHTML = 'Sign In';
        div.appendChild(signup);
        console.log('donA');
        div.appendChild(login);
        console.log('donB');
    } else {
        var hello = document.createElement("a");
        hello.innerHTML = 'Hi, ' + cook[1];
        hello.id = 'hello';
        hello.href = 'index.html'
        var signout = document.createElement("a");
        signout.id = 'sout';
        signout.onclick = clearCookie;
        signout.href = 'index.html';
        signout.innerHTML = 'Sign Out';
        var calcer = document.createElement("a");
        calcer.id = "calculator";
        calcer.href = "calculator.html";
        calcer.innerHTML = "Calc";
        var transaction = document.createElement("a");
        transaction.id = "transaction";
        transaction.href = "transaction.html";
        transaction.innerHTML = "Transact";

        div.appendChild(calcer);
        div.appendChild(transaction);
        div.appendChild(signout);
        div.appendChild(hello);
    }
}

function clearCookie() {
    var date = new Date;
    date.setMonth(date.getMonth - 1);
    console.log(date.toUTCString);
    document.cookie = "name= ;" + "expires=" + date.toUTCString + ";";
    console.log("cleared-cookie");
}