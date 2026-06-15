function mostrarSeccionLocal(id) {
    const destino = document.getElementById(id);
    if (!destino) return false;

    ['contenido-principal', 'especialidades-contenido', 'requisitos-inscripcion', 'plantel-info', 'especialidad-info', 'noticia-detalle'].forEach(function (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) section.style.display = 'none';
    });

    destino.style.display = 'block';
    window.scrollTo(0, 0);
    return true;
}

if (typeof window.mostrarEspecialidades !== 'function') {
    window.mostrarEspecialidades = function () {
        const esPaginaPrincipal = document.getElementById('contenido-principal') !== null;

        if (esPaginaPrincipal) {
            // Si ya estamos en index.html, mostramos la sección inmediatamente
            mostrarSeccionLocal('especialidades-contenido');
        } else {
            // SI ESTAMOS EN OTRA PÁGINA: Usar sessionStorage en lugar de hash fragments
            sessionStorage.setItem('mostrarSeccion', 'especialidades');
            window.location.assign('index.html');
        }
    };
}

if (typeof window.mostrarRequisitos !== 'function') {
    window.mostrarRequisitos = function () {
        const esPaginaPrincipal = document.getElementById('contenido-principal') !== null;

        if (esPaginaPrincipal) {
            mostrarSeccionLocal('requisitos-inscripcion');
        } else {
            // Usar sessionStorage en lugar de hash fragments
            sessionStorage.setItem('mostrarSeccion', 'requisitos');
            window.location.assign('index.html');
        }
    };
}

document.addEventListener('DOMContentLoaded', function () {
    // Comprobar rigurosamente si existe el contenedor de la página principal
    const esPaginaPrincipal = document.getElementById('contenido-principal') !== null;

    if (esPaginaPrincipal) {
        // Solo si estamos en la principal ejecutamos las funciones de visualización
        if (window.location.hash === '#requisitos') {
            window.mostrarRequisitos();
        } else if (window.location.hash === '#especialidades') {
            window.mostrarEspecialidades();
        }
    } else {
        // SI NO ES LA PÁGINA PRINCIPAL:
        // Eliminamos temporalmente el comportamiento nativo del hash local
        // para que no interfiera con las funciones personalizadas.
        if (window.location.hash === '#especialidades' || window.location.hash === '#requisitos') {
            // Limpia el hash de la URL sin recargar para romper el bucle erróneo
            history.replaceState(null, null, window.location.pathname);
        }
    }

    // Manejo de menú hamburguesa en móviles
    function setupMobileMenu() {
        const isMobile = window.innerWidth <= 768;
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navMain = document.querySelector('.nav-main');
        const overlay = document.querySelector('.mobile-menu-overlay');

        if (!menuBtn || !navMain || !overlay) return;

        // Limpiar listeners anteriores usando flag en lugar de cloneNode
        if (menuBtn.dataset.siteMenu) return;
        menuBtn.dataset.siteMenu = 'true';
        const newMenuBtn = menuBtn;

        // Manejar dropdowns en táctil: se registran siempre, independientemente
        // del modo hamburguesa, para que funcionen en TODAS las páginas y viewports.
        const dropdowns = document.querySelectorAll('.dropdown');
        const mobileMQ = window.matchMedia('(max-width: 768px)');
        dropdowns.forEach(function (dropdown) {
            const toggle = dropdown.querySelector('.nav-dropdown-toggle');
            if (!toggle || toggle.dataset.siteDropdown) return;
            toggle.dataset.siteDropdown = 'true';

            toggle.addEventListener('click', function (event) {
                if (!mobileMQ.matches) return; // Solo en móvil
                event.preventDefault();
                event.stopPropagation();
                
                const wasOpen = dropdown.classList.contains('is-open');
                // Cierra todos los demás
                dropdowns.forEach(d => d.classList.remove('is-open'));
                // Abre/cierra este según estado anterior
                if (!wasOpen) dropdown.classList.add('is-open');
                console.log('Dropdown toggled:', dropdown.classList.contains('is-open'));
            });
        });

        // Cerrar dropdowns al hacer clic en opciones del menú
        const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
        dropdownLinks.forEach(function (link) {
            if (link.dataset.siteDropdownLink) return;
            link.dataset.siteDropdownLink = 'true';
            link.addEventListener('click', function () {
                const dropdown = link.closest('.dropdown');
                if (dropdown) dropdown.classList.remove('is-open');
            });
        });

        // Cerrar dropdowns al hacer clic fuera de la navegación
        if (!document.dataset.siteDropdownOutside) {
            document.dataset.siteDropdownOutside = 'true';
            document.addEventListener('click', function (e) {
                if (!e.target.closest('.nav-main .dropdown')) {
                    document.querySelectorAll('.nav-main .dropdown.is-open')
                        .forEach(d => d.classList.remove('is-open'));
                }
            });
        }

        if (isMobile) {
            // Mostrar botón de menú en móviles
            newMenuBtn.style.display = 'block';
            console.log('Mobile menu button shown');

            // Toggle menú al hacer clic en el botón
            newMenuBtn.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                navMain.classList.toggle('active');
                overlay.classList.toggle('active');
                console.log('Menu toggled, active:', navMain.classList.contains('active'));
            });

            // Cerrar menú al hacer clic en el overlay
            overlay.addEventListener('click', function () {
                navMain.classList.remove('active');
                overlay.classList.remove('active');
                console.log('Menu closed via overlay');
            });
        } else {
            // Ocultar botón de menú en desktop
            newMenuBtn.style.display = 'none';
            navMain.classList.remove('active');
            overlay.classList.remove('active');
            console.log('Mobile menu button hidden (desktop)');
        }
    }

    // Configurar menú móvil al cargar y al cambiar tamaño de ventana
    setupMobileMenu();

    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(setupMobileMenu, 250);
    });
});