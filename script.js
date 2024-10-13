let hide = document.querySelector('.hide');

function myNav() {
    let y = window.scrollY;
    if (y > 200) {
        hide.style.display = 'block';
    } else {
        hide.style.display = 'none';
    }
}

window.addEventListener('scroll', myNav);

document.querySelector('video').playbackRate = 2.0;


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer.observe(el))

const fade = document.querySelectorAll('.fade');
fade.forEach((el) => observer.observe(el))

const hiddenn = document.querySelectorAll('.hiddenn');
hiddenn.forEach((el) => observer.observe(el))