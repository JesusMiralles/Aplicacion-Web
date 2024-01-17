const nav = document.querySelector('.nav');
let lastKnownScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastKnownScrollY) {
        // Scrolling down
        if (currentScrollY > 450) { // Cambia 100 por la posición en la que deseas que el cambio ocurra
            nav.style.backgroundColor = '#fff';
            nav.style.color = '#333';
        }
    } else {
        // Scrolling up 
        if (currentScrollY <= 450) { // Cambia 100 por la posición en la que deseas que el cambio ocurra
            nav.style.backgroundColor = 'transparent';
            nav.style.color = '#fff';
        }
    }

    lastKnownScrollY = currentScrollY;
});
