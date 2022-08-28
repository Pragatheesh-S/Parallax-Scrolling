let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('brand_name');
let btn = document.getElementById('btn');
let header = document.querySelector('header');
let bio = document.getElementById('bio');
//let sec = document.getElementById('reveal')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 +'px';
    moon.style.top = value * 1.05 +'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight= value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    bio.style.letterSpacing = value * 0.01 + 'px';
    //sec.style.marginTop = value * 0.1 + 'px'
})



function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// box animation

// window.addEventListener('scroll', reveal);

// function reveal(){
//     let reveals = document.getElementById('.reveal');

//     for (var i = 0; i < reveals.length; i++){
//         let windowheight = window.innerHeight;
//         let revealtop = reveals[i].getBoundingClientRect().top;
//         let revealpoint = 150;

//         if(revealtop < windowheight - revealpoint){
//             reveals[i].classList.add('active');
//         }
//         else{
//             reveals[i].classList.remove('active');
//         }
//     }
// }