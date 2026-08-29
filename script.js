const LINKS = {
    SOBERANIA:
        "https://drive.google.com/file/d/1-7tHcxkoQ3R5f_UJFXKKdVUMeZRt7kJI/view?usp=drive_link",

    DISCAPACIDAD:
        "https://drive.google.com/file/d/1bUHvt6neusN2ZezJMWmds1vpQoy_XyAL/view?usp=drive_link",

    QUIEN:
        "https://drive.google.com/file/d/1uzfmvuHnjkSfXG8dKDA6j7UV0y_BeW0s/view?usp=sharing",

    TIZA:
        "https://drive.google.com/file/d/1pmjJm0rsGT2OpOTAEBOOl25guBqm_z34/view?usp=drive_link"
};


/* ============================================================
   PANELES
============================================================ */

const panels = [
    ...document.querySelectorAll(".content-panel")
];

const menu = [
    ...document.querySelectorAll(".menu-item")
];

const triggers = [
    ...document.querySelectorAll("[data-panel]")
];

const stage =
    document.querySelector(".content-panel-wrap");


/* ============================================================
   MOSTRAR PANEL
============================================================ */

function showPanel(id, scroll = false) {

    panels.forEach(panel => {

        panel.classList.toggle(
            "active",
            panel.id === `panel-${id}`
        );

    });


    menu.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.panel === id
        );

    });


    /*
     * En pantallas chicas llevamos al usuario
     * hasta el contenido seleccionado.
     */

    if (
        scroll &&
        window.innerWidth < 1000 &&
        stage
    ) {

        stage.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}



/* ============================================================
   BOTONES / CÁPSULAS
============================================================ */

triggers.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const panel =
                button.dataset.panel;

            showPanel(
                panel,
                true
            );


            /*
             * Si el botón corresponde al video,
             * llevamos a la zona de presentación.
             */

            if (
                button.classList.contains(
                    "video-cta"
                )
            ) {

                const detail =
                    document.getElementById(
                        "detail"
                    );

                if (detail) {

                    detail.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        }
    );

});



/* ============================================================
   CERRAR PANEL
============================================================ */

const panelClose =
    document.getElementById(
        "panelClose"
    );


if (panelClose) {

    panelClose.addEventListener(
        "click",
        () => {

            const detail =
                document.getElementById(
                    "detail"
                );

            if (detail) {

                detail.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

}



/* ============================================================
   TRABAJOS ESCRITOS / PDF
============================================================ */

document
    .querySelectorAll(".pub")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const url =
                    LINKS[
                        button.dataset.drive
                    ];


                if (!url) {
                    return;
                }


                /*
                 * Extraemos el ID del archivo
                 * desde la URL de Google Drive.
                 */

                const match =
                    url.match(
                        /\/d\/([^/]+)/
                    );


                if (!match) {
                    return;
                }


                const pdfFrame =
                    document.getElementById(
                        "pdfFrame"
                    );

                const pdfModal =
                    document.getElementById(
                        "pdfModal"
                    );


                if (!pdfFrame || !pdfModal) {
                    return;
                }


                pdfFrame.src =
                    `https://drive.google.com/file/d/${match[1]}/preview`;


                pdfModal.hidden = false;

            }
        );

    });



/* ============================================================
   CERRAR PDF
============================================================ */

const pdfClose =
    document.getElementById(
        "pdfClose"
    );


if (pdfClose) {

    pdfClose.addEventListener(
        "click",
        () => {

            const pdfModal =
                document.getElementById(
                    "pdfModal"
                );

            const pdfFrame =
                document.getElementById(
                    "pdfFrame"
                );


            if (pdfModal) {
                pdfModal.hidden = true;
            }


            if (pdfFrame) {
                pdfFrame.src = "";
            }

        }
    );

}



/* ============================================================
   CERRAR PDF HACIENDO CLIC AFUERA
============================================================ */

const pdfModal =
    document.getElementById(
        "pdfModal"
    );


if (pdfModal) {

    pdfModal.addEventListener(
        "click",
        event => {

            if (
                event.target.id ===
                "pdfModal"
            ) {

                pdfModal.hidden = true;


                const pdfFrame =
                    document.getElementById(
                        "pdfFrame"
                    );


                if (pdfFrame) {
                    pdfFrame.src = "";
                }

            }

        }
    );

}



/* ============================================================
   VIDEO
============================================================ */

const playVideo =
    document.getElementById(
        "playVideo"
    );


if (playVideo) {

    playVideo.addEventListener(
        "click",
        () => {

            alert(
                "Este espacio está listo para incorporar tu video de presentación."
            );

        }
    );

}



/* ============================================================
   RELOJ
============================================================ */

function clock() {

    const clockElement =
        document.getElementById(
            "clock"
        );


    if (!clockElement) {
        return;
    }


    clockElement.textContent =
        new Date().toLocaleTimeString(
            "es-AR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

}


clock();


setInterval(
    clock,
    30000
);
