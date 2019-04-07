let left = document.getElementById('left'),
    right = document.getElementById('right');

left.addEventListener('click',
    () => {

        let boxLeft = document.getElementsByClassName('box--left')[0];
        let boxMid = document.getElementsByClassName('box--mid')[0];
        let boxRight = document.getElementsByClassName('box--right')[0];
        let boxHidden = document.getElementsByClassName('box--hidden')[0];

        boxLeft.classList.add('box--hidden')
        boxLeft.classList.remove('box--left')
        boxMid.classList.add('box--left')
        boxMid.classList.remove('box--mid')
        boxRight.classList.add('box--mid')
        boxRight.classList.remove('box--right')
        boxHidden.classList.add('box--right')
        boxHidden.classList.remove('box--hidden')
    }
)

right.addEventListener('click',
    () => {

        let boxLeft = document.getElementsByClassName('box--left')[0];
        let boxMid = document.getElementsByClassName('box--mid')[0];
        let boxRight = document.getElementsByClassName('box--right')[0];
        let boxHidden = document.getElementsByClassName('box--hidden')[0];

        boxLeft.classList.add('box--mid')
        boxLeft.classList.remove('box--left')
        boxMid.classList.add('box--right')
        boxMid.classList.remove('box--mid')
        boxRight.classList.add('box--hidden')
        boxRight.classList.remove('box--right')
        boxHidden.classList.add('box--left')
        boxHidden.classList.remove('box--hidden')
    }
)

//Accordion Menu
class Accordion {
    constructor(heading) {
        this.heading = heading;
    }

    showOne() {
        const accordionHeading = document.querySelectorAll(this.heading);

        accordionHeading.forEach((item, key) => {
            item.addEventListener('click', () => {
                accordionHeading.forEach(element => {
                    element.classList.contains('active') ?
                        element.classList.remove('active') : null;
                });

                item.classList.add('active');
            });
        });
    }

    showAll() {
        const accordionHeading = document.querySelectorAll(this.heading);

        accordionHeading.forEach((item, key) => {
            item.addEventListener('click', () => {
                item.classList.contains('active') ?
                    item.classList.remove('active') :
                    item.classList.add('active');
            });
        });
    }
}

const accordion = new Accordion('.title');
accordion.showOne();

// Back to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



