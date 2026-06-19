// ============================================================
//  site.js  –  lógica compartida entre TODAS las páginas
// ============================================================

// ============================================================
//  Fuente única de datos para los menús compartidos
//  (OFERTA EDUCATIVA, PLANTELES y CONTACTO)
// ============================================================
//
// Estos datos se editan SOLO AQUÍ. Al cargar cualquier página
// (index.html, boletines.html, historico.html), sincronizarMenusCompartidos()
// reconstruye esos tres menús del nav usando esta información, así que
// un cambio aquí se refleja automáticamente en todas las páginas sin
// tener que editar cada HTML por separado.

var PLANTELES_SCEO = [
    { texto: 'SCEO Veracruz' },
    { texto: 'CECATI 31 Coatzacoalcos' },
    { texto: 'CECATI 33 Río Blanco' },
    { texto: 'CECATI 42 Veracruz' },
    { texto: 'CECATI 49 Córdoba' },
    { texto: 'CECATI 72 Cosoleacaque' },
    { texto: 'CECATI 103 Poza Rica' },
    { texto: 'CECATI 151 Xalapa' },
    { texto: 'CECATI 159 Tlacotalpan' },
    { texto: 'CECATI 168 Cd. Mendoza' },
    { texto: 'CECATI 170 Orizaba' }
];

var CONTACTOS_SCEO = [
    {
        correo: 'ver.sceo@dgcft.sems.gob.mx',
        cargo: 'Subdirector de la Coordinación de Enlace Operativo',
        titular: 'Sergio López Hernández'
    },
    {
        correo: 'ver.acade@dgcft.sems.gob.mx',
        cargo: 'Auxiliar del Área del Apoyo Técnico Académico',
        titular: 'José Luis Silva Romero'
    },
    {
        correo: 'ver.admvo@dgcft.sems.gob.mx',
        cargo: 'Auxiliar del Área de Apoyo Administrativo',
        titular: 'Juan Carlos González Domínguez'
    },
    {
        correo: 'ver.plan@dgcft.sems.gob.mx',
        cargo: 'Auxiliar del Área de Planeación y Evaluación',
        titular: 'Irene Margarita Vargas Camarillo'
    },
    {
        correo: 'ver.vinc@dgcft.sems.gob.mx',
        cargo: 'Auxiliar del Área de Vinculación con el Sector Productivo',
        titular: 'Esmeralda Zarate Chávez'
    }
];

// Datos de Oferta Educativa. El PDF y los textos de los links son fijos;
// solo el comportamiento de ESPECIALIDADES/REQUISITOS cambia según la página.
var OFERTA_EDUCATIVA_PDF = 'Calendario Escolar 2025-2026.pdf';

function _escaparHTML(texto) {
    var div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

// Encuentra el <ul class="dropdown-menu"> de una sección del nav buscando
// el <img alt="..."> de su ícono (estable en todas las páginas), sin
// depender de IDs que no existen en el HTML.
function _buscarMenuPorIcono(altTexto) {
    var icono = document.querySelector('.nav-main img.nav-icon[alt="' + altTexto + '"]');
    if (!icono) return null;
    var toggle = icono.closest('a.dropdown-toggle');
    if (!toggle) return null;
    return toggle.parentElement.querySelector('ul.dropdown-menu');
}

function _buscarMenuPorIconoEnDocumento(doc, altTexto) {
    var icono = doc.querySelector('.nav-main img.nav-icon[alt="' + altTexto + '"]');
    if (!icono) return null;
    var toggle = icono.closest('a.dropdown-toggle');
    if (!toggle) return null;
    return toggle.parentElement.querySelector('ul.dropdown-menu');
}

function _prepararMenuCopiado(menu, altTexto) {
    menu.querySelectorAll('[data-event-click], [data-event-mouseover], [data-event-mouseout]').forEach(function (el) {
        el.removeAttribute('data-event-click');
        el.removeAttribute('data-event-mouseover');
        el.removeAttribute('data-event-mouseout');
    });

    if (altTexto === 'OFERTA EDUCATIVA') {
        menu.querySelectorAll('a').forEach(function (link) {
            var texto = link.textContent.trim().toUpperCase();
            if (texto === 'ESPECIALIDADES') {
                link.href = 'index.html';
                link.setAttribute('onclick', "sessionStorage.setItem('mostrarSeccion', 'especialidades');");
            }
            if (texto.indexOf('REQUISITOS') !== -1) {
                link.href = 'index.html';
                link.setAttribute('onclick', "sessionStorage.setItem('mostrarSeccion', 'requisitos');");
            }
        });
    }
}

function _notificarMenusActualizados() {
    document.dispatchEvent(new CustomEvent('menusCompartidosActualizados'));
}

function _leerMenusCompartidosActuales(doc) {
    var menus = {};
    ['OFERTA EDUCATIVA', 'PLANTELES', 'CONTACTO'].forEach(function (altTexto) {
        var menu = _buscarMenuPorIconoEnDocumento(doc, altTexto);
        if (menu) menus[altTexto] = menu.innerHTML;
    });
    return menus;
}

function _guardarMenusCompartidosLocales() {
    try {
        localStorage.setItem('menusCompartidosSCEO', JSON.stringify(_leerMenusCompartidosActuales(document)));
    } catch (error) {}
}

function _sincronizarMenusDesdeCacheLocal() {
    try {
        var menus = JSON.parse(localStorage.getItem('menusCompartidosSCEO') || '{}');
        var secciones = ['OFERTA EDUCATIVA', 'PLANTELES', 'CONTACTO'];
        var copiados = 0;

        secciones.forEach(function (altTexto) {
            var destino = _buscarMenuPorIcono(altTexto);
            if (!destino || !menus[altTexto]) return;

            destino.innerHTML = menus[altTexto];
            _prepararMenuCopiado(destino, altTexto);
            copiados++;
        });

        return copiados === secciones.length;
    } catch (error) {
        return false;
    }
}

function _aplicarMenusCompartidosDesdeDocumento(doc) {
    var secciones = ['OFERTA EDUCATIVA', 'PLANTELES', 'CONTACTO'];
    var copiados = 0;

    secciones.forEach(function (altTexto) {
        var origen = _buscarMenuPorIconoEnDocumento(doc, altTexto);
        var destino = _buscarMenuPorIcono(altTexto);
        if (!origen || !destino) return;

        destino.innerHTML = origen.innerHTML;
        _prepararMenuCopiado(destino, altTexto);
        copiados++;
    });

    if (copiados === secciones.length) {
        _guardarMenusCompartidosLocales();
        return true;
    }

    return false;
}

function _sincronizarMenusDesdeIframeIndex() {
    return new Promise(function (resolve) {
        var iframe = document.createElement('iframe');
        var terminado = false;

        function finalizar(resultado) {
            if (terminado) return;
            terminado = true;
            clearTimeout(timeout);
            if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
            resolve(resultado);
        }

        var timeout = setTimeout(function () {
            finalizar(false);
        }, 2000);

        iframe.style.display = 'none';
        iframe.src = 'index.html';
        iframe.onload = function () {
            try {
                finalizar(_aplicarMenusCompartidosDesdeDocumento(iframe.contentDocument || iframe.contentWindow.document));
            } catch (error) {
                finalizar(false);
            }
        };
        iframe.onerror = function () {
            finalizar(false);
        };

        document.body.appendChild(iframe);
    });
}

function sincronizarMenusRespaldo() {
    var enIndex = !!document.getElementById('contenido-principal');

    // ---------- PLANTELES ----------
    var menuPlanteles = _buscarMenuPorIcono('PLANTELES');
    if (menuPlanteles) {
        menuPlanteles.innerHTML = PLANTELES_SCEO.map(function (p) {
            return '<li><a href="javascript:void(0)">' + _escaparHTML(p.texto) + '</a></li>';
        }).join('');
        // NOTA: el comportamiento real de estos links (navegar al plantel)
        // lo añade fixes.js -> configurarPlanteles(), que detecta "CECATI N"
        // por texto y se ejecuta en su propio DOMContentLoaded. site.js se
        // carga antes que fixes.js en las 3 páginas, así que para cuando
        // fixes.js corre, este menú ya tiene su HTML final y se enlaza
        // exactamente igual que si hubiera sido estático.
    }

    // ---------- CONTACTO ----------
    var menuContacto = _buscarMenuPorIcono('CONTACTO');
    if (menuContacto) {
        menuContacto.innerHTML = CONTACTOS_SCEO.map(function (c) {
            return '<li><a href="mailto:' + c.correo + '">' +
                '<strong>' + _escaparHTML(c.cargo) + '</strong><br>' +
                'Titular: ' + _escaparHTML(c.titular) + '<br>' +
                'Correo electrónico: ' + c.correo +
                '</a></li>';
        }).join('');
    }

    // ---------- OFERTA EDUCATIVA ----------
    var menuOferta = _buscarMenuPorIcono('OFERTA EDUCATIVA');
    if (menuOferta) {
        var liEspecialidades, liRequisitos;
        if (enIndex) {
            liEspecialidades = '<li><a href="#" onclick="mostrarEspecialidades(); return false;">ESPECIALIDADES</a></li>';
            liRequisitos = '<li><a href="#" onclick="mostrarRequisitos(); return false;">REQUISITOS DE INSCRIPCIÓN</a></li>';
        } else {
            liEspecialidades = '<li><a href="index.html" onclick="sessionStorage.setItem(\'mostrarSeccion\', \'especialidades\');">ESPECIALIDADES</a></li>';
            liRequisitos = '<li><a href="index.html" onclick="sessionStorage.setItem(\'mostrarSeccion\', \'requisitos\');">REQUISITOS DE INSCRIPCIÓN</a></li>';
        }
        menuOferta.innerHTML =
            '<li><a href="' + OFERTA_EDUCATIVA_PDF + '" target="_blank">CALENDARIO ESCOLAR</a></li>' +
            liEspecialidades +
            liRequisitos;
    }
}

async function sincronizarMenusCompartidos() {
    sincronizarMenusRespaldo();
    _guardarMenusCompartidosLocales();
    setupMobileDropdowns();
    _notificarMenusActualizados();
}

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
// Desktop usa :hover via CSS. Móvil usa .is-open via JS.

function setupMobileDropdowns() {
    const navMain = document.querySelector('.nav-main');
    if (!navMain) return;

    const dropdowns = Array.from(navMain.querySelectorAll('.dropdown'));
    const mobileMQ  = window.matchMedia('(max-width: 768px)');

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

    // Al pasar a desktop limpiar estados abiertos
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
    sincronizarMenusCompartidos();
    setupMobileDropdowns();

    if (document.getElementById('contenido-principal')) {
        if (window.location.hash === '#requisitos') window.mostrarRequisitos();
        else if (window.location.hash === '#especialidades') window.mostrarEspecialidades();
    } else {
        if (window.location.hash === '#especialidades' || window.location.hash === '#requisitos') {
            history.replaceState(null, null, window.location.pathname);
        }
    }
});
