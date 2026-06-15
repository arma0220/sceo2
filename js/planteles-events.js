document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll("[data-event-click=\"planteles-ev-1\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarEspecialidades(); return false; }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"planteles-ev-2\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarRequisitos(); return false; }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"planteles-ev-3\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarPlantelesInicio() }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"planteles-ev-4\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarEspecialidades() }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
});