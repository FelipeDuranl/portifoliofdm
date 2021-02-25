const navSlide = () => {
    const chest = document.querySelector('.chest');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    chest.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

        //Animete links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //chest animation
        chest.classList.toggle('toggle');

    });


}

navSlide();