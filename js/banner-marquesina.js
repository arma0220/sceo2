// ============================================================
//  banner-marquesina.js  –  banner rotativo de YouTube/Facebook
// ============================================================
//
// PARA AGREGAR UNA IMAGEN NUEVA: solo agrega un objeto más al
// arreglo SLIDES_BANNER de abajo. No hay que tocar el HTML ni el CSS.
//
//   { imagen: 'imagenes/NOMBRE_DEL_ARCHIVO.jpg',
//     link:   'https://...',      // a dónde lleva al hacer clic
//     alt:    'Texto descriptivo corto' }
//
// Tamaño recomendado para la imagen: 1900x440px aprox. (misma
// proporción que banner-youtube.jpg), JPEG calidad 80-90%. Si la
// imagen no es exactamente esa proporción no pasa nada grave, pero
// se puede ver recortada o con franjas — lo ideal es recortarla a esa
// proporción antes de subirla (en squoosh.app o cualquier editor).

const SLIDES_BANNER = [
    {
        imagen: 'imagenes/banner1.jpg',
        link: 'https://www.youtube.com/watch?v=pUgUJtr7Idk&t=2s',
        alt: 'El ABC de las emociones - Línea de la Vida 800 911 2000 - Canal de YouTube'
    },
    {
        imagen: 'imagenes/banner2.jpg',
        link: 'https://www.google.com/search?q=calendario+de+juegos+del+mundial+2026',
        alt: 'DGCFT apoyando a la selección'
    },
    {
        imagen: 'imagenes/banner3.jpg',
        link: 'ROCO%202025.pdf',
        alt: 'Obten tu reconocimiento oficial ROCO en 3 pasos'
    },
    {
        imagen: 'imagenes/banner4.jpg',
        link: 'https://www.facebook.com/profile.php?id=61590452188700',
        alt: 'SCEO - Facebook'
    }
];

const SEGUNDOS_POR_IMAGEN = 6;

function _construirMarquesina() {
    const contenedor = document.getElementById('banner-marquesina');
    if (!contenedor || SLIDES_BANNER.length === 0) return;

    contenedor.innerHTML = SLIDES_BANNER.map(function (s, i) {
        return '<a class="banner-marquesina-slide' + (i === 0 ? ' is-active' : '') + '" ' +
               'href="' + s.link + '" target="_blank" rel="noopener">' +
               '<img src="' + s.imagen + '" alt="' + s.alt + '" loading="' + (i === 0 ? 'eager' : 'lazy') + '">' +
               '</a>';
    }).join('');

    // Con una sola imagen no hace falta animar, ni flechas ni puntos.
    if (SLIDES_BANNER.length < 2) return;

    // ---------- Flechas de navegación (esquinas) ----------
    const flechaIzq = document.createElement('button');
    flechaIzq.type = 'button';
    flechaIzq.className = 'banner-marquesina-flecha banner-marquesina-flecha-izq';
    flechaIzq.setAttribute('aria-label', 'Imagen anterior');
    flechaIzq.innerHTML = '&#10094;';

    const flechaDer = document.createElement('button');
    flechaDer.type = 'button';
    flechaDer.className = 'banner-marquesina-flecha banner-marquesina-flecha-der';
    flechaDer.setAttribute('aria-label', 'Imagen siguiente');
    flechaDer.innerHTML = '&#10095;';

    contenedor.appendChild(flechaIzq);
    contenedor.appendChild(flechaDer);

    // ---------- Puntos de navegación ----------
    const puntos = document.createElement('div');
    puntos.className = 'banner-marquesina-puntos';
    SLIDES_BANNER.forEach(function (_, i) {
        const punto = document.createElement('button');
        punto.type = 'button';
        punto.className = 'banner-marquesina-punto' + (i === 0 ? ' is-active' : '');
        punto.setAttribute('aria-label', 'Mostrar imagen ' + (i + 1));
        punto.addEventListener('click', function () { irASlide(i); });
        puntos.appendChild(punto);
    });
    contenedor.appendChild(puntos);

    const slides = Array.from(contenedor.querySelectorAll('.banner-marquesina-slide'));
    const botonesPunto = Array.from(puntos.children);
    let actual = 0;
    let temporizador = null;

    function irASlide(indice) {
        slides[actual].classList.remove('is-active');
        botonesPunto[actual].classList.remove('is-active');
        actual = indice;
        slides[actual].classList.add('is-active');
        botonesPunto[actual].classList.add('is-active');
    }

    function siguiente() {
        irASlide((actual + 1) % slides.length);
    }

    function anterior() {
        irASlide((actual - 1 + slides.length) % slides.length);
    }

    flechaIzq.addEventListener('click', function (e) {
        e.preventDefault();
        anterior();
    });
    flechaDer.addEventListener('click', function (e) {
        e.preventDefault();
        siguiente();
    });

    function iniciarAutoplay() {
        detenerAutoplay();
        temporizador = setInterval(siguiente, SEGUNDOS_POR_IMAGEN * 1000);
    }

    function detenerAutoplay() {
        if (temporizador) clearInterval(temporizador);
    }

    // Pausar al pasar el mouse/dedo para que se pueda leer con calma.
    contenedor.addEventListener('mouseenter', detenerAutoplay);
    contenedor.addEventListener('mouseleave', iniciarAutoplay);

    iniciarAutoplay();
}

document.addEventListener('DOMContentLoaded', _construirMarquesina);
