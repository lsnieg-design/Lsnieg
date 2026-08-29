/*
 * CV INTERACTIVO · LUCÍA SNIEG
 *
 * Las ventanas del mural utilizan <details>
 * y <summary> de HTML.
 *
 * No necesitan JavaScript para abrirse ni cerrarse.
 *
 * Esto hace que la interacción siga funcionando
 * aunque abras el index.html directamente desde tu PC.
 */

document.addEventListener("DOMContentLoaded", () => {

    const windows = document.querySelectorAll(".note-window");

    windows.forEach(window => {

        const summary = window.querySelector("summary");

        if (!summary) return;

        summary.addEventListener("click", () => {

            /*
             * Pequeña espera para permitir que <details>
             * actualice su estado antes de recalcular.
             */

            requestAnimationFrame(() => {

                if (window.open) {
                    window.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    });
                }

            });

        });

    });

});
