// TAB
document.querySelectorAll('.tab-trigger').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        document.querySelectorAll('.servicesmenu__element').forEach(
            (child) => child.classList.remove('services__item-active')
        );
        document.querySelectorAll('.tab-trigger').forEach(
            (child) => child.classList.remove('tab-trigger__active')
        );
        item.classList.add('tab-trigger__active');
        document.getElementById(id).classList.add('services__item-active');
    })
);
document.querySelector('.tab-trigger').click();
// accordion
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", openCurrAccordion);
}
function openCurrAccordion(e)  {
    for (let i = 0; i < acc.length; i++) {
    const accordionDescr = acc[i].nextElementSibling;
    if (this === acc[i] && !acc[i].classList.contains('active')) {
        acc[i].classList.add('active');
        accordionDescr.style.maxHeight = accordionDescr.scrollHeight + 'px';
        accordionDescr.style.margin = '0 0 20px 0';
    } else {
        acc[i].classList.remove('active');
        accordionDescr.style.maxHeight = '0px';
        accordionDescr.style.margin = null;
    }
  }
}
// Burger
function showBurger() {
  menu.classList.toggle('active');
  content.classList.toggle('active__content');
  }
const menu = document.querySelector('.mobile-header');
const content = document.querySelector('.burger-menu-content');
const menuButton = document.querySelector('.burger-button');
menuButton.addEventListener('click', showBurger);
// smooth scroll
const anchors = document.querySelectorAll('.smooth-scroll')
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault()
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}