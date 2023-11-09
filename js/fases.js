document.getElementById("before").addEventListener("click", function () {
    let currentPhase = document.querySelector(".fases_body-show");
    if (currentPhase) {
        let previousPhase = currentPhase.previousElementSibling;
        if (previousPhase) {
            currentPhase.classList.remove("fases_body-show");
            previousPhase.classList.add("fases_body-show");
        } else {
            // Si no hay un elemento anterior, retrocede al último elemento
            let phases = document.querySelectorAll(".fases-body");
            let lastPhase = phases[phases.length - 1];
            if (lastPhase) {
                currentPhase.classList.remove("fases_body-show");
                lastPhase.classList.add("fases_body-show");
            }
        }
    }
});

document.getElementById("next").addEventListener("click", function () {
    let currentPhase = document.querySelector(".fases_body-show");
    if (currentPhase) {
        let nextPhase = currentPhase.nextElementSibling;
        if (nextPhase) {
            currentPhase.classList.remove("fases_body-show");
            nextPhase.classList.add("fases_body-show");
        } else {
            // Si no hay un elemento siguiente, avanza al primer elemento directamente
            let phases = document.querySelectorAll(".fases-body");
            let firstPhase = phases[0];
            if (firstPhase) {
                currentPhase.classList.remove("fases_body-show");
                firstPhase.classList.add("fases_body-show");
            }
        }
    }
});



