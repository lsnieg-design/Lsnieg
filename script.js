// =========================================================
// LUCÍA SNIEG · CV INTERACTIVO
// Interacción de las ventanas del mural
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const fichas = Array.from(
        document.querySelectorAll("details.note-window")
    );

    // Abrir una ficha cierra automáticamente las demás.
    fichas.forEach((ficha) => {

        ficha.addEventListener("toggle", () => {

            if (!ficha.open) {
                return;
            }

            fichas.forEach((otraFicha) => {

                if (otraFicha !== ficha) {
                    otraFicha.open = false;
                }

            });

            // Lleva la ventana abierta a una zona visible del mural.
            requestAnimationFrame(() => {
                ficha.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "nearest"
                });
            });

        });

    });


    // Escape cierra la ventana abierta.
    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") {
            return;
        }

        fichas.forEach((ficha) => {
            ficha.open = false;
        });

    });

});
