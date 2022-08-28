function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 1;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function reveal1() {
    var reveals1 = document.querySelectorAll(".reveal1");

    for (var i = 0; i < reveals1.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop1 = reveals1[i].getBoundingClientRect().top;
        var elementVisible = 1;

        if (elementTop1 < windowHeight - elementVisible) {
            reveals1[i].classList.add("active");
        } else {
            reveals1[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal1);

function reveal2() {
    var reveals2 = document.querySelectorAll(".reveal2");

    for (var i = 0; i < reveals2.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop2 = reveals2[i].getBoundingClientRect().top;
        var elementVisible = 1;

        if (elementTop2 < windowHeight - elementVisible) {
            reveals2[i].classList.add("active");
        } else {
            reveals2[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal2);

// function reveal() {
//     const list = [".reveal", "reveal1"]
//     var reveals = document.innerHTML = list;

//     for (var i = 0; i < reveals.length; i++) {
//         var windowHeight = window.innerHeight;
//         var elementTop = reveals[i].getBoundingClientRect().top;
//         var elementVisible = 150;

//         if (elementTop < windowHeight - elementVisible) {
//             reveals[i].classList.add("active");
//         } else {
//             reveals[i].classList.remove("active");
//         }
//     }
// }

// window.addEventListener("scroll", reveal);