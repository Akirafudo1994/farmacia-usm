document.addEventListener('DOMContentLoaded', () => {
    // Definición de todos los ramos con sus IDs únicos y requisitos
    const ramosData = [
        // Semestre 1
        { id: 'OF1', name: 'ORIENTACIÓN FARMACÉUTICA I', credits: 2, semester: 1, requires: [] },
        { id: 'FA2', name: 'FÍSICA APLICADA II', credits: 3, semester: 1, requires: [] }, // Nota: El nombre puede confundir con el de semestre 2, lo identificamos por semestre 1
        { id: 'MA1', name: 'MATEMÁTICA APLICADA I', credits: 3, semester: 1, requires: [] },
        { id: 'BIO1', name: 'BIOLOGÍA I', credits: 3, semester: 1, requires: [] },
        { id: 'QB', name: 'QUÍMICA BÁSICA', credits: 6, semester: 1, requires: [] },
        { id: 'BA1', name: 'BOTÁNICA APLICADA I', credits: 2, semester: 1, requires: [] },

        // Semestre 2
        { id: 'OF2', name: 'ORIENTACIÓN FARMACÉUTICA II', credits: 2, semester: 2, requires: ['OF1'] },
        { id: 'FA2_S2', name: 'FÍSICA APLICADA II', credits: 3, semester: 2, requires: ['FA2'] }, // Distinguido por _S2 para ser único
        { id: 'MA2', name: 'MATEMÁTICA APLICADA II', credits: 3, semester: 2, requires: ['MA1'] },
        { id: 'BIO2', name: 'BIOLOGÍA II', credits: 3, semester: 2, requires: ['BIO1'] },
        { id: 'QB2', name: 'QUÍMICA BÁSICA II', credits: 6, semester: 2, requires: ['QB'] },
        { id: 'BA2', name: 'BOTÁNICA APLICADA II', credits: 2, semester: 2, requires: ['BA1'] },

        // Semestre 3
        { id: 'ECH', name: 'Estudio y Comprensión del Hombre', credits: 2, semester: 3, requires: [] },
        { id: 'QI1', name: 'Química Inorgánica I', credits: 3, semester: 3, requires: ['QB2'] },
        { id: 'QO1', name: 'Química Orgánica I', credits: 4, semester: 3, requires: ['QB2'] },
        { id: 'AQ1', name: 'Análisis Químico I', credits: 5, semester: 3, requires: ['QB2'] },
        { id: 'FQ1', name: 'Fisicoquímica I', credits: 3, semester: 3, requires: ['FA2_S2'] },
        { id: 'FYAI1', name: 'FISIOLOGÍA y ANATOMÍA I', credits: 3, semester: 3, requires: ['BIO2'] },
        { id: 'PARA', name: 'Parasitología', credits: 2, semester: 3, requires: ['BIO2'] },
        { id: 'EST1', name: 'Estadística I', credits: 2, semester: 3, requires: ['MA2'] },
        { id: 'AF1', name: 'Atención Farmacéutica I', credits: 2, semester: 3, requires: ['OF2'] },

        // Semestre 4
        { id: 'QI2', name: 'Química Inorgánica II', credits: 3, semester: 4, requires: ['QI1'] },
        { id: 'QO2', name: 'Química Orgánica II', credits: 5, semester: 4, requires: ['QO1'] },
        { id: 'AQ2', name: 'Análisis Químico II', credits: 6, semester: 4, requires: ['AQ1'] },
        { id: 'FQ2', name: 'Fisicoquímica II', credits: 3, semester: 4, requires: ['FQ1'] },
        { id: 'FYAI2', name: 'Fisiología y Anatomía II', credits: 3, semester: 4, requires: ['FYAI1'] },
        { id: 'EST2', name: 'Estadística II', credits: 2, semester: 4, requires: ['EST1'] },
        { id: 'MI', name: 'Metodología de la Investigación', credits: 2, semester: 4, requires: ['EST1'] },
        { id: 'AF2', name: 'Atención Farmacéutica II', credits: 2, semester: 4, requires: ['AF1'] },

        // Semestre 5
        { id: 'QM1', name: 'Química Medicinal I', credits: 3, semester: 5, requires: ['QO2'] },
        { id: 'AI1', name: 'Análisis Instrumental I', credits: 3, semester: 5, requires: ['AQ2'] },
        { id: 'FIP1', name: 'Fisiopatología I', credits: 3, semester: 5, requires: ['FYAI2'] },
        { id: 'SP1', name: 'Salud Pública I', credits: 2, semester: 5, requires: ['PARA'] },
        { id: 'BQ1', name: 'Bioquímica I', credits: 3, semester: 5, requires: ['FQ2'] },
        { id: 'FT1', name: 'Farmacotecnia I', credits: 3, semester: 5, requires: ['AF2'] },
        { id: 'LF1', name: 'Legislación Farmacéutica I', credits: 2, semester: 5, requires: [] },
        { id: 'DP1', name: 'Diseño de Proyectos I', credits: 2, semester: 5, requires: ['EST2'] },

        // Semestre 6
        { id: 'QM2', name: 'Química Medicinal II', credits: 3, semester: 6, requires: ['QM1'] },
        { id: 'AI2', name: 'Análisis Instrumental II', credits: 3, semester: 6, requires: ['AI1'] },
        { id: 'FIP2', name: 'Fisiopatología II', credits: 3, semester: 6, requires: ['FIP1'] },
        { id: 'SP2', name: 'Salud Pública II', credits: 2, semester: 6, requires: ['SP1'] },
        { id: 'BQ2', name: 'Bioquímica II', credits: 3, semester: 6, requires: ['BQ1'] },
        { id: 'FT2', name: 'Farmacotecnia II', credits: 3, semester: 6, requires: ['FT1'] },
        { id: 'LF2', name: 'Legislación Farmacéutica II', credits: 2, semester: 6, requires: ['LF1'] },
        { id: 'DP2', name: 'Diseño de Proyectos II', credits: 2, semester: 6, requires: ['DP1'] },

        // Semestre 7
        { id: 'MCR1', name: 'Microbiología I', credits: 3, semester: 7, requires: ['SP2'] },
        { id: 'FM1', name: 'Farmacología I', credits: 3, semester: 7, requires: ['FIP2'] },
        { id: 'TOX1', name: 'Toxicología I', credits: 3, semester: 7, requires: ['BQ2'] },
        { id: 'FG1', name: 'Farmacognosis I', credits: 3, semester: 7, requires: ['QM2'] },
        { id: 'BF1', name: 'Biofarmacia I', credits: 3, semester: 7, requires: ['AI2'] },
        { id: 'PU1', name: 'Procesos Unitarios I', credits: 3, semester: 7, requires: ['AI2'] },
        { id: 'HSI1', name: 'Higiene y Seguridad Industrial I', credits: 2, semester: 7, requires: [] },
        { id: 'EA', name: 'Economía Aplicada', credits: 2, semester: 7, requires: [] },
        { id: 'OPOF', name: 'Orientación Pasantías Oficina de Farmacia', credits: 2, semester: 7, requires: ['FT2'] },

        // Semestre 8
        { id: 'MCR2', name: 'Microbiología II', credits: 3, semester: 8, requires: ['MCR1'] },
        { id: 'FM2', name: 'Farmacología II', credits: 3, semester: 8, requires: ['FM1'] },
        { id: 'TOX2', name: 'Toxicología II', credits: 3, semester: 8, requires: ['TOX1'] },
        { id: 'FG2', name: 'Farmacognosis II', credits: 3, semester: 8, requires: ['FG1'] },
        { id: 'BF2', name: 'Biofarmacia II', credits: 3, semester: 8, requires: ['BF1'] },
        { id: 'PU2', name: 'Procesos Unitarios II', credits: 3, semester: 8, requires: ['PU1'] },
        { id: 'HSI2', name: 'Higiene y Seguridad Industrial II', credits: 2, semester: 8, requires: ['HSI1'] },
        { id: 'ADMA', name: 'Administración Aplicada', credits: 2, semester: 8, requires: ['EA'] },
        { id: 'PPOF', name: 'Pasantías I Oficina de Farmacia', credits: 2, semester: 8, requires: ['OPOF'] },

        // Semestre 9
        { id: 'PA1', name: 'Primeros Auxilios I', credits: 3, semester: 9, requires: ['TOX2'] },
        { id: 'FTT1', name: 'Farmacoterapéutica I', credits: 2, semester: 9, requires: ['FM2'] },
        { id: 'BROM1', name: 'Bromatología', credits: 3, semester: 9, requires: ['MCR2'] },
        { id: 'FT3', name: 'Farmacotecnia III', credits: 3, semester: 9, requires: ['PU2'] },
        { id: 'DRM1', name: 'Dermocosmética I', credits: 3, semester: 9, requires: ['FG2'] },
        { id: 'MK1', name: 'Mercadotecnia I', credits: 2, semester: 9, requires: [] },
        { id: 'TG1', name: 'Técnicas Gerenciales I', credits: 2, semester: 9, requires: ['ADMA'] },
        { id: 'STEG1', name: 'Seminario Trabajo Especial de Grado I', credits: 2, semester: 9, requires: ['DP2'] },
        { id: 'OPIE', name: 'Orientación Pasantías Industriales-Empresas', credits: 2, semester: 9, requires: ['PPOF'] },
        { id: 'FH1', name: 'Farmacia Hospitalaria I', credits: 2, semester: 9, requires: ['FM2'] },

        // Semestre 10
        { id: 'PA2', name: 'Primeros Auxilios II', credits: 3, semester: 10, requires: ['PA1'] },
        { id: 'FTT2', name: 'Farmacoterapéutica II', credits: 2, semester: 10, requires: ['FTT1'] },
        { id: 'BROM2', name: 'Bromatología II', credits: 3, semester: 10, requires: ['BROM1'] },
        { id: 'FT4', name: 'Farmacotecnia IV', credits: 3, semester: 10, requires: ['FT3'] },
        { id: 'DRM2', name: 'Dermocosmética II', credits: 3, semester: 10, requires: ['DRM1'] },
        { id: 'MK2', name: 'Mercadotecnia II', credits: 2, semester: 10, requires: ['MK1'] },
        { id: 'TG2', name: 'Técnicas Gerenciales II', credits: 2, semester: 10, requires: [] }, // No tiene requisito listado
        { id: 'STEG2', name: 'Seminario Trabajo Especial de Grado II', credits: 2, semester: 10, requires: ['STEG1'] },
        { id: 'TEG', name: 'Trabajo Especial de Grado', credits: 2, semester: 10, requires: ['STEG2'] },
        { id: 'PPIE', name: 'Pasantías II Industriales-Empresas', credits: 2, semester: 10, requires: ['OPIE'] },
        { id: 'FH2', name: 'Farmacia Hospitalaria II', credits: 2, semester: 10, requires: ['FH1'] }
    ];

    const mallaDiv = document.getElementById('malla-curricular');
    let approvedRamos = new Set(); // Para almacenar los IDs de los ramos aprobados

    // Función para guardar el estado en localStorage
    function saveState() {
        localStorage.setItem('approvedRamos', JSON.stringify(Array.from(approvedRamos)));
    }

    // Función para cargar el estado desde localStorage
    function loadState() {
        const savedRamos = localStorage.getItem('approvedRamos');
        if (savedRamos) {
            approvedRamos = new Set(JSON.parse(savedRamos));
        }
    }

    // Función para verificar si un ramo está desbloqueado
    function isRamoUnlocked(ramoId) {
        const ramo = ramosData.find(r => r.id === ramoId);
        if (!ramo) return false; // Ramo no encontrado

        // Un ramo está desbloqueado si todos sus requisitos han sido aprobados
        return ramo.requires.every(reqId => approvedRamos.has(reqId));
    }

    // Función para renderizar la malla
    function renderMalla() {
        mallaDiv.innerHTML = ''; // Limpiar la malla antes de renderizar de nuevo

        // Agrupar ramos por semestre
        const semesters = {};
        ramosData.forEach(ramo => {
            if (!semesters[ramo.semester]) {
                semesters[ramo.semester] = [];
            }
            semesters[ramo.semester].push(ramo);
        });

        // Crear elementos HTML para cada semestre y ramo
        for (let i = 1; i <= 10; i++) { // Asumiendo 10 semestres
            if (semesters[i]) {
                const semestreDiv = document.createElement('div');
                semestreDiv.classList.add('semestre');
                semestreDiv.innerHTML = `<h2>Semestre ${i}</h2>`;

                semesters[i].forEach(ramo => {
                    const ramoDiv = document.createElement('div');
                    ramoDiv.classList.add('ramo');
                    ramoDiv.dataset.id = ramo.id;

                    // Añadir clases para estado (aprobado, bloqueado, disponible)
                    if (approvedRamos.has(ramo.id)) {
                        ramoDiv.classList.add('approved');
                    } else if (!isRamoUnlocked(ramo.id)) {
                        ramoDiv.classList.add('locked');
                    }
                    // Si no es aprobado ni bloqueado, se asume que está disponible (sin clases adicionales, el CSS por defecto lo maneja)

                    ramoDiv.innerHTML = `
                        <div class="ramo-title">${ramo.name}</div>
                        <div class="ramo-credits">${ramo.credits} créditos</div>
                    `;

                    // Añadir evento click si el ramo no está aprobado ni bloqueado
                    if (!approvedRamos.has(ramo.id) && isRamoUnlocked(ramo.id)) {
                        ramoDiv.addEventListener('click', () => {
                            approvedRamos.add(ramo.id);
                            saveState(); // Guardar el nuevo estado
                            renderMalla(); // Re-renderizar para actualizar estados
                        });
                    }

                    semestreDiv.appendChild(ramoDiv);
                });
                mallaDiv.appendChild(semestreDiv);
            }
        }
    }

    // Cargar el estado inicial y renderizar la malla
    loadState();
    renderMalla();

    // Opcional: Botón para reiniciar el progreso (para pruebas)
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reiniciar Progreso';
    resetButton.style.cssText = `
        margin-top: 30px;
        padding: 10px 20px;
        background-color: var(--dark-pink);
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1em;
        transition: background-color 0.2s ease, transform 0.1s ease;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    `;
    resetButton.addEventListener('mouseover', () => {
        resetButton.style.backgroundColor = '#a30063'; /* Un rosa más oscuro al pasar el ratón */
        resetButton.style.transform = 'translateY(-2px)';
    });
    resetButton.addEventListener('mouseout', () => {
        resetButton.style.backgroundColor = 'var(--dark-pink)';
        resetButton.style.transform = 'translateY(0)';
    });

    resetButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso?')) {
            approvedRamos.clear();
            saveState();
            renderMalla();
        }
    });
    document.querySelector('.container').appendChild(resetButton); // Añadir el botón al contenedor principal
});
