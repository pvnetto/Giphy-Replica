// Fixed nav parameters
let navbarCollapseWidth = 1170;    // Lg
const nav = document.querySelector('nav');
const navSearch = nav.querySelector('.navbar-search');
const distToTop = navSearch.offsetTop;

window.addEventListener('scroll', FixNavBar);

// Hovering window parameters
const dropdownTrigger = document.querySelector('.nav-item-trigger');
const dropdownWindow = document.querySelector('.menu-dropdown');

dropdownTrigger.addEventListener('mouseenter', HandleTriggerEnter);
dropdownTrigger.addEventListener('mouseleave', HandleTriggerLeave);


function FixNavBar() {
    let offsetFromTop = 0;
    if (window.scrollY >= distToTop + offsetFromTop) {
        if (window.innerWidth >= navbarCollapseWidth) {
            document.body.style['padding-top'] = `${nav.offsetHeight - distToTop}px`;
        }
        else {
            document.body.style['padding-top'] = `0px`;
        }

        nav.classList.add('fixed-nav');
    }
    else {
        document.body.style['padding-top'] = `0px`;
        nav.classList.remove('fixed-nav');
    }
}

function HandleTriggerEnter(e) {
    dropdownWindow.classList.add('active');

    let triggerCoords = this.getBoundingClientRect();
    let navCoords = nav.getBoundingClientRect();

    let arrowXPos = (this.offsetLeft - dropdownWindow.clientWidth / 2) + (this.clientWidth / 2) - 13;
    let arrow = dropdownWindow.querySelector('.arrow');
    arrow.style.setProperty('transform', `translate(${arrowXPos}px, -50%) rotate(45deg)`);
}

function HandleTriggerLeave(e) {
    dropdownWindow.classList.remove('active');
}