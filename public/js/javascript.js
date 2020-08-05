// Simple captcha
var n1 = Math.round(Math.random() * 10 + 1);
var n2 = Math.round(Math.random() * 10 + 1);
document.getElementById("content-captcha").innerHTML = n1 + " + " + n2 + " = ";

function validateForm() {
    var x = n1 + n2;
    var result = document.getElementById("captcha").value;
    if (x != result) {
        document.getElementById("fail").innerHTML = 'Please enter the correct Captcha!';
        return false;
    }
    return true;
}

//Hidden Navbar
document.getElementById('navbar').style.top = "-100px";
window.onscroll = function() {
    var currentScrollops = window.pageYOffset;
    //console: window.pageYoffset lấy ra Y của #blog là khoảng 502
    if (currentScrollops > 502) {
        document.getElementById('navbar').style.top = "0";
    } else {
        document.getElementById('navbar').style.top = "-100px";
    }
}

//Auto text title home
const text = document.getElementById('text');

const data1 = "Creative"
const data2 = "Berlin"
let index = 0;
let data = data1;
let full = false; //chữ đã được viết hết hay chưa


setInterval(autoText, 80);


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); //copy mạng :)))))
}

function autoText() {

    if (full == false) {
        text.innerText = data.slice(0, index);
        index++;
        if (index > data.length) {
            sleep(2000).then(() => { full = true; });
        }
    }

    if (full == true) {
        text.innerText = data.slice(0, index);
        index--;
        if (index == 0) {
            full = false;

            //change data 
            if (data == data1) {
                data = data2;
            } else {
                data = data1;
            }
        }
    }
}

const navResize = document.getElementById('navbarNavAltMarkup');
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) {
        navResize.classList.remove('d-flex');
        navResize.classList.remove('justify-content-end');
    } else {
        navResize.classList.add('d-flex');
        navResize.classList.add('justify-content-end');
    }
});
//load trang
if (window.innerWidth <= 1024) {
    navResize.classList.remove('d-flex');
    navResize.classList.remove('justify-content-end');
}
// owlcarousel
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                padding: 30
            },
            600: {
                items: 2

            },
            1000: {
                items: 3

            }
        }
    });
    $(".owl-carousel").trigger('play.owl.autoplay', [1500])
});