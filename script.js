const LINKS = {
  QUIEN: "https://drive.google.com/file/d/1uzfmvuHnjkSfXG8dKDA6j7UV0y_BeW0s/view?usp=sharing",
  TIZA: "https://drive.google.com/file/d/1pmjJm0rsGT2OpOTAEBOOl25guBqm_z34/view?usp=drive_link",
  SOBERANIA: "https://drive.google.com/file/d/1-7tHcxkoQ3R5f_UJFXKKdVUMeZRt7kJI/view?usp=drive_link",
  DISCAPACIDAD: "https://drive.google.com/file/d/1bUHvt6neusN2ZezJMWmds1vpQoy_XyAL/view?usp=drive_link"
};

document.querySelectorAll(".bubble").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.target);
    if (target) target.scrollIntoView({behavior:"smooth", block:"start"});
  });
});

document.querySelectorAll(".work-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const url = LINKS[link.dataset.link];
    if (!url) return;
    const match = url.match(/\/d\/([^/]+)/);
    if (!match) return;
    document.getElementById("pdfFrame").src =
      `https://drive.google.com/file/d/${match[1]}/preview`;
    document.getElementById("pdfModal").hidden = false;
  });
});

document.getElementById("pdfClose").addEventListener("click", () => {
  document.getElementById("pdfModal").hidden = true;
  document.getElementById("pdfFrame").src = "";
});

document.getElementById("pdfModal").addEventListener("click", e => {
  if (e.target.id === "pdfModal") {
    document.getElementById("pdfModal").hidden = true;
    document.getElementById("pdfFrame").src = "";
  }
});

document.getElementById("playVideo").addEventListener("click", () => {
  alert("Este espacio está preparado para incorporar tu video de presentación.");
});
