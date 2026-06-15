// Mostrar pestaña de noticias y sección de noticias recientes por defecto (solo en el inicio)
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById("nav-noticias").style.display = "block";
            document.getElementById("seccion-noticias-recientes").style.display = "block";
        });

        function mostrarRequisitos() {
            // Ocultar otros contenidos
            document.getElementById("especialidades-contenido").style.display = "none";
            document.getElementById("plantel-info").style.display = "none";
            document.getElementById("especialidad-info").style.display = "none";
            document.getElementById("requisitos-inscripcion").style.display = "block";
            
            // Ocultar sección de noticias recientes
            document.getElementById("seccion-noticias-recientes").style.display = "none";
            
            // Limpiar selección de especialidad previa
            document.getElementById("especialidad-detalle").innerHTML = '';
            
            // Quitar la selección visual de la lista de especialidades
            const especialidadesSeleccionadas = document.querySelectorAll('.especialidad-item.activa');
            especialidadesSeleccionadas.forEach(item => {
                item.classList.remove('activa');
            });
            
            // Desplazar hacia arriba
            window.scrollTo(0, 0);
        }
        
        function mostrarEspecialidades() {
            // Ocultar otros contenidos
            document.getElementById("requisitos-inscripcion").style.display = "none";
            document.getElementById("plantel-info").style.display = "none";
            document.getElementById("especialidad-info").style.display = "none";
            document.getElementById("especialidades-contenido").style.display = "block";
            
            // Ocultar sección de noticias recientes
            document.getElementById("seccion-noticias-recientes").style.display = "none";
            
            // Limpiar selección de especialidad previa
            document.getElementById("especialidad-detalle").innerHTML = '';
            
            // Quitar la selección visual de la lista de especialidades
            const especialidadesSeleccionadas = document.querySelectorAll('.especialidad-item.activa');
            especialidadesSeleccionadas.forEach(item => {
                item.classList.remove('activa');
            });
            
            // Desplazar hacia arriba
            window.scrollTo(0, 0);
        }
        
        function togglePlanteles(plantelesId) {
            var planteles = document.getElementById(plantelesId);
            var header = planteles.previousElementSibling;
            var especialidadItem = planteles.parentElement;
            
            // Verificar si el menú actual está abierto
            var isCurrentlyOpen = planteles.style.display === "block";
            
            // Cerrar todos los menús primero
            var allPlanteles = document.querySelectorAll('.planteles-list');
            var allHeaders = document.querySelectorAll('.especialidad-header');
            
            allPlanteles.forEach(function(pl) {
                pl.style.display = "none";
            });
            
            allHeaders.forEach(function(h) {
                h.classList.remove('active');
            });
            
            // Toggle del menú actual: solo abrir si estaba cerrado
            if (!isCurrentlyOpen) {
                planteles.style.display = "block";
                header.classList.add('active');
                
                // Hacer scroll suave hacia el elemento expandido
                setTimeout(function() {
                    especialidadItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
            // Si estaba abierto, ya se cerró con el código anterior
        }
        
        // Funcionalidad de búsqueda de especialidades
        const especialidades = [
            { nombre: "Administración", id: "planteles-administracion" },
            { nombre: "Alimentos y bebidas", id: "planteles-alimentos" },
            { nombre: "Aplicación de normas y proced.contables y fiscales", id: "planteles-normas" },
            { nombre: "Artes gráficas", id: "planteles-artes-graficas" },
            { nombre: "Artesanías con fibras textiles", id: "planteles-fibras-textiles" },
            { nombre: "Artesanías con pastas, pinturas y acabados", id: "planteles-pastas-pinturas" },
            { nombre: "Artesanías metálicas", id: "planteles-artesanias-metalicas" },
            { nombre: "Asistencia educativa inicial y preescolar", id: "planteles-asistencia-educativa" },
            { nombre: "Asistencia ejecutiva", id: "planteles-asistencia-ejecutiva" },
            { nombre: "Atención integral a personas adultas mayores", id: "planteles-atencion-adultos-mayores" },
            { nombre: "Atención integral a personas con discapacidad", id: "planteles-atencion-discapacidad" },
            { nombre: "Auxiliar de enfermería", id: "planteles-auxiliar-enfermeria" },
            { nombre: "Confección de prendas de vestir", id: "planteles-confeccion-prendas" },
            { nombre: "Cuidados cosmetológicos faciales y corporales", id: "planteles-cuidados-cosmetologicos" },
            { nombre: "Diseño e imagen de la carrocería", id: "planteles-diseno-carroceria" },
            { nombre: "Diseño de moda", id: "planteles-diseno-moda" },
            { nombre: "Diseño y fabricación de muebles de madera", id: "planteles-muebles-madera" },
            { nombre: "Elaboración de dibujos arquitectónico e industrial", id: "planteles-dibujos-arquitectonicos" },
            { nombre: "Elaboración y restauración de artesanías de madera", id: "planteles-artesanias-madera" },
            { nombre: "Estilismo y diseño de imagen", id: "planteles-estilismo-diseno" },
            { nombre: "Expresión gráfica digital", id: "planteles-expresion-digital" },
            { nombre: "Gestión y venta de servicios turísticos", id: "planteles-gestion-turismo" },
            { nombre: "Hotelería", id: "planteles-hoteleria" },
            { nombre: "Informática", id: "planteles-informatica" },
            { nombre: "Inglés", id: "planteles-ingles" },
            { nombre: "Mantenimiento al sistema electrónico automotriz", id: "planteles-mantenimiento-electronico" },
            { nombre: "Mantenimiento electromecánico del automóvil", id: "planteles-mantenimiento-electromecanico" },
            { nombre: "Máquinas-Herramienta", id: "planteles-maquinas-herramienta" },
            { nombre: "Mecánica diésel", id: "planteles-mecanica-diesel" },
            { nombre: "Refrigeración y aire acondicionado", id: "planteles-refrigeracion-aire-acondicionado" },
            { nombre: "Sastrería", id: "planteles-sastreria" },
            { nombre: "Soldadura y pailería", id: "planteles-soldadura-paileria" },
            { nombre: "Soporte a instalac. eléctricas y motores eléctricos", id: "planteles-soporte-electricos" },
            { nombre: "Soporte técnico a equipos y sistemas computacionales", id: "planteles-soporte-computacionales" },
        ];
        
        let searchTimeout;
        const searchInput = document.getElementById('busqueda-especialidad');
        const searchResults = document.getElementById('search-results');
        const searchBtn = document.getElementById('search-btn');
        
        function buscarEspecialidades(query) {
            if (!query || query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            
            const queryLower = query.toLowerCase();
            const resultados = especialidades.filter(especialidad => 
                especialidad.nombre.toLowerCase().includes(queryLower)
            );
            
            if (resultados.length === 0) {
                searchResults.innerHTML = '<div class="search-no-results">No se encontraron especialidades</div>';
                searchResults.style.display = 'block';
                return;
            }
            
            // Si hay una coincidencia exacta, redirigir automáticamente
            const coincidenciaExacta = especialidades.find(especialidad => 
                especialidad.nombre.toLowerCase() === queryLower
            );
            
            if (coincidenciaExacta) {
                // Redirigir automáticamente a la especialidad
                setTimeout(() => {
                    irAEspecialidad(coincidenciaExacta.id, coincidenciaExacta.nombre);
                }, 500);
                return;
            }
            
            // Mostrar resultados de búsqueda
            let html = '';
            resultados.forEach(especialidad => {
                const nombreResaltado = especialidad.nombre.replace(
                    new RegExp(query, 'gi'), 
                    match => `<strong>${match}</strong>`
                );
                html += `<div class="search-result-item" onclick="irAEspecialidad('${especialidad.id}', '${especialidad.nombre}')">${nombreResaltado}</div>`;
            });
            
            searchResults.innerHTML = html;
            searchResults.style.display = 'block';
        }
        
        function irAEspecialidad(especialidadId, especialidadNombre) {

            // Ocultar resultados de búsqueda
            searchResults.style.display = 'none';
            searchInput.value = especialidadNombre;
            
            // Mostrar contenido de especialidades
            mostrarEspecialidades();
            
            // Esperar a que el contenido se cargue
            setTimeout(() => {
                // Cerrar todos los menús primero
                const allPlanteles = document.querySelectorAll('.planteles-list');
                const allHeaders = document.querySelectorAll('.especialidad-header');
                
                allPlanteles.forEach(pl => {
                    pl.style.display = "none";
                });
                
                allHeaders.forEach(h => {
                    h.classList.remove('active');
                });
                
                // Abrir la especialidad específica
                const planteles = document.getElementById(especialidadId);
                const header = planteles.previousElementSibling;
                const especialidadItem = planteles.parentElement;
                
                if (planteles) {
                    planteles.style.display = "block";
                    header.classList.add('active');
                    
                    // Hacer scberoll suave hacia la especialidad
                    setTimeout(() => {
                        especialidadItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        // Resaltar temporalmente la especialidad
                        especialidadItem.style.transition = 'all 0.3s ease';
                        especialidadItem.style.transform = 'scale(1.02)';
                        especialidadItem.style.boxShadow = '0 8px 25px rgba(105, 28, 50, 0.3)';
                        
                        setTimeout(() => {
                            especialidadItem.style.transform = '';
                            especialidadItem.style.boxShadow = '';
                        }, 1000);
                    }, 300);
                }
            }, 100);
        }
        
        // Event listeners para la búsqueda
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim();
            
            searchTimeout = setTimeout(() => {
                buscarEspecialidades(query);
            }, 300);

            //Limpia la especialidad previamente seleccionada
            const contenedorTarjeta = document.getElementById('id-del-contenedor-de-la-tarjeta'); 
            // Reemplaza con ID o Clase
            if (contenedorTarjeta) {
                contenedorTarjeta.innerHTML = ''; 
            }

            // Quita la selección visual de la lista de especialidades
            const especialidadesSeleccionadas = document.querySelectorAll('.especialidad-item.activa');
            especialidadesSeleccionadas.forEach(item => {
                item.classList.remove('activa'); 
            // Ajusta la clase usada para marcarla como seleccionada
            });
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                if (query.length >= 2) {
                    buscarEspecialidades(query);
                }
            }
        });
        
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query.length >= 2) {
                buscarEspecialidades(query);
            }
        });
        
        // Cerrar resultados al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container')) {
                searchResults.style.display = 'none';
            }
        });
        
        // Cerrar resultados al presionar Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                searchResults.style.display = 'none';
                searchInput.blur();
            }
        });
        
        // Función para mostrar información detallada del plantel
        function mostrarInfoPlantel(plantelNombre) {
            const plantel = infoPlanteles[plantelNombre];
            if (!plantel) {
                alert('No se encontró información para: ' + plantelNombre);
                return;
            }

            // Ocultar otros contenidos
            document.getElementById("contenido-principal").style.display = "none";
            document.getElementById("especialidades-contenido").style.display = "none";
            document.getElementById("requisitos-inscripcion").style.display = "none";
            document.getElementById("especialidad-info").style.display = "none";

            // Ocultar detalle de noticia
            const noticiaDetalle = document.getElementById("noticia-detalle");
            if (noticiaDetalle) {
                noticiaDetalle.style.display = "none";
            }

            // Ocultar sección de noticias recientes
            const seccionNoticiasRecientes = document.getElementById("seccion-noticias-recientes");
            if (seccionNoticiasRecientes) {
                seccionNoticiasRecientes.style.display = "none";
            }
            
            // Limpiar selección de especialidad previa
            document.getElementById("especialidad-detalle").innerHTML = '';
            
            // Quitar la selección visual de la lista de especialidades
            const especialidadesSeleccionadas = document.querySelectorAll('.especialidad-item.activa');
            especialidadesSeleccionadas.forEach(item => {
                item.classList.remove('activa');
            });
            
            // Mostrar información del plantel
            const plantelDetalle = document.getElementById("plantel-detalle");
            if (!plantelDetalle) {
                console.error('Error: No se encontró el elemento plantel-detalle en el DOM');
                alert('Error: No se encontró el contenedor para mostrar la información del plantel');
                return;
            }
            
            // Desplazar hacia arriba
            window.scrollTo(0, 0);
            
            // Mapeo de imágenes específicas por plantel
            const imagenesPlanteles = {
                'CECATI 31': 'C31.jpeg',
                'CECATI 33': 'C33.jpeg',
                'CECATI 42': 'C42.jpeg',
                'CECATI 49': 'C49.jpeg',
                'CECATI 72': 'C72.jpeg',
                'CECATI 103': 'C103.jpeg',
                'CECATI 151': 'C151.jpeg',
                'CECATI 159': 'C159.jpeg',
                'CECATI 168': 'C168.jpeg',
                'CECATI 170': 'C170.jpeg'
            };
            
            const imagenPlantel = imagenesPlanteles[plantelNombre] || 'cecatin.png';
            
            let html = `
                <div style="text-align: center; margin-bottom: 30px;">
                    <img src="imagenes/${imagenPlantel}" alt="${plantelNombre}" style="width: 70%; height: auto; margin-bottom: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                    <h1 style="color: #691c32; font-size: 2.5em; margin-bottom: 10px;">
                        <img src="imagenes/cecatin.png" alt="CECATI" style="width: 72px; height: 101px; margin-right: 15px; vertical-align: middle">
                        ${plantelNombre}
                    </h1>
                    <div style="border-bottom: 3px solid #FFD700; width: 100px; margin: 0 auto;"></div>
                </div>
                
                <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
                    <h2 style="color: #691c32; margin-bottom: 20px;">ðŸ“ Información del Plantel</h2>
                    <div class="plantel-info-grid">
                        <div>
                            <p><strong>Plantel:</strong> ${plantelNombre}</p>
                            <p><strong>CCT:</strong> ${plantel.cct}</p>
                            <p><strong>Calle:</strong> ${plantel.direccion}</p>
                            <p><strong>Colonia:</strong> ${plantel.colonia || '-'}</p>
                        </div>
                        <div>
                            <p><strong>C.P.:</strong> ${plantel.cp}</p>
                            <p><strong>Municipio:</strong> ${plantel.municipio}</p>
                            <p><strong>Región:</strong> ${plantel.region}</p>
                            <p><strong>Teléfono:</strong> ${plantel.telefono}</p>
                        </div>
                    </div>
                </div>
                
                <div style="background: white; padding: 25px; border-radius: 10px; border: 1px solid #e9ecef; margin-bottom: 25px;">
                    <h2 style="color: #691c32; margin-bottom: 25px;">ðŸ‘¥ Directorio</h2>
                    
                    <div class="plantel-directorio-grid">
                        <div class="plantel-directorio-item">
                            <h3 style="color: #8B1538; margin-bottom: 15px;">ðŸ¢ Dirección</h3>
                            <p><strong>Titular:</strong> ${plantel.directorio.direccion.titular}</p>
                            <p><strong>Correo:</strong> ${plantel.directorio.direccion.email}</p>
                        </div>
                        
                        <div class="plantel-directorio-item">
                            <h3 style="color: #8B1538; margin-bottom: 15px;"> Jefatura de Capacitación</h3>
                            <p><strong>Titular:</strong> ${plantel.directorio.capacitacion.titular}</p>
                            <p><strong>Correo:</strong> ${plantel.directorio.capacitacion.email}</p>
                        </div>
                        
                        <div class="plantel-directorio-item">
                            <h3 style="color: #8B1538; margin-bottom: 15px;">ðŸ¤ Jefatura de Vinculación</h3>
                            <p><strong>Titular:</strong> ${plantel.directorio.vinculacion.titular}</p>
                            <p><strong>Correo:</strong> ${plantel.directorio.vinculacion.email}</p>
                        </div>
                        
                        <div class="plantel-directorio-item">
                            <h3 style="color: #8B1538; margin-bottom: 15px;">ðŸ“‹ Jefatura de Servicios Administrativos</h3>
                            <p><strong>Titular:</strong> ${plantel.directorio.administrativo.titular}</p>
                            <p><strong>Correo:</strong> ${plantel.directorio.administrativo.email}</p>
                        </div>
                    </div>
                </div>
                
                <div style="background: white; padding: 25px; border-radius: 10px; border: 1px solid #e9ecef;">
                    <h2 style="color: #691c32; margin-bottom: 20px;">ðŸ“š Especialidades:</h2>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
                        <div class="plantel-especialidades-grid">
                            ${plantel.especialidades.map(especialidad => 
                                `<button onclick="mostrarDetalleEspecialidad('${especialidad}', '${plantelNombre}')" class="plantel-especialidad-btn">
                                    <p>${especialidad}</p>
                                </button>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            `;
            
            plantelDetalle.innerHTML = html;
            document.getElementById("plantel-info").style.display = "block";
        }

        function ocultarPlantelInfo() {
            document.getElementById("plantel-info").style.display = "none";
            document.getElementById("especialidades-contenido").style.display = "block";
        }

        function mostrarDetalleEspecialidad(nombreEspecialidad, nombrePlantel) {
            // Ocultar otros contenidos
            document.getElementById("plantel-info").style.display = "none";
            document.getElementById("especialidades-contenido").style.display = "none";
            document.getElementById("requisitos-inscripcion").style.display = "none";
            
            // Mostrar información de la especialidad
            const especialidadDetalle = document.getElementById("especialidad-detalle");
            if (!especialidadDetalle) {
                console.error('Error: No se encontró el elemento especialidad-detalle en el DOM');
                alert('Error: No se encontró el contenedor para mostrar la información de la especialidad');
                return;
            }
            
            // Desplazar hacia arriba
            window.scrollTo(0, 0);
            
            // Mapeo de imágenes específicas por especialidad para agregar imagen a las especaialidades
            const imagenesEspecialidades = {
                'Administración': 'administracion.png',
                'Alimentos y bebidas': 'alimentos.png',
                'Alimentos y Bebidas': 'alimentos.png',
                'Aplicación de normas y proced.contables y fiscales': 'contabilidad.png',
                'Aplicación de Normas y Procedimientos Contables y Fiscales': 'contabilidad.png',
                'Artes gráficas': 'graficas.png',
                'Artes Gráficas': 'graficas.png',
                'Artesanías con fibras textiles': 'textil.png',
                'Artesanías con Fibras Textiles': 'textil.png',
                'Artesanías con pastas, pinturas y acabados': 'pinturas.png',
                'Artesanías con Pastas, Pinturas y Acabados': 'pinturas.png',
                'Artesanías metálicas': 'metalicas.png',
                'Elaboración y restauración de artesanías de madera': 'artesanias.png',
                'Asistencia educativa inicial y preescolar': 'educativa.png',
                'Asistencia ejecutiva': 'administracion.png',
                'Asistencia Ejecutiva': 'administracion.png',
                'Atención integral a personas adultas mayores': 'adultos.png',
                'Atención integral a personas con discapacidad': 'discapacidad.png',
                'Auxiliar de enfermería': 'enfermeria.png',
                'Confección de prendas de vestir': 'confeccion.png',
                'Confección de Prendas de Vestir': 'confeccion.png',
                'Cuidados cosmetológicos faciales y corporales': 'cosmetologia.png',
                'Cosmetología Integral': 'cosmetologia.png',
                'Diseño e imagen de la carrocería': 'carroceria.png',
                'Diseño de moda': 'moda.png',
                'Diseño de Moda': 'moda.png',
                'Diseño y fabricación de muebles de madera': 'muebles.png',
                'Diseño y Fabricación de Muebles de Madera': 'muebles.png',
                'Elaboración de dibujos arquitectónico e industrial': 'dibujo.png',
                'Elaboración de Dibujos Arquitectónico e Industrial': 'dibujo.png',
                'Elaboración y restauración de artesanías de madera': 'artesanias.png',
                'Estilismo y diseño de imagen': 'estilismo.png',
                'Estilismo y Diseño de Imagen': 'estilismo.png',
                'Expresión gráfica digital': 'expresion.png',
                'Electricidad': 'electrica.png',
                'Electrónica': 'electronica.png',
                'Gestión y venta de servicios turísticos': 'turismo.png',
                'Gestión y Venta de Servicios Turísticos': 'turismo.png',
                'Hotelería': 'hoteleria.png',
                'Informática': 'informatica.png',
                'Inglés': 'ingles.png',
                'Mantenimiento al sistema electrónico automotriz': 'electronico.png',
                'Mantenimiento al Sistema Electrónico Automotriz': 'electronico.png',
                'Mantenimiento al Sistema Eléctrico Automotriz': 'electrica.png',
                'Mantenimiento electromecánico del automóvil': 'electromecanico.png',
                'Mantenimiento Electromecánico del Automóvil': 'electromecanico.png',
                'Máquinas-Herramienta': 'maquinas.png',
                'Mecánica diésel': 'diesel.png',
                'Mecánica Diésel': 'diesel.png',
                'Refrigeración y aire acondicionado': 'refri.png',
                'Refrigeración y Aire Acondicionado': 'refri.png',
                'Sastrería': 'sastre.png',
                'Soldadura y pailería': 'soldadura.png',
                'Soldadura y Pailería': 'soldadura.png',
                'Soporte a instalac. eléctricas y motores eléctricos': 'electrica.png',
                'Soporte técnico a equipos y sistemas computacionales': 'soporte.png',
                'Soporte Técnico a Equipos y Sistemas Computacionales': 'soporte.png'
            };
            
            let imagenEspecialidad = imagenesEspecialidades[nombreEspecialidad] || 'cecatin.png';
            
            // Obtener información de la especialidad desde la base de datos
            const infoEspecialidad = obtenerInfoEspecialidad(nombreEspecialidad);
            
            let html = `
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #691c32; font-size: 2.5em; margin-bottom: 10px;">
                        <img src="imagenes/${imagenEspecialidad}" alt="${nombreEspecialidad}" style="width: 50px; height: 50px; margin-right: 15px; vertical-align: middle; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        ${nombreEspecialidad}
                    </h1>
                    <div style="border-bottom: 3px solid #FFD700; width: 100px; margin: 0 auto;"></div>
                </div>
                
                <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
                    <h2 style="color: #691c32; margin-bottom: 20px;">ðŸŽ¯ Objetivo</h2>
                    <p style="line-height: 1.6; color: #333; font-size: 16px;">${infoEspecialidad.objetivo}</p>
                </div>
                
                <div style="background: white; padding: 25px; border-radius: 10px; border: 1px solid #e9ecef; margin-bottom: 25px;">
                    <h2 style="color: #691c32; margin-bottom: 20px;">ðŸ“š Enfoque educativo</h2>
                    <p style="line-height: 1.6; color: #333; font-size: 16px;">${infoEspecialidad.enfoque}</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
                    <h2 style="color: #691c32; margin-bottom: 20px;">ðŸ“‹ Especificación de cursos</h2>
                    <p style="line-height: 1.6; color: #333; font-size: 16px;">${infoEspecialidad.cursos}</p>
                </div>
                
                <div style="background: white; padding: 25px; border-radius: 10px; border: 1px solid #e9ecef; margin-bottom: 25px;">
                    <h2 style="color: #691c32; margin-bottom: 20px;"> Certificación académica</h2>
                    <p style="line-height: 1.6; color: #333; font-size: 16px;">${infoEspecialidad.certificacionAcademica}</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
                    <h2 style="color: #691c32; margin-bottom: 20px;">ðŸ† Certificación laboral</h2>
                    <p style="line-height: 1.6; color: #333; font-size: 16px;">${infoEspecialidad.certificacionLaboral}</p>
                </div>
                
                <div style="background: white; padding: 25px; border-radius: 10px; border: 1px solid #e9ecef;">
                    <h2 style="color: #691c32; margin-bottom: 20px;">ðŸ¢ Sitios de inserción</h2>
                    <p style="line-height: 1.6; color: #333; font-size: 16px;">${infoEspecialidad.sitiosInsercion}</p>
                </div>
                
                <div style="text-align: center; margin-top: 40px;">
                    <button onclick="ocultarEspecialidadInfo()" style="background: #691c32; color: white; padding: 12px 30px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; transition: all 0.3s ease; margin: 0 10px;">
                        ðŸ  Regresar al Plantel
                    </button>
                </div>
            `;
            
            especialidadDetalle.innerHTML = html;
            document.getElementById("especialidad-info").style.display = "block";
            
            // Hacer scroll hacia arriba
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        function ocultarEspecialidadInfo() {
            document.getElementById("especialidad-info").style.display = "none";
            document.getElementById("plantel-info").style.display = "block";
        }

        function obtenerInfoEspecialidad(nombreEspecialidad) {
            // Información de especialidades
            const infoEspecialidades = {
                'Administración': {
                    objetivo: 'Establecer procesos de administración en micro y pequeña empresa, asesoría sobre mercadotecnia y establecer comunicación con el cliente, conforme a las especificaciones técnicas y procedimientos establecidos para proporcionar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en competencias',
                    cursos: 'Esta especialidad oferta cursos regulares, módulos del componente de formación laboral, así como oferta en escuelas particulares',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: empresas que cuentan con el área de administración y servicio al cliente, así como formas de trabajo independiente.'
                },
                'Alimentos y Bebidas': {
                    objetivo: 'Preparar alimentos, postres y bebidas; cumpliendo con los procedimientos del recetario base, así como servirlos con vino en tiempo y forma según preferencias del cliente, de acuerdo a la operación y servicio de calidad total al comensal.',
                    enfoque: 'Modelo educativo basado en competencias',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional y módulos del componente de formación profesional',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencia Laboral (CONOCER)',
                    sitiosInsercion: 'Cadenas hoteleras, cadenas restauranteras, bares, cruceros, autoempleo, entre otros'
                },
                'Aplicación de Normas y Procedimientos Contables y Fiscales': {
                    objetivo: 'Realizar el registro mecánico y electrónico de las operaciones financieras de una entidad, conforme a las especificaciones técnicas y procedimientos establecidos, para proporcionar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares y módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: despachos de contadores públicos o privados, empresas pequeñas, medianas o grandes en el área de recursos financieros, almacenes, área de auditoría, en general toda empresa o entidad que este obligada a llevar registros contables, también puede recurrirse al autoempleo ofreciendo sus servicios a pequeños negocios para realizar los trámites necesarios ante la Secretaría de Hacienda y Crédito Público que no requieran de cédula profesional.'
                },
                'Artes Gráficas': {
                    objetivo: 'Aplicar los procesos de Artes Gráficas, con el fin de elevar la calidad de los servicios públicos de educación.',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional y modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares y módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos y/o subobjetivos que integran los cursos de la especialidad, ya sea por formación presencial o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: empresas que cuentan con el área de artes gráficas, talleres de impresión, editoriales, periódicos, revistas, así como formas de trabajo independiente.'
                },
                'Artesanías con Fibras Textiles': {
                    objetivo: 'Elaborar diferentes objetos a través de técnicas, símbolos y formas, conforme a los procesos de las artes manuales como: bordado en tela, chaquira, macramé y tejido a mano, considerando las prácticas de trabajo seguras.',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional.',
                    cursos: 'Esta especialidad oferta cursos regulares.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los subobjetivos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: tiendas de decoración, comercios artesanales, plazas, tianguis, mercados, ciudadelas, ferias de exposición, museos, escuelas de artesanías, microempresas e instalaciones públicas de fomento a las artesanías y el folklore.'
                },
                'Artesanías con Pastas, Pinturas y Acabados': {
                    objetivo: 'Elaborar diferentes objetos a través de técnicas, símbolos y formas, conforme a los procesos de las artes manuales como: pintura textil, migajón, pintura en cerámica, poliéster, cerámica artificial, trabajos en papel y cartón',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional.',
                    cursos: 'Modelo educativo basado en criterios de competencia ocupacional.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los subobjetivos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: tiendas de decoración, comercios artesanales, galerías de arte, plazas, tianguis, mercados, ciudadelas, ferias de exposición, museos, escuelas de artesanías, microempresas e instalaciones públicas de fomento a las artesanías y el folklore.'
                },
                'Artesanías de Madera': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de las Artesanías de Madera, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: industrias manufactureras, talleres comunitarios o en grupos familiares, fábricas de materiales trensables, de productos y utensilios para el hogar y de otros productos de madera, locales comerciales, ferias, mercados y exposiciones artesanales, entre otros.'
                },
                'Artesanías Metálicas': {
                    objetivo: 'Utilizar las herramientas y equipo necesario en cada una de las artes manuales que componen las artesanías metálicas como: Repujado en metal, vidrio artístico, esmalte a fuego y herrería artística; así como las técnicas de selección y transformación de materiales con diseño, decorados y ornamentación de buen gusto.',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional.',
                    cursos: 'Esta especialidad oferta cursos regulares.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los subobjetivos que integran los cursos de la especialidad ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: comercios artesanales (plazas tianguis, tiendas propias), mercados artesanales (ciudadela, ferias de exposición como World Trade Center México), talleres artesanales, microempresas, museo de artesanías, internet y autoempleo.'
                },
                'Asistencia Educativa Inicial y Preescolar': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de la Asistencia Educativa Inicial y Preescolar, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: guarderías públicas y privadas, instituciones de educación inicial y preescolar públicas y privadas, centros de atención infantil, estancias infantiles, albergues y establecimientos de asistencia social.'
                },
                'Asistencia Ejecutiva': {
                    objetivo: 'Aplicar la taquigrafía, mecanografía y las relaciones personales, con el fin de establecer comunicación con el cliente, conforme a las especificaciones técnicas y procedimientos establecidos para proporcionar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional y modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares y módulos del componente de formación profesional.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los subobjetivos y/o submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo nacional de Normalización y Certificación de Competencia Laboral (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: oficinas gubernamentales, despachos de una gran gama de servicios de oficina.'
                },
                'Atención Integral a Personas con Discapacidad': {
                    objetivo: 'Aplicar los procesos de asistencia familiar y de salud, con el fin de atender a personas con discapacidad auditiva, visual, habilitación física funcional y cuidados básicos de la salud para personas con discapacidad.',
                    enfoque: 'Modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional y módulos del componente de formación profesional.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencia Laboral (CONOCER).',
                    sitiosInsercion: 'La demanda y localización de empleo en esta área se encuentra en todo el país, especialmente en instituciones públicas y privadas como: estancias infantiles, asilos, centros de salud y centros de rehabilitación.'
                },
                'Auxiliar de Enfermería': {
                    objetivo: 'Realizar los servicios de cuidado al paciente y dar orientación a la familia en unidades de atención médica, conforme a los procedimientos de seguridad e higiene establecidos, para proporcionar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en competencias',
                    cursos: 'Esta especialidad oferta cursos regulares y módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Proporcionar servicios de enfermería en centros hospitalarios que cuentan con las instalaciones para la hospitalización de pacientes, como hospitales generales, pediátricos geriátricos, de enfermedades de la mujer. También el autoempleo es muy frecuente en esta área, proporcionando servicios calificados de enfermería en el domicilio del paciente.'
                },
                'Confección de Prendas de Vestir': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de la Confección de Prendas de Vestir, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de competencias integrales.',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación laboral.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo con los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son en talleres, maquiladoras, empresas de sastrería y confección de ropa, grandes almacenes departamentales de ropa, empresas de vestuario para espectáculos, cine y televisión, también se puede recurrir al autoempleo mediante la apertura de un negocio propio.'
                },
                'Cosmetología Integral': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de Cosmetología Integral, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación laboral.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: salones de belleza, SPA, clínicas de belleza y estéticas, también se puede recurrir al autoempleo mediante la apertura de un negocio propio.'
                },
                'Diseño e Imagen de la Carrocería': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de la Diseño e Imagen de la Carrocería, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona estudiante en dicho contexto.',
                    enfoque: 'Enfoque de competencias integrales.',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad de los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencia Laboral (CONOCER).',
                    sitiosInsercion: 'Agencia de servicio automotriz, talleres mecánicos de servicio y reparaciones menores, ensambladoras automotrices, empresas que presentan servicios de mecánica de emergencia, empresas que disponen de flotillas de vehículos, boutiques para automóviles, talleres de transmisiones, talleres de suspensiones y talleres electromotrices'
                },
                'Diseño de Moda': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo del Vestido y Textil, en Diseño de Moda, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER)',
                    sitiosInsercion: 'Las principales fuentes de empleo son: Casa de moda de vestidos de noche y alta costura, talleres de costura dedicados a la creación de diseño y estilos de moda, patronaje, graduación y fabricación de ropa, en general, tiendas departamentales de alto prestigio, para realizar ajustes a la medida, fábricas de confección y maquila de camisas y pantalones y talleres de diseño de moda y confección de ropa deportiva, casual y accesorios'
                },
                'Diseño y Fabricación de Muebles de Madera': {
                    objetivo: 'Realizar los procesos de diseño y fabricación de muebles de madera, conforme a las especificaciones técnicas y procedimientos de seguridad e higiene establecidos, para proporcionar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en competencias',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional y módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las fábricas de muebles en general, fábricas y talleres de puertas, ventanas y armarios, talleres de reparación y mantenimiento de productos de madera, talleres de ebanistería fina, laqueados y barnices, madererías, tiendas de puertas, ventanas y armarios, constructoras en donde se realizan trabajos de carpintería, compañías de mantenimiento, fábricas de construcción e instalación de cocinas integrales, también el autoempleo es muy frecuente en esta área, sobre todo en su forma familiar.'
                },
                'Elaboración de Dibujos Arquitectónico e Industrial': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo en la especialidad de Elaboración de Dibujos Arquitectónico e Industrial, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona estudiante en dicho contexto.',
                    enfoque: 'Enfoque de competencias integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: empresas constructoras y despachos particulares, servicios en examinar y estudiar croquis, bocetos y notas para verificar dimensiones y especificaciones de proyectos, integrar paquetes con planos e informes de la obra, calcular dimensiones y superficies para trazar planos y dibujos industriales y arquitectónicos.'
                },
                'Estilismo y Diseño de Imagen': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo del Estilismo y Diseño de Imagen, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: salones de belleza, barberías, SPA, clínicas de belleza, peluquerías y estéticas, también se puede recurrir al autoempleo mediante la apertura de un negocio propio.'
                },
                'Expresión Gráfica Digital': {
                    objetivo: 'Aplicar los procesos de presentaciones electrónicas, presentaciones gráficas y presentaciones fotográficas, respetando las normas y procedimientos de seguridad e higiene establecidos a fin de otorgar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional.',
                    cursos: 'Esta especialidad oferta cursos regulares y módulos del componente de formación profesional.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los subobjetivos que integran los cursos de la especialidad ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: empresas públicas y privadas relacionadas con medios de comunicación y de publicidad, instituciones bancarias y comerciales, agencia de viajes, hospitales, escuelas, etc., en donde se utilice sistema de cómputo.'
                },
                'Electricidad': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de la Electricidad, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto',
                    enfoque: 'Enfoque de competencias integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación laboral.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencia Laboral (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: instalaciones eléctricas en construcción, edificación de viviendas unifamiliares, multifamiliares, naves y plantas industriales; edificación de inmuebles comerciales y de servicios y talleres de reparación de motores eléctricos.'
                },
                'Gestión y Venta de Servicios Turísticos': {
                    objetivo: 'Ofrecer bienes, servicios y productos, a través de las diferentes empresas y/u organizaciones públicas o privadas, de acuerdo a las preferencias del cliente.',
                    enfoque: 'Modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional y módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Agencias de viaje, Líneas aéreas, Cadenas hoteleras, Cruceros, Dependencias oficiales del sector turístico, Módulos de información turística, Gestoría turística independiente, entre otros.'
                },
                'Hotelería': {
                    objetivo: 'Ofrecer servicios hoteleros antes, durante y al término de la estancia del huésped, de acuerdo a los procedimientos de operación y servicio de calidad total al huésped.',
                    enfoque: 'Modelo educativo basado en criterios de competencias ocupacional y modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional, módulos de componente de formación para el trabajo y formación de aprendices calificados.',
                    certificacionAcademica: 'El diploma o constancia se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Cadenas hoteleras, moteles, cruceros, casa de huéspedes, cabañas, bungalows, residencias, entre otros.'
                },
                'Informática': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de la Informática, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: Instituciones de bienes y servicios públicos y privados y autoempleo.'
                },
                'Inglés': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo del Inglés, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación laboral.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo para los egresados de esta especialidad son: áreas turísticas, embajadas, institución o empresas que requiera de esta lengua.'
                },
                'Mantenimiento al Sistema Eléctrico Automotriz': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de la Mantenimiento al Sistema Eléctrico Automotriz, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello la inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo con los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Agencias de servicio automotriz, talleres mecánicos de servicio y reparaciones menores, ensambladoras automotrices, empresas que presentan servicios de mecánica de emergencia, empresas que disponen de flotillas de vehículos, boutiques para automóviles y talleres electromotrices'
                },
                'Mantenimiento al Sistema Electrónico Automotriz': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo del Mantenimiento al Sistema Electrónico Automotriz, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo con los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Agencias de servicio automotriz, talleres mecánicos de servicio y reparaciones menores, ensambladoras automotrices, empresas que presentan servicios de mecánica de emergencia, empresas que disponen de flotillas de vehículos, boutiques para automóviles y talleres electromotrices'
                },
                'Mantenimiento Electromecánico del Automóvil': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo del Mantenimiento Electromecánico del Automóvil, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: Empresas dedicadas a la rama automotriz, empresas públicas y privadas dedicadas a la producción y comercialización de bienes o de servicios de reparación automotriz, su propia empresa, concesionarios automotrices, talleres de reparación de vehículos, talleres de mantenimiento a flotas de diversas empresas, estaciones de servicio automotriz, empresas de transporte, concesionarios de marca, talleres de servicio técnico automotriz y plantas de revisión técnica automotriz.'
                },
                'Máquinas-Herramienta': {
                    objetivo: 'Desarrollar las competencias para la fabricación de piezas conforme a las especificaciones de máquinas-herramienta.',
                    enfoque: 'Modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional y módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'El egresado de esta especialidad podrá desempeñarse en la fabricación, reparación y mantenimiento de maquinaria, en la manufactura de productos metálicos y el corte de metales.'
                },
                'Mecánica Diésel': {
                    objetivo: 'Reparar motores a Diesel con sistema de inyección de rango medio y pesado, de acuerdo a especificaciones técnicas del fabricante y procedimientos del servicio.',
                    enfoque: 'Modelo educativo basado en competencias',
                    cursos: 'Esta especialidad oferta cursos regulares.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad de los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Talleres mecánicos de servicio y reparaciones de rango medio y pesado; y agencias de servicio con laboratorio diesel de rango medio y pesado.'
                },
                'Refrigeración y Aire Acondicionado': {
                    objetivo: 'Ofertar un trayecto de formación dirigido al desarrollo de competencias en el campo de la Refrigeración y Aire Acondicionado, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación con base en especificaciones técnicas aplicables, la prestación de servicios con amabilidad y honestidad así como el compromiso a la preservación del medio ambiente y la aplicación de las normas de seguridad e higiene con la finalidad de atender con altos niveles de calidad las demandas del sector productivo.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Unidades económicas dedicadas principalmente a la instalación, mantenimiento y reparación de equipos de refrigeración y aire acondicionado de tipo doméstico, comercial, industrial, automotriz y de transporte, así como el autoempleo.'
                },
                'Sastrería': {
                    objetivo: 'Realizar los procesos de Confección de saco, chaleco, falda y pantalón sastre, conforme a las especificaciones técnicas y procedimientos de seguridad e higiene establecidas, para proporcionar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencia Laboral (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: Industrias, talleres de sastrería, fabricación de ropa sastre, tiendas departamentales de ropa sastre y talleres propios de Confección de ropa sastre hechas a la medida del cliente.'
                },
                'Soldadura y Pailería': {
                    objetivo: 'Desarrollar y reconocer los conocimientos, habilidades y destrezas para llevar a cabo diferentes posiciones y procesos de la soldadura.',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional y modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional y módulos del componente de formación profesional.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los subobjetivos y/o submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Industria dedicada a la fabricación de maquinaria y equipo. Las principales fuentes de empleo son: talleres de herrería, soldadura y mantenimiento, talleres de procesos metálicos especiales y establecimientos de elaboración y reparación de artículos de láminas y hojalatería.'
                },
                'Soporte Técnico a Equipos y Sistemas Computacionales': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo del Soporte Técnico a Equipos y Sistemas Computacionales, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: Instituciones de bienes y/o servicios públicos y privados'
                }
            };

            // Devolver información de la especialidad o información por defecto
            return infoEspecialidades[nombreEspecialidad] || {
                objetivo: 'Información detallada sobre el objetivo de esta especialidad.',
                enfoque: 'Modelo educativo basado en competencias',
                cursos: 'Esta especialidad oferta cursos regulares y módulos del componente de formación.',
                certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad.',
                certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias.',
                sitiosInsercion: 'Las principales fuentes de empleo están relacionadas con el área de especialización.'
            };
        }


        window.mostrarDetalleEspecialidad = mostrarDetalleEspecialidad;
        window.ocultarEspecialidadInfo = ocultarEspecialidadInfo;
        
        // Configurar eventos onclick para los enlaces del menú PLANTELES
        function setupPlantelEvents() {
            console.log('Configurando eventos de planteles...');
            
            function assignEvents() {
                console.log('Asignando eventos...');
                
                // Buscar todos los enlaces en el menú PLANTELES
                const menuLinks = document.querySelectorAll('.nav-main a');
                console.log('Enlaces encontrados:', menuLinks.length);
                
                menuLinks.forEach((link, i) => {
                    const text = link.textContent.trim();
                    if (text.includes('CECATI')) {
                        console.log('Configurando enlace: ' + text);
                        
                        // Estilo visual
                        link.style.color = 'white';
                        link.style.fontWeight = 'bold';
                        link.style.cursor = 'pointer';
                        
                        // Extraer nombre del CECATI (ej: "CECATI 31" de "CECATI 31 Coatzacoalcos")
                        const parts = text.split(' ');
                        const plantelName = parts[0] + ' ' + parts[1];
                        
                        // Evento onclick - usar addEventListener en lugar de setAttribute
                        link.removeEventListener('click', link._plantelClickHandler);
                        link._plantelClickHandler = function(e) {
                            e.preventDefault();
                            console.log('Clic en enlace:', plantelName);
                            if (typeof mostrarInfoPlantel === 'function') {
                                mostrarInfoPlantel(plantelName);
                            } else {
                                console.error('mostrarInfoPlantel no está definida');
                            }
                        };
                        link.addEventListener('click', link._plantelClickHandler);

                        // AGREGAR: Ocultar o limpiar la tarjeta de especialidad al salir de la vista principal
                        const contenedorTarjeta = document.querySelector('.clase-de-tu-tarjeta-especialidad');
                        if (contenedorTarjeta) {
                            contenedorTarjeta.style.display = 'none'; 
                            // o eliminar su contenido
                        }
                    }
                });
                
                // Buscar items de especialidades
                const items = document.querySelectorAll('.plantel-item');
                console.log('Items encontrados:', items.length);
                
                items.forEach((item, i) => {
                    const text = item.textContent.trim();
                    if (text.includes('CECATI')) {
                        // Extraer nombre del CECATI usando regex para ambos casos
                        const match = text.match(/CECATI \d+/);
                        const plantelName = match ? match[0] : text;
                        console.log('Configurando item: ' + plantelName + ' - Texto completo: "' + text + '"');
                        
                        // Estilo visual
                        item.style.cursor = 'pointer';
                        item.style.backgroundColor = '#e8f4f8';
                        item.style.border = '1px solid #691c32';
                        item.style.borderRadius = '4px';
                        item.style.padding = '5px';
                        
                        // Evento onclick - usar addEventListener en lugar de setAttribute
                        item.removeEventListener('click', item._plantelClickHandler);
                        item._plantelClickHandler = function(e) {
                            e.preventDefault();
                            console.log('Clic en item:', plantelName);
                            if (typeof mostrarInfoPlantel === 'function') {
                                mostrarInfoPlantel(plantelName);
                            } else {
                                console.error('mostrarInfoPlantel no está definida');
                            }
                        };
                        item.addEventListener('click', item._plantelClickHandler);
                    }
                });
                
                console.log('Eventos asignados. Enlaces:', menuLinks.length, 'Items:', items.length);
            }
            
            // Ejecutar inmediatamente y después de varios retrasos para asegurar que los elementos existan
            assignEvents();
            setTimeout(assignEvents, 100);
            setTimeout(assignEvents, 500);
            setTimeout(assignEvents, 1000);
            setTimeout(assignEvents, 2000);
        }
        
        setupPlantelEvents();
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupPlantelEvents);
        }
        
        setTimeout(setupPlantelEvents, 2000);

        /* ============================================================
           Comportamiento toggle/cerrar de los dropdowns en móvil
           ============================================================
           - En desktop (>768px) los dropdowns siguen funcionando con :hover.
           - En móvil (≤768px) usamos la clase .is-open vía JS:
               * Tap en el toggle: abre / cierra ese dropdown.
               * Tap en una opción: cierra el dropdown que la contiene.
               * Tap fuera de la barra: cierra todos los dropdowns.
        */
        function setupMobileDropdowns() {
            const navMain = document.querySelector('.nav-main');
            if (!navMain) return;

            const dropdowns = navMain.querySelectorAll('.dropdown');
            const mobileMQ  = window.matchMedia('(max-width: 768px)');

            dropdowns.forEach(dropdown => {
                const toggle = dropdown.querySelector('.dropdown-toggle');
                if (!toggle || toggle._mobileToggleBound) return;
                toggle._mobileToggleBound = true;

                toggle.addEventListener('click', function (e) {
                    if (!mobileMQ.matches) return; // solo en móvil
                    e.preventDefault();              // evita el salto a "#"
                    e.stopPropagation();             // evita que el listener global cierre justo después

                    const wasOpen = dropdown.classList.contains('is-open');
                    // Cierra todos los demás
                    dropdowns.forEach(d => d.classList.remove('is-open'));
                    // Abre/cierra este según estado anterior
                    if (!wasOpen) dropdown.classList.add('is-open');
                });
            });

            // Cerrar dropdown cuando se selecciona cualquier opción del menú
            navMain.querySelectorAll('.dropdown-menu a').forEach(link => {
                if (link._mobileCloseBound) return;
                link._mobileCloseBound = true;
                link.addEventListener('click', function () {
                    const dropdown = link.closest('.dropdown');
                    if (dropdown) dropdown.classList.remove('is-open');
                });
            });

            // Cerrar al tocar fuera de la barra de navegación
            if (!document._mobileDropdownsOutsideBound) {
                document._mobileDropdownsOutsideBound = true;
                document.addEventListener('click', function (e) {
                    if (!e.target.closest('.nav-main .dropdown')) {
                        document.querySelectorAll('.nav-main .dropdown.is-open')
                                .forEach(d => d.classList.remove('is-open'));
                    }
                });
            }

            // Si el viewport pasa de móvil a desktop, limpiar el estado
            if (!mobileMQ._cleanupBound) {
                mobileMQ._cleanupBound = true;
                mobileMQ.addEventListener('change', function (e) {
                    if (!e.matches) {
                        dropdowns.forEach(d => d.classList.remove('is-open'));
                    }
                });
            }
        }

        setupMobileDropdowns();
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupMobileDropdowns);
        }
