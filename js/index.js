const buttonClick = document.querySelectorAll('.destination .btn')
const navBar = document.querySelectorAll('.nav a')
const header1 = document.querySelector('h1')
let document1 = document;
let nav = document.querySelector('header.main-navigation')
// TweenLite.to(header1, 0.5, { rotation: "225_short" })


// Make navebar links go red when hover over them and stay white when moving away. wheel makes bg go red (dunno why)

navBar.forEach(element => {
    element.addEventListener('mouseover', (element) => { element.target.style.color = 'red' });
    element.addEventListener('mouseout', (element) => { element.target.style.color = 'white' });
    element.addEventListener('wheel', (element) => { element.target.style.backgroundColor = 'red' });   
});

//On load make background colors of body and header random

window.addEventListener('load', () => {
    for (let i = 0; i < 730; i++) {
        nav.style.backgroundColor = bgColor;
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        document1.body.style.backgroundColor = bgColor;
        
    }
});   

// Randomise background color of buttons so the change when mouseover

    buttonClick.forEach(function (element) {
        element.addEventListener('mouseover', () => {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        element.style.backgroundColor = bgColor;
    })

    })

// Stop links from going to google with preventDefault()

navBar.forEach(function (element) {
    element.addEventListener('click', navBar => {
        navBar.preventDefault();
    });
});



// header1.addEventListener('dblclick', function () {
//     transform: DeviceRotationRate(20deg);
// });
// buttonClick.addEventListener("wheel", () => { buttonClick.style.color = 'yellow' });
// buttonClick.addEventListener("keydown", function () { buttonClick.style.color = 'yellow' });
// buttonClick.addEventListener("drag / drop", function () { buttonClick.style.color = 'yellow' });
// buttonClick.addEventListener("load", function () { buttonClick.style.color = 'yellow' });
// buttonClick.addEventListener("focus", function () { buttonClick.style.color = 'yellow' });
// buttonClick.addEventListener("resize", function () { buttonClick.style.color = 'yellow' });
// buttonClick.addEventListener("scroll", function () { buttonClick.style.color = 'yellow' });
// buttonClick.addEventListener("select", function () { buttonClick.style.color = 'yellow' });
