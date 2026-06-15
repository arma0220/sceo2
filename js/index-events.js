document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll("[data-event-click=\"index-ev-1\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarEspecialidades(); return false; }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-2\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarRequisitos(); return false; }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseover=\"index-ev-3\"]").forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            const result = (function (event) { this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseout=\"index-ev-4\"]").forEach(function (element) {
        element.addEventListener('mouseout', function (event) {
            const result = (function (event) { this.style.transform='translateY(0)'; this.style.boxShadow='none' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseover=\"index-ev-5\"]").forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            const result = (function (event) { this.style.background='#8a2a45' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseout=\"index-ev-6\"]").forEach(function (element) {
        element.addEventListener('mouseout', function (event) {
            const result = (function (event) { this.style.background='#691c32' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseover=\"index-ev-7\"]").forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            const result = (function (event) { this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseout=\"index-ev-8\"]").forEach(function (element) {
        element.addEventListener('mouseout', function (event) {
            const result = (function (event) { this.style.transform='translateY(0)'; this.style.boxShadow='none' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseover=\"index-ev-9\"]").forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            const result = (function (event) { this.style.background='#8a2a45' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseout=\"index-ev-10\"]").forEach(function (element) {
        element.addEventListener('mouseout', function (event) {
            const result = (function (event) { this.style.background='#691c32' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-11\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-administracion') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-12\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-administracion') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-13\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-alimentos') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-14\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-alimentos') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-15\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-normas') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-16\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-normas') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-17\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-artes-graficas') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-18\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-artes-graficas') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-19\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-fibras-textiles') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-20\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-fibras-textiles') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-21\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-pastas-pinturas') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-22\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-pastas-pinturas') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-23\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-artesanias-metalicas') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-24\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-artesanias-metalicas') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-25\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-asistencia-educativa') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-26\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-asistencia-educativa') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-27\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-asistencia-ejecutiva') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-28\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-asistencia-ejecutiva') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-29\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-atencion-adultos-mayores') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-30\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-atencion-adultos-mayores') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-31\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-atencion-discapacidad') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-32\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-atencion-discapacidad') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-33\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-auxiliar-enfermeria') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-34\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-auxiliar-enfermeria') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-35\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-confeccion-prendas') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-36\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-confeccion-prendas') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-37\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-cuidados-cosmetologicos') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-38\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-cuidados-cosmetologicos') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-39\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-diseno-carroceria') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-40\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-diseno-carroceria') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-41\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-diseno-moda') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-42\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-diseno-moda') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-43\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-muebles-madera') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-44\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-muebles-madera') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-45\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-dibujos-arquitectonicos') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-46\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-dibujos-arquitectonicos') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-47\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-artesanias-madera') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-48\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-artesanias-madera') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-49\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-estilismo-diseno') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-50\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-estilismo-diseno') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-51\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-expresion-digital') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-52\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-expresion-digital') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-53\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-gestion-turismo') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-54\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-gestion-turismo') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-55\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-hoteleria') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-56\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-hoteleria') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-57\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-informatica') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-58\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-informatica') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-59\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-ingles') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-60\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-ingles') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-61\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-mantenimiento-electronico') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-62\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-mantenimiento-electronico') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-63\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-mantenimiento-electromecanico') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-64\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-mantenimiento-electromecanico') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-65\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-maquinas-herramienta') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-66\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-maquinas-herramienta') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-67\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-mecanica-diesel') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-68\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-mecanica-diesel') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-69\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-refrigeracion-aire-acondicionado') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-70\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-refrigeracion-aire-acondicionado') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-71\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-sastreria') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-72\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-sastreria') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-73\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-soldadura-paileria') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-74\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-soldadura-paileria') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-75\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-soporte-electricos') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-76\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-soporte-electricos') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-77\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-soporte-computacionales') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-78\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { togglePlanteles('planteles-soporte-computacionales') }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-79\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { ocultarPlantelInfo() }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"index-ev-80\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { ocultarEspecialidadInfo() }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
});