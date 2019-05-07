let circle1, circle2, circle3, circle4;
let w, h;
let body;
let maillink,mailtitle,mailmessage;


function startCircle1Animation(c) {
    const nextXPos = Math.round((Math.random() - 0.2) * w);
    const nextYPos = Math.round((Math.random() - 0.2) * h);
    const nextSize = Math.round(Math.random() * (w + h) / 2 + 100);

    c.style.top = nextYPos + "px";
    c.style.left = nextXPos + "px";
    c.style.width = nextSize + "px";
    c.style.height = nextSize + "px";
    setTimeout(function () {
        startCircle1Animation(c);
    }, 12000);
}
function init() {
    console.log("start");

    body = document.getElementById("body");
    maillink = document.getElementById('maillink');
    mailtitle = document.getElementById('mailtitle');
    mailmessage = document.getElementById('mailmessage');

    maillink.onclick = function () {
        this.href = "mailto:arthur.catrisse@hotmail.com?subject=";
        this.href += mailtitle.value;
        this.href += "&body=";
        this.href += mailmessage.value;
    };

    circle1 = document.getElementById('circle1');
    circle2 = document.getElementById('circle2');
    circle3 = document.getElementById('circle3');
    circle4 = document.getElementById('circle4');
    circle5 = document.getElementById('circle5');
    w = window.innerWidth;
    h = window.innerHeight;
    console.log(w + "   " + h);


    startCircle1Animation(circle1);
    setTimeout(function () {
        startCircle1Animation(circle2);
    }, 2400);
    setTimeout(function () {
        startCircle1Animation(circle3);
    }, 4800);
    setTimeout(function () {
        startCircle1Animation(circle4);
    }, 6900);
    // setTimeout(function () {
    //     startCircle1Animation(circle5);
    // }, 11000);
}

function toggleOnModal(id) {
    document.getElementById(id).classList.add("is-active");
    body.classList.add("no-scroll");
}

function toggleOffModal(id) {
    document.getElementById(id).classList.remove("is-active");
    body.classList.remove("no-scroll");
}


//window.addEventListener('load', init)*
setTimeout(init, 200);