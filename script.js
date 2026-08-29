// =========================================================
// CV INTERACTIVO · LUCÍA SNIEG
// V18
// =========================================================
//
// Las fichas del mural utilizan:
//
// <details>
// <summary>
//
// Por eso abrir/cerrar las fichas funciona sin JavaScript.
//
// Este archivo queda preparado para agregar:
// - cierre automático de otras fichas
// - animaciones
// - modal de trabajos
// - reproducción del video
// - otras interacciones
// =========================================================


document.addEventListener("DOMContentLoaded", () => {

    /*
     * -----------------------------------------------------
     * FICHAS DEL MURAL
     * -----------------------------------------------------
     */

    const fichas = document.querySelectorAll(".note-window");


    /*
     * -----------------------------------------------------
     * CIERRE AUTOMÁTICO
     *
     * Cuando se abre una ficha, cerramos las demás.
     * Así evitamos que el mural termine lleno de ventanas
     * abiertas al mismo tiempo.
     * -----------------------------------------------------
     */

    fichas.forEach((ficha) => {

        const summary = ficha.querySelector("summary");

        if (!summary) {
            return;
        }

        summary.addEventListener("click", () => {

            /*
             * Esperamos un instante para que <details>
             * actualice su estado.
             */

            setTimeout(() => {

                if (ficha.open) {

                    fichas.forEach((otraFicha) => {

                        if (otraFicha !== ficha) {
                            otraFicha.open = false;
                        }

                    });

                }

            }, 0);

        });

    });



    /*
     * -----------------------------------------------------
     * LINKS DE TRABAJOS
     *
     * Los enlaces se mantienen como enlaces normales.
     * Esto permite que funcionen incluso si JavaScript
     * está desactivado.
     * -----------------------------------------------------
     */

    const enlacesTrabajos =
        document.querySelectorAll(".papers a");


    enlacesTrabajos.forEach((enlace) => {

        enlace.addEventListener("click", () => {

            /*
             * No hacemos preventDefault.
             *
             * El navegador abre directamente el enlace
             * definido en el HTML.
             */

        });

    });



    /*
     * -----------------------------------------------------
     * VIDEO
     *
     * La zona del video queda preparada para que después
     * podamos reemplazar el contenido por:
     *
     * <iframe>
     *
     * o
     *
     * <video>
     *
     * sin cambiar el resto del mural.
     * -----------------------------------------------------
     */

    const video =
        document.querySelector(".video-placeholder");


    if (video) {

        video.addEventListener("click", () => {

            /*
             * Todavía no hacemos nada porque el archivo
             * del video aún no está incorporado.
             */

        });

    }



    /*
     * -----------------------------------------------------
     * ESCAPE
     *
     * Si alguna ficha está abierta y presionás ESC,
     * la cerramos.
     * -----------------------------------------------------
     */

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") {
            return;
        }


        fichas.forEach((ficha) => {

            ficha.open = false;

        });

    });

});
