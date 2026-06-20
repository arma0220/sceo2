// ============================================================
//  fixes.js  –  correcciones de navegación y comportamiento
//  (los dropdowns móviles ya los maneja site.js)
// ============================================================
//
// NOTA: configurarOfertaEducativa() y configurarPlanteles(), junto con el
// listener de 'menusCompartidosActualizados', están a propósito FUERA del
// DOMContentLoaded de abajo. site.js (que se carga antes que este archivo
// en las 3 páginas) llena los menús y dispara 'menusCompartidosActualizados'
// de forma síncrona dentro de SU PROPIO DOMContentLoaded. Si este listener
// se registrara dentro del DOMContentLoaded de fixes.js, se registraría
// demasiado tarde: el evento ya se habría disparado y nunca lo
// escucharíamos. Registrándolo aquí, al nivel superior del script, se
// garantiza que ya existe antes de que el navegador llegue a disparar
// DOMContentLoaded para cualquiera de los dos archivos.

function _normalizarTexto(texto) {
    return texto.trim().toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function _byText(selector, text) {
    return Array.from(document.querySelectorAll(selector)).find(function (el) {
        return _normalizarTexto(el.textContent) === _normalizarTexto(text);
    });
}

function configurarOfertaEducativa() {
    document.querySelectorAll('.dropdown-menu a').forEach(function (el) {
        var texto = _normalizarTexto(el.textContent);
        var seccion = null;

        if (texto === 'ESPECIALIDADES') seccion = 'especialidades';
        if (texto.indexOf('REQUISITOS') !== -1) seccion = 'requisitos';
        if (!seccion || el.dataset.seccionFix === seccion) return;

        el.dataset.seccionFix = seccion;
        el.addEventListener('click', function (e) {
            e.preventDefault();
            var funcion = seccion === 'especialidades' ? window.mostrarEspecialidades : window.mostrarRequisitos;
            if (typeof funcion === 'function') {
                funcion();
                return;
            }
            sessionStorage.setItem('mostrarSeccion', seccion);
            window.location.href = 'index.html';
        });
    });
}

function _enlazarPlantel(el, plantel) {
    if (!el || el.dataset.plantelFix) return;
    el.dataset.plantelFix = 'true';
    el.style.cursor = 'pointer';
    el.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        // Cerrar el dropdown móvil: como stopImmediatePropagation()
        // impide que el listener de cierre de site.js se ejecute,
        // lo replicamos aquí para que el menú no quede abierto
        // tapando la vista al navegar a un plantel.
        var dd = el.closest('.dropdown');
        if (dd) dd.classList.remove('is-open');

        if (typeof window.mostrarInfoPlantel === 'function') {
            window.mostrarInfoPlantel(plantel);
        } else {
            sessionStorage.setItem('mostrarPlantel', plantel);
            window.location.href = 'index.html';
        }
    }, true);
}

function configurarPlanteles() {
    document.querySelectorAll('.nav-main .dropdown-menu a, .plantel-item').forEach(function (el) {
        var match = el.textContent.match(/CECATI\s+\d+/i);
        if (match) _enlazarPlantel(el, match[0].toUpperCase());
        else if (_normalizarTexto(el.textContent).indexOf('SCEO VERACRUZ') !== -1) _enlazarPlantel(el, 'SCEO Veracruz');
    });
}

// Se registra aquí mismo, al nivel superior del script (ver nota arriba).
document.addEventListener('menusCompartidosActualizados', function () {
    configurarOfertaEducativa();
    configurarPlanteles();
});

document.addEventListener('DOMContentLoaded', function () {

    // ---------- Especialidades y Requisitos desde páginas secundarias ----------

    var especialidadesLink = _byText('.dropdown-menu a', 'ESPECIALIDADES');
    if (especialidadesLink) {
        especialidadesLink.addEventListener('click', function (e) {
            e.preventDefault();
            if (typeof window.mostrarEspecialidades === 'function') {
                window.mostrarEspecialidades();
            } else {
                sessionStorage.setItem('mostrarSeccion', 'especialidades');
                window.location.href = 'index.html';
            }
        });
    }

    var requisitosLink = _byText('.dropdown-menu a', 'REQUISITOS DE INSCRIPCIÓN');
    if (requisitosLink) {
        requisitosLink.addEventListener('click', function (e) {
            e.preventDefault();
            if (typeof window.mostrarRequisitos === 'function') {
                window.mostrarRequisitos();
            } else {
                sessionStorage.setItem('mostrarSeccion', 'requisitos');
                window.location.href = 'index.html';
            }
        });
    }

    // ---------- Toggle de planteles en especialidades ----------

    document.querySelectorAll('.especialidad-item').forEach(function (item) {
        var list = item.querySelector('.planteles-list');
        if (!list || !list.id) return;

        var open = function (e) {
            e.preventDefault();
            if (typeof window.togglePlanteles === 'function') {
                window.togglePlanteles(list.id);
            } else {
                document.querySelectorAll('.planteles-list').forEach(function (other) {
                    if (other !== list) { other.style.display = 'none'; other.classList.remove('active'); }
                });
                var isOpen = list.style.display === 'block';
                list.style.display = isOpen ? 'none' : 'block';
                list.classList.toggle('active', !isOpen);
            }
        };

        ['especialidad-imagen', 'especialidad-header'].forEach(function (cls) {
            var el = item.querySelector('.' + cls);
            if (el && !el.dataset.fixedClick) {
                el.dataset.fixedClick = 'true';
                el.addEventListener('click', open);
            }
        });
    });

    // ---------- Abrir noticia desde hash (#noticia-N) ----------

    function abrirNotaDesdeHash() {
        var match = window.location.hash.match(/^#noticia-(\d+)$/);
        if (match && typeof window.mostrarDetalleNoticia === 'function') {
            window.mostrarDetalleNoticia(Number(match[1]));
        }
    }

    document.querySelectorAll('#seccion-noticias-recientes a[href="boletines.html"]').forEach(function (link, i) {
        var id = i + 1;
        link.href = 'boletines.html#noticia-' + id;
        link.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = link.href;
        });
    });

    abrirNotaDesdeHash();
    window.addEventListener('hashchange', abrirNotaDesdeHash);

    // ---------- Detalle de especialidad desde imagen/header ----------

    document.querySelectorAll('#especialidades-contenido .especialidad-item').forEach(function (item) {
        var titulo = (item.querySelector('.especialidad-header h3') || item.querySelector('.especialidad-imagen') || {}).textContent;
        if (!titulo) titulo = (item.querySelector('.especialidad-imagen') || {}).alt;
        if (!titulo) return;
        titulo = titulo.trim();

        ['especialidad-imagen', 'especialidad-header'].forEach(function (cls) {
            var el = item.querySelector('.' + cls);
            if (!el || el.dataset.detalleEspecialidadFix) return;
            el.dataset.detalleEspecialidadFix = 'true';
            el.style.cursor = 'pointer';
            el.addEventListener('click', function (e) {
                if (typeof window.mostrarDetalleEspecialidad !== 'function') return;
                e.preventDefault();
                e.stopImmediatePropagation();
                window.mostrarDetalleEspecialidad(titulo);
            }, true);
        });
    });

    // ---------- Navegación a plantel desde cualquier página ----------

    configurarOfertaEducativa();
    configurarPlanteles();
});
