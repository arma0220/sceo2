document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll("[data-event-click=\"boletines-ev-1\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarEspecialidades(); return false; }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"boletines-ev-2\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarRequisitos(); return false; }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"boletines-ev-3\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarDetalleNoticia(1) }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseover=\"boletines-ev-4\"]").forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            const result = (function (event) { this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseout=\"boletines-ev-5\"]").forEach(function (element) {
        element.addEventListener('mouseout', function (event) {
            const result = (function (event) { this.style.transform='translateY(0)'; this.style.boxShadow='none' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"boletines-ev-6\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarDetalleNoticia(2) }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseover=\"boletines-ev-7\"]").forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            const result = (function (event) { this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseout=\"boletines-ev-8\"]").forEach(function (element) {
        element.addEventListener('mouseout', function (event) {
            const result = (function (event) { this.style.transform='translateY(0)'; this.style.boxShadow='none' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"boletines-ev-9\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarDetalleNoticia(3) }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseover=\"boletines-ev-10\"]").forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            const result = (function (event) { this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseout=\"boletines-ev-11\"]").forEach(function (element) {
        element.addEventListener('mouseout', function (event) {
            const result = (function (event) { this.style.transform='translateY(0)'; this.style.boxShadow='none' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"boletines-ev-12\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarDetalleNoticia(4) }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseover=\"boletines-ev-13\"]").forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            const result = (function (event) { this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseout=\"boletines-ev-14\"]").forEach(function (element) {
        element.addEventListener('mouseout', function (event) {
            const result = (function (event) { this.style.transform='translateY(0)'; this.style.boxShadow='none' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"boletines-ev-15\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarDetalleNoticia(5) }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseover=\"boletines-ev-16\"]").forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            const result = (function (event) { this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseout=\"boletines-ev-17\"]").forEach(function (element) {
        element.addEventListener('mouseout', function (event) {
            const result = (function (event) { this.style.transform='translateY(0)'; this.style.boxShadow='none' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-click=\"boletines-ev-18\"]").forEach(function (element) {
        element.addEventListener('click', function (event) {
            const result = (function (event) { mostrarDetalleNoticia(6) }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseover=\"boletines-ev-19\"]").forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            const result = (function (event) { this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseout=\"boletines-ev-20\"]").forEach(function (element) {
        element.addEventListener('mouseout', function (event) {
            const result = (function (event) { this.style.transform='translateY(0)'; this.style.boxShadow='none' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseover=\"boletines-ev-21\"]").forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            const result = (function (event) { this.style.background='#8a2a45' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
    document.querySelectorAll("[data-event-mouseout=\"boletines-ev-22\"]").forEach(function (element) {
        element.addEventListener('mouseout', function (event) {
            const result = (function (event) { this.style.background='#691c32' }).call(this, event);
            if (result === false) event.preventDefault();
            return result;
        });
    });
});