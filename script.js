function first() {
    document.getElementById('myImage')
        .src = "assets/images/djionrock.jpg";
    document.getElementById('message')
        .innerHTML = "Hii! GeeksforGeeks people";
}

function second() {
    document.getElementById('myImage')
        .src = "assets/images/djicarcharger.jpg";
    document.getElementById('message')
        .innerHTML = "Bye! GeeksforGeeks people";
}
function third() {
    document.getElementById('myImage')
        .src = "assets/images/djiair.png";
    document.getElementById('message')
        .innerHTML = "Bye! GeeksforGeeks people";
}
function fourth() {
    document.getElementById('myImage')
        .src = "assets/images/djidroneprops.jpg";
    document.getElementById('message')
        .innerHTML = "Bye! GeeksforGeeks people";
}


// var myImage = Array(5);
// myImage[0] = "https://www.youtube.com/embed/ZIhfXCzaJbQ?autoplay=1";
// myImage[1] = "https://www.youtube.com/embed/2-fvRJeNHJg?autoplay=1";
// myImage[2] = "https://www.youtube.com/embed/pMYFWCbECKk?autoplay=1";
// myImage[3] = "https://www.youtube.com/embed/8nsGiPCWLqY?autoplay=1";
// myImage[4] = "https://www.youtube.com/embed/OSuGsygjaCU?autoplay=1";


counter = 0;
function getNextVideo() {
    document.getElementById("myImage").src = video_list[counter];
    document.getElementById("description").innerHTML = description_list[counter];
    counter = counter + 1;
    if (counter > 4) {
        counter = 0;
    }


} // end of function






window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}





// Add active class to the current button (highlight it)
var header = document.getElementById("carousel");
var btns = header.getElementsByClassName("carasl");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("actives");
        current[0].className = current[0].className.replace(" actives", "");
        this.className += " actives";
    });
}