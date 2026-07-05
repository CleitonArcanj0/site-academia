

const icon = document.querySelector('#menuIcon');
const menuSections = document.querySelector('#menuSections');

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
