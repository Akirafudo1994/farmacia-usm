document.addEventListener('DOMContentLoaded', () => {
    const mallaCurricularDiv = document.getElementById('malla-curricular');

    // Datos de las materias
    const materiasData = {
        'Semestre 1': [
            { id: 'orientacion-farmaceutica-i', name: 'ORIENTACIÓN FARMACÉUTICA I', approved: false, unlocked: true, requires: [] },
            { id: 'fisica-aplicada-ii-s1', name: 'FÍSICA APLICADA II', approved: false, unlocked: true, requires: [] }, // Nota: Nombre duplicado, distinguido por semestre
            { id: 'matematica-aplicada-i', name: 'MATEMÁTICA APLICADA I', approved: false, unlocked: true, requires: [] },
            { id: 'biologia-i', name: 'BIOLOGÍA I', approved: false, unlocked: true, requires: [] },
            { id: 'quimica-basica', name: 'QUÍMICA BÁSICA', approved: false, unlocked: true, requires: [] },
            { id: 'botanica-aplicada-i', name: 'BOTÁNICA APLICADA I', approved: false, unlocked: true, requires: [] },
        ],
        'Semestre 2': [
            { id: 'orientacion-farmaceutica-ii', name: 'ORIENTACIÓN FARMACÉUTICA II', approved: false, unlocked: false, requires: ['orientacion-farmaceutica-i'] },
            { id: 'fisica-aplicada-ii-s2', name: 'FÍSICA APLICADA II', approved: false, unlocked: false, requires: ['fisica-aplicada-ii-s1'] },
            { id: 'matematica-aplicada-ii', name: 'MATEMÁTICA APLICADA II', approved: false, unlocked: false, requires: ['matematica-aplicada-i'] },
            { id: 'biologia-ii', name: 'BIOLOGÍA II', approved: false, unlocked: false, requires: ['biologia-i'] },
            { id: 'quimica-basica-ii', name: 'QUÍMICA BÁSICA II', approved: false, unlocked: false, requires: ['quimica-basica'] },
            { id: 'botanica-aplicada-ii', name: 'BOTÁNICA APLICADA II', approved: false, unlocked: false, requires: ['botanica-aplicada-i'] },
        ],
        'Semestre 3': [
            { id: 'estudio-comprension-hombre', name: 'Estudio y Comprensión del Hombre', approved: false, unlocked: true, requires: [] },
            { id: 'quimica-inorganica-i', name: 'Química Inorgánica I', approved: false, unlocked: false, requires: ['quimica-basica-ii'] },
            { id: 'quimica-organica-i', name: 'Química Orgánica I', approved: false, unlocked: false, requires: ['quimica-basica-ii'] },
            { id: 'analisis-quimico-i', name: 'Análisis Químico I', approved: false, unlocked: false, requires: ['quimica-basica-ii'] },
            { id: 'fisicoquimica-i', name: 'Fisicoquímica I', approved: false, unlocked: false, requires: ['fisica-aplicada-ii-s2'] },
            { id: 'fisiologia-anatomia-i', name: 'FISIOLOGÍA y ANATOMÍA I', approved: false, unlocked: false, requires: ['biologia-ii'] },
            { id: 'parasitologia', name: 'Parasitología', approved: false, unlocked: false, requires: ['biologia-ii'] },
            { id: 'estadistica-i', name: 'Estadística I', approved: false, unlocked: false, requires: ['matematica-aplicada-ii'] },
            { id: 'atencion-farmaceutica-i', name: 'Atención Farmacéutica I', approved: false, unlocked: false, requires: ['orientacion-farmaceutica-ii'] },
        ],
        'Semestre 4': [
            { id: 'quimica-inorganica-ii', name: 'Química Inorgánica II', approved: false, unlocked: false, requires: ['quimica-inorganica-i'] },
            { id: 'quimica-organica-ii', name: 'Química Orgánica II', approved: false, unlocked: false, requires: ['quimica-organica-i'] },
            { id: 'analisis-quimico-ii', name: 'Análisis Químico II', approved: false, unlocked: false, requires: ['analisis-quimico-i'] },
            { id: 'fisicoquimica-ii', name: 'Fisicoquímica II', approved: false, unlocked: false, requires: ['fisicoquimica-i'] },
            { id: 'fisiologia-anatomia-ii', name: 'Fisiología y Anatomía II', approved: false, unlocked: false, requires: ['fisiologia-anatomia-i'] },
            { id: 'estadistica-ii', name: 'Estadística II', approved: false, unlocked: false, requires: ['estadistica-i'] },
            { id: 'metodologia-investigacion', name: 'Metodología de la Investigación', approved: false, unlocked: false, requires: ['estadistica-i'] },
            { id: 'atencion-farmaceutica-ii', name: 'Atención Farmacéutica II', approved: false, unlocked: false, requires: ['atencion-farmaceutica-i'] },
        ],
        'Semestre 5': [
            { id: 'quimica-medicinal-i', name: 'Química Medicinal I', approved: false, unlocked: false, requires: ['quimica-organica-ii'] },
            { id: 'analisis-instrumental-i', name: 'Análisis Instrumental I', approved: false, unlocked: false, requires: ['analisis-quimico-ii'] },
            { id: 'fisiopatologia-i', name: 'Fisiopatología I', approved: false, unlocked: false, requires: ['fisiologia-anatomia-ii'] },
            { id: 'salud-publica-i', name: 'Salud Pública I', approved: false, unlocked: false, requires: ['parasitologia'] },
            { id: 'bioquimica-i', name: 'Bioquímica I', approved: false, unlocked: false, requires: ['fisicoquimica-ii'] },
            { id: 'farmacotecnia-i', name: 'Farmacotecnia I', approved: false, unlocked: false, requires: ['atencion-farmaceutica-ii'] },
            { id: 'legislacion-farmaceutica-i', name: 'Legislación Farmacéutica I', approved: false, unlocked: true, requires: [] },
            { id: 'diseno-proyectos-i', name: 'Diseño de Proyectos I', approved: false, unlocked: false, requires: ['estadistica-ii'] },
        ],
        'Semestre 6': [
            { id: 'quimica-medicinal-ii', name: 'Química Medicinal II', approved: false, unlocked: false, requires: ['quimica-medicinal-i'] },
            { id: 'analisis-instrumental-ii', name: 'Análisis Instrumental II', approved: false, unlocked: false, requires: ['analisis-instrumental-i'] },
            { id: 'fisiopatologia-ii', name: 'Fisiopatología II', approved: false, unlocked: false, requires: ['fisiopatologia-i'] },
            { id: 'salud-publica-ii', name: 'Salud Pública II', approved: false, unlocked: false, requires: ['salud-publica-i'] },
            { id: 'bioquimica-ii', name: 'Bioquímica II', approved: false, unlocked: false, requires: ['bioquimica-i'] },
            { id: 'farmacotecnia-ii', name: 'Farmacotecnia II', approved: false, unlocked: false, requires: ['farmacotecnia-i'] },
            { id: 'legislacion-farmaceutica-ii', name: 'Legislación Farmacéutica II', approved: false, unlocked: false, requires: ['legislacion-farmaceutica-i'] },
            { id: 'diseno-proyectos-ii', name: 'Diseño de Proyectos II', approved: false, unlocked: false, requires: ['diseno-proyectos-i'] },
        ],
        'Semestre 7': [
            { id: 'microbiologia-i', name: 'Microbiología I', approved: false, unlocked: false, requires: ['salud-publica-ii'] },
            { id: 'farmacologia-i', name: 'Farmacología I', approved: false, unlocked: false, requires: ['fisiopatologia-ii'] },
            { id: 'toxicologia-i', name: 'Toxicología I', approved: false, unlocked: false, requires: ['bioquimica-ii'] },
            { id: 'farmacognosis-i', name: 'Farmacognosis I', approved: false, unlocked: false, requires: ['quimica-medicinal-ii'] },
            { id: 'biofarmacia-i', name: 'Biofarmacia I', approved: false, unlocked: false, requires: ['analisis-instrumental-ii'] },
            { id: 'procesos-unitarios-i', name: 'Procesos Unitarios I', approved: false, unlocked: false, requires: ['analisis-instrumental-ii'] },
            { id: 'higiene-seguridad-industrial-i', name: 'Higiene y Seguridad Industrial I', approved: false, unlocked: true, requires: [] },
            { id: 'economia-aplicada', name: 'Economía Aplicada', approved: false, unlocked: true, requires: [] },
            { id: 'orientacion-pasantias-oficina', name: 'Orientación Pasantías Oficina de Farmacia', approved: false, unlocked: false, requires: ['farmacotecnia-ii'] },
        ],
        'Semestre 8': [
            { id: 'microbiologia-ii', name: 'Microbiología II', approved: false, unlocked: false, requires: ['microbiologia-i'] },
            { id: 'farmacologia-ii', name: 'Farmacología II', approved: false, unlocked: false, requires: ['farmacologia-i'] },
            { id: 'toxicologia-ii', name: 'Toxicología II', approved: false, unlocked: false, requires: ['toxicologia-i'] },
            { id: 'farmacognosis-ii', name: 'Farmacognosis II', approved: false, unlocked: false, requires: ['farmacognosis-i'] },
            { id: 'biofarmacia-ii', name: 'Biofarmacia II', approved: false, unlocked: false, requires: ['biofarmacia-i'] },
            { id: 'procesos-unitarios-ii', name: 'Procesos Unitarios II', approved: false, unlocked: false, requires: ['procesos-unitarios-i'] },
            { id: 'higiene-seguridad-industrial-ii', name: 'Higiene y Seguridad Industrial II', approved: false, unlocked: false, requires: ['higiene-seguridad-industrial-i'] },
            { id: 'administracion-aplicada', name: 'Administración Aplicada', approved: false, unlocked: false, requires: ['economia-aplicada'] },
            { id: 'pasantias-i-oficina', name: 'Pasantías I Oficina de Farmacia', approved: false, unlocked: false, requires: ['orientacion-pasantias-oficina'] },
        ],
        'Semestre 9': [
            { id: 'primeros-auxilios-i', name: 'Primeros Auxilios I', approved: false, unlocked: false, requires: ['toxicologia-ii'] },
            { id: 'farmacoterapeutica-i', name: 'Farmacoterapéutica I', approved: false, unlocked: false, requires: ['farmacologia-ii'] },
            { id: 'bromatologia', name: 'Bromatología', approved: false, unlocked: false, requires: ['microbiologia-ii'] },
            { id: 'farmacotecnia-iii', name: 'Farmacotecnia III', approved: false, unlocked: false, requires: ['procesos-unitarios-ii'] },
            { id: 'dermocosmetica-i', name: 'Dermocosmética I', approved: false, unlocked: false, requires: ['farmacognosis-ii'] },
            { id: 'mercadotecnia-i', name: 'Mercadotecnia I', approved: false, unlocked: true, requires: [] },
            { id: 'tecnicas-gerenciales-i', name: 'Técnicas Gerenciales I', approved: false, unlocked: false, requires: ['administracion-aplicada'] },
            { id: 'seminario-trabajo-grado-i', name: 'Seminario Trabajo Especial de Grado I', approved: false, unlocked: false, requires: ['diseno-proyectos-ii'] },
            { id: 'orientacion-pasantias-industriales', name: 'Orientación Pasantías Industriales-Empresas', approved: false, unlocked: false, requires: ['pasantias-i-oficina'] },
            { id: 'farmacia-hospitalaria-i', name: 'Farmacia Hospitalaria I', approved: false, unlocked: false, requires: ['farmacologia-ii'] },
        ],
        'Semestre 10': [
            { id: 'primeros-auxilios-ii', name: 'Primeros Auxilios II', approved: false, unlocked: false, requires: ['primeros-auxilios-i'] },
            { id: 'farmacoterapeutica-ii', name: 'Farmacoterapéutica II', approved: false, unlocked: false, requires: ['farmacoterapeutica-i'] },
            { id: 'bromatologia-ii', name: 'Bromatología II', approved: false, unlocked: false, requires: ['bromatologia'] },
            { id: 'farmacotecnia-iv', name: 'Farmacotecnia IV', approved: false, unlocked: false, requires: ['farmacotecnia-iii'] },
            { id: 'dermocosmetica-ii', name: 'Dermocosmética II', approved: false, unlocked: false, requires: ['dermocosmetica-i'] },
            { id: 'mercadotecnia-ii', name: 'Mercadotecnia II', approved: false, unlocked: false, requires: ['mercadotecnia-i'] },
            { id: 'tecnicas-gerenciales-ii', name: 'Técnicas Gerenciales II', approved: false, unlocked: true, requires: [] },
            { id: 'seminario-trabajo-grado-ii', name: 'Seminario Trabajo Especial de Grado II', approved: false, unlocked: false, requires: ['seminario-trabajo-grado-i'] },
            { id: 'trabajo-especial-grado', name: 'Trabajo Especial de Grado', approved: false, unlocked: false, requires: ['seminario-trabajo-grado-ii'] },
            { id: 'pasantias-ii-industriales', name: 'Pasantías II Industriales-Empresas', approved: false, unlocked: false, requires: ['orientacion-pasantias-industriales'] },
            { id: 'farmacia-hospitalaria-ii', name: 'Farmacia Hospitalaria II', approved: false, unlocked: false, requires: ['farmacia-hospitalaria-i'] },
        ],
    };

    // Función para renderizar la malla
    function renderMalla() {
        mallaCurricularDiv.innerHTML = ''; // Limpiar el contenido existente

        for (const semestreTitle in materiasData) {
            const semestreDiv = document.createElement('div');
            semestreDiv.classList.add('semestre');

            const h2 = document.createElement('h2');
            h2.textContent = semestreTitle;
            semestreDiv.appendChild(h2);

            materiasData[semestreTitle].forEach(materia => {
                const materiaDiv = document.createElement('div');
                materiaDiv.classList.add('materia');
                materiaDiv.setAttribute('data-id', materia.id);

                const materiaNameSpan = document.createElement('span');
                materiaNameSpan.classList.add('materia-title');
                materiaNameSpan.textContent = materia.name;
                materiaDiv.appendChild(materiaNameSpan);

                // Asignar clases de estado
                if (materia.approved) {
                    materiaDiv.classList.add('approved');
                } else if (!materia.unlocked) {
                    materiaDiv.classList.add('locked');
                }

                materiaDiv.addEventListener('click', () => toggleMateria(materia.id));
                semestreDiv.appendChild(materiaDiv);
            });
            mallaCurricularDiv.appendChild(semestreDiv);
        }
    }

    // Función para encontrar una materia por su ID
    function findMateriaById(id) {
        for (const semestre in materiasData) {
            const materia = materiasData[semestre].find(m => m.id === id);
            if (materia) return materia;
        }
        return null;
    }

    // Función para verificar si una materia está desbloqueada
    function checkUnlocks() {
        let changed = false;
        for (const semestre in materiasData) {
            materiasData[semestre].forEach(materia => {
                if (!materia.unlocked && !materia.approved) {
                    const allRequirementsMet = materia.requires.every(reqId => {
                        const requiredMateria = findMateriaById(reqId);
                        return requiredMateria && requiredMateria.approved;
                    });
                    if (allRequirementsMet) {
                        materia.unlocked = true;
                        changed = true;
                    }
                }
            });
        }
        return changed; // Retorna true si algo cambió para saber si necesitamos re-renderizar
    }

    // Función para manejar el clic en una materia
    function toggleMateria(materiaId) {
        const materia = findMateriaById(materiaId);
        if (!materia) return;

        if (materia.approved) {
            // Si la materia ya está aprobada, la "desaprueba" y bloquea las dependientes
            materia.approved = false;
            // Recursivamente desaprobar y bloquear las materias que la requieren
            revertApproval(materiaId);
        } else if (materia.unlocked) {
            // Si está desbloqueada y no aprobada, la aprueba
            materia.approved = true;
        } else {
            // Si está bloqueada, no hace nada y opcionalmente puede mostrar un mensaje
            alert(`Debes aprobar los requisitos para ${materia.name} antes de seleccionarla.`);
            return;
        }
        // Después de cada cambio, re-verificar los desbloqueos y re-renderizar
        checkUnlocks(); // Ejecutar una vez
        while (checkUnlocks()) { /* Sigue ejecutando hasta que no haya más desbloqueos */ }
        renderMalla(); // Re-renderizar la UI
        saveState(); // Guardar el estado en localStorage
    }

    // Función para revertir la aprobación de materias y sus dependencias
    function revertApproval(materiaId) {
        for (const semestre in materiasData) {
            materiasData[semestre].forEach(materia => {
                if (materia.requires.includes(materiaId) && materia.approved) {
                    materia.approved = false;
                    revertApproval(materia.id); // Llamada recursiva
                }
                // Si la materia se desaprueba, también se vuelve a bloquear si sus requisitos no están met
                if (materia.requires.includes(materiaId) && materia.unlocked) {
                    const allRequirementsMet = materia.requires.every(reqId => {
                        const requiredMateria = findMateriaById(reqId);
                        return requiredMateria && requiredMateria.approved;
                    });
                    if (!allRequirementsMet) {
                        materia.unlocked = false;
                    }
                }
            });
        }
    }


    // Función para guardar el estado en localStorage
    function saveState() {
        localStorage.setItem('mallaFarmaciaState', JSON.stringify(materiasData));
    }

    // Función para cargar el estado desde localStorage
    function loadState() {
        const savedState = localStorage.getItem('mallaFarmaciaState');
        if (savedState) {
            const loadedData = JSON.parse(savedState);
            // Actualizar materiasData con los datos cargados
            for (const semestre in loadedData) {
                if (materiasData[semestre]) { // Asegurarse de que el semestre existe
                    loadedData[semestre].forEach(loadedMateria => {
                        const originalMateria = findMateriaById(loadedMateria.id);
                        if (originalMateria) {
                            originalMateria.approved = loadedMateria.approved;
                            originalMateria.unlocked = loadedMateria.unlocked; // Cargar estado de unlocked
                        }
                    });
                }
            }
        }
        // Asegurarse de que el estado de unlocked se recalcula en caso de inconsistencias o primera carga
        // Esto es importante si el usuario borra una materia en medio y queremos que las siguientes se bloqueen
        let changedWhileLoading = false;
        do {
            changedWhileLoading = checkUnlocks(); // Recalcular desbloqueos basándose en el estado cargado
        } while (changedWhileLoading);
    }


    // Inicializar: Cargar el estado, recalcular desbloqueos y renderizar
    loadState();
    renderMalla();
});
