document.addEventListener('DOMContentLoaded', function () {

    // ============================================================
    // FIX MENÚ HAMBURGUESA EN PÁGINAS SECUNDARIAS (boletines, historico)
    // En index.html el menú hamburguesa funciona correctamente.
    // En boletines.html / historico.html el botón tiene display:none en el
    // HTML y el JS de site.js no lo activa de forma confiable, dejando la
    // barra de navegación en modo comprimido donde los dropdowns no caben.
    // Este bloque replica el comportamiento completo de hamburguesa.
    // ============================================================
    // ============================================================
    // FIX MENÚ HAMBURGUESA EN PÁGINAS SECUNDARIAS (boletines, historico)
    // site.js ya maneja el toggle del botón y los dropdowns, pero a veces
    // el botón queda oculto en páginas secundarias. Este bloque solo se
    // encarga de asegurar que el botón sea visible y que los dropdowns
    // respondan correctamente, sin duplicar ni sobreescribir los listeners
    // que site.js ya registró.
    // ============================================================
    (function () {
        function esMovil() { return window.innerWidth <= 768; }
        if (!esMovil()) return;

        var menuBtn = document.querySelector('.mobile-menu-btn');
        var navMain = document.querySelector('.nav-main');
        var overlay = document.querySelector('.mobile-menu-overlay');
        if (!menuBtn || !navMain || !overlay) return;

        // Solo aseguramos que el botón sea visible; site.js ya le puso el listener
        menuBtn.style.display = 'block';

        // Garantizar que los dropdowns tengan listener de click aunque site.js
        // haya clonado el toggle (cloneNode rompe listeners previos).
        // Usamos un flag diferente para no colisionar con site.js.
        document.querySelectorAll('.nav-main .dropdown').forEach(function (dropdown) {
            // Buscamos el toggle actual (puede ser el clonado por site.js)
            var toggle = dropdown.querySelector('.nav-dropdown-toggle');
            if (!toggle || toggle.dataset.fixDropdown) return;
            toggle.dataset.fixDropdown = 'true';

            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                // Cerrar otros dropdowns abiertos
                document.querySelectorAll('.nav-main .dropdown').forEach(function (dd) {
                    if (dd !== dropdown) dd.classList.remove('is-open');
                });
                dropdown.classList.toggle('is-open');
            });
        });

        // Reajustar si la ventana cambia de tamaño
        window.addEventListener('resize', function () {
            if (!esMovil()) {
                navMain.classList.remove('active');
                overlay.classList.remove('active');
                document.querySelectorAll('.nav-main .dropdown').forEach(function (dd) {
                    dd.classList.remove('is-open');
                });
                menuBtn.style.display = 'none';
            }
        });
    })();

    function byText(selector, text) {
        return Array.from(document.querySelectorAll(selector)).find(function (el) {
            return el.textContent.trim().toUpperCase() === text;
        });
    }

    const especialidadesLink = byText('.dropdown-menu a', 'ESPECIALIDADES');
    if (especialidadesLink) {
        especialidadesLink.addEventListener('click', function (event) {
            event.preventDefault();
            if (typeof window.mostrarEspecialidades === 'function') {
                window.mostrarEspecialidades();
            } else {
                // Usar sessionStorage para navegar a index.html
                sessionStorage.setItem('mostrarSeccion', 'especialidades');
                window.location.href = 'index.html';
            }
        });
    }

    const requisitosLink = byText('.dropdown-menu a', 'REQUISITOS DE INSCRIPCIÓN');
    if (requisitosLink) {
        requisitosLink.addEventListener('click', function (event) {
            event.preventDefault();
            if (typeof window.mostrarRequisitos === 'function') {
                window.mostrarRequisitos();
            } else {
                // Usar sessionStorage para navegar a index.html
                sessionStorage.setItem('mostrarSeccion', 'requisitos');
                window.location.href = 'index.html';
            }
        });
    }

    document.querySelectorAll('.especialidad-item').forEach(function (item) {
        const list = item.querySelector('.planteles-list');
        if (!list || !list.id) return;

        const open = function (event) {
            event.preventDefault();
            if (typeof window.togglePlanteles === 'function') {
                window.togglePlanteles(list.id);
            } else {
                document.querySelectorAll('.planteles-list').forEach(function (other) {
                    if (other !== list) {
                        other.style.display = 'none';
                        other.classList.remove('active');
                    }
                });
                const isOpen = list.style.display === 'block';
                list.style.display = isOpen ? 'none' : 'block';
                list.classList.toggle('active', !isOpen);
            }
        };

        const image = item.querySelector('.especialidad-imagen');
        const header = item.querySelector('.especialidad-header');
        if (image && !image.dataset.fixedClick) {
            image.dataset.fixedClick = 'true';
            image.addEventListener('click', open);
        }
        if (header && !header.dataset.fixedClick) {
            header.dataset.fixedClick = 'true';
            header.addEventListener('click', open);
        }
    });

    const especialidades = document.getElementById('especialidades-contenido');
    if (especialidades) {
        especialidades.querySelectorAll('.especialidad-imagen').forEach(function (img) {
            img.style.display = 'block';
        });
    }

    // Correcciones de navegacion: notas, especialidades y planteles.
    function abrirNotaDesdeHash() {
        const match = window.location.hash.match(/^#noticia-(\d+)$/);
        if (!match || typeof window.mostrarDetalleNoticia !== 'function') return;
        window.mostrarDetalleNoticia(Number(match[1]));
    }
    document.querySelectorAll('#seccion-noticias-recientes a[href="boletines.html"]').forEach(function (link, index) {
        const id = index + 1;
        link.href = 'boletines.html#noticia-' + id;
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = link.href;
        });
    });
    abrirNotaDesdeHash();
    window.addEventListener('hashchange', abrirNotaDesdeHash);
    document.querySelectorAll('#especialidades-contenido .especialidad-item').forEach(function (item) {
        const titulo = item.querySelector('.especialidad-header h3')?.textContent.trim()
            || item.querySelector('.especialidad-imagen')?.alt.trim();
        if (!titulo) return;
        [item.querySelector('.especialidad-imagen'), item.querySelector('.especialidad-header')].forEach(function (target) {
            if (!target || target.dataset.detalleEspecialidadFix) return;
            target.dataset.detalleEspecialidadFix = 'true';
            target.style.cursor = 'pointer';
            target.addEventListener('click', function (event) {
                if (typeof window.mostrarDetalleEspecialidad !== 'function') return;
                event.preventDefault();
                event.stopImmediatePropagation();
                window.mostrarDetalleEspecialidad(titulo);
            }, true);
        });
    });
    function enlazarPlantel(elemento, plantel) {
        if (!elemento || elemento.dataset.plantelFix) return;
        elemento.dataset.plantelFix = 'true';
        elemento.style.cursor = 'pointer';
        // capture:true + stopImmediatePropagation garantizan que este handler
        // se ejecute primero y ningún otro listener (planteles.js, etc.) interfiera.
        elemento.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            if (typeof window.mostrarInfoPlantel === 'function') {
                // index.html — llamar directo
                window.mostrarInfoPlantel(plantel);
            } else {
                // boletines.html / historico.html — redirigir vía sessionStorage
                sessionStorage.setItem('mostrarPlantel', plantel);
                window.location.href = 'index.html';
            }
        }, true);
    }
    function configurarPlantelesFix() {
        document.querySelectorAll('.nav-main .dropdown-menu a, .plantel-item').forEach(function (elemento) {
            const match = elemento.textContent.match(/CECATI\s+\d+/i);
            if (match) enlazarPlantel(elemento, match[0].toUpperCase());
        });
    }
    configurarPlantelesFix();
    setTimeout(configurarPlantelesFix, 300);
    setTimeout(configurarPlantelesFix, 1000);
});