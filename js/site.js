// ============================================================
//  site.js  –  lógica compartida entre TODAS las páginas
// ============================================================

// ---------- Navegación entre secciones (index.html) ----------

function mostrarSeccionLocal(id) {
    const destino = document.getElementById(id);
    if (!destino) return false;
    ['contenido-principal', 'especialidades-contenido', 'requisitos-inscripcion',
     'plantel-info', 'especialidad-info', 'noticia-detalle'].forEach(function (sid) {
        const s = document.getElementById(sid);
        if (s) s.style.display = 'none';
    });
    destino.style.display = 'block';
    window.scrollTo(0, 0);
    return true;
}

if (typeof window.mostrarEspecialidades !== 'function') {
    window.mostrarEspecialidades = function () {
        if (document.getElementById('contenido-principal')) {
            mostrarSeccionLocal('especialidades-contenido');
        } else {
            sessionStorage.setItem('mostrarSeccion', 'especialidades');
            window.location.assign('index.html');
        }
    };
}

if (typeof window.mostrarRequisitos !== 'function') {
    window.mostrarRequisitos = function () {
        if (document.getElementById('contenido-principal')) {
            mostrarSeccionLocal('requisitos-inscripcion');
        } else {
            sessionStorage.setItem('mostrarSeccion', 'requisitos');
            window.location.assign('index.html');
        }
    };
}

// ---------- Dropdowns móviles (≤768 px) ----------
// Un único sistema reutilizado en TODAS las páginas.

function setupMobileDropdowns() {
    const navMain = document.querySelector('.nav-main');
    if (!navMain) return;

    const dropdowns = Array.from(navMain.querySelectorAll('.dropdown'));
    const mobileMQ  = window.matchMedia('(max-width: 768px)');

    // Toggle por tap en el encabezado del dropdown
    dropdowns.forEach(function (dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (!toggle || toggle._dropdownBound) return;
        toggle._dropdownBound = true;

        toggle.addEventListener('click', function (e) {
            if (!mobileMQ.matches) return;
            e.preventDefault();
            e.stopPropagation();
            const wasOpen = dropdown.classList.contains('is-open');
            dropdowns.forEach(function (d) { d.classList.remove('is-open'); });
            if (!wasOpen) dropdown.classList.add('is-open');
        });
    });

    // Cerrar al elegir una opción
    navMain.querySelectorAll('.dropdown-menu a').forEach(function (link) {
        if (link._dropdownLinkBound) return;
        link._dropdownLinkBound = true;
        link.addEventListener('click', function () {
            const dd = link.closest('.dropdown');
            if (dd) dd.classList.remove('is-open');
        });
    });

    // Cerrar al tocar fuera
    if (!document._dropdownOutsideBound) {
        document._dropdownOutsideBound = true;
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.nav-main .dropdown')) {
                document.querySelectorAll('.nav-main .dropdown.is-open')
                        .forEach(function (d) { d.classList.remove('is-open'); });
            }
        });
    }

    // Limpiar estado al volver a desktop
    if (!mobileMQ._dropdownCleanupBound) {
        mobileMQ._dropdownCleanupBound = true;
        mobileMQ.addEventListener('change', function (e) {
            if (!e.matches) {
                dropdowns.forEach(function (d) { d.classList.remove('is-open'); });
            }
        });
    }
}

// ---------- Inicialización ----------

document.addEventListener('DOMContentLoaded', function () {
    setupMobileDropdowns();

    // Hash navigation en index.html
    if (document.getElementById('contenido-principal')) {
        if (window.location.hash === '#requisitos') window.mostrarRequisitos();
        else if (window.location.hash === '#especialidades') window.mostrarEspecialidades();
    } else {
        if (window.location.hash === '#especialidades' || window.location.hash === '#requisitos') {
            history.replaceState(null, null, window.location.pathname);
        }
    }
});

// También ejecutar antes de DOMContentLoaded si el DOM ya está listo
// (scripts al final del body lo necesitan)
if (document.readyState !== 'loading') {
    setupMobileDropdowns();
}
