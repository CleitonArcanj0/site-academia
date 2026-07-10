

const icon = document.querySelector('#menuIcon');
const menuSections = document.querySelector('#menuSections');
const accordion = document.querySelector("#accordion")
const elements = document.querySelectorAll(".fade-up")

accordion.addEventListener('click', expandAccordion)


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(item => {
    observer.observe(item)
})


function expandAccordion(e) {
    let input = e.target
    if (input.checked) {
        let list = input.parentElement.querySelector('ul')
        let title = input.parentElement.querySelector("span")
        let chevron = input.parentElement.querySelector("img")
        chevron.classList.toggle('-rotate-90')
        list.classList.toggle('hidden')
        title.classList.toggle('text-primary')

    }
}

if (icon) {
    icon.addEventListener('click', () => {
        icon.classList.toggle('rotate-90');

        if (menuSections.classList.contains('hidden')) {
            menuSections.classList.remove('hidden')
            menuSections.classList.add('mobile-menu')
        } else {
            menuSections.classList.add('hidden')
            menuSections.classList.remove('mobile-menu');
        }

    });
}


