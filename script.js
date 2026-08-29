const LINKS = {
  QUIEN: "https://drive.google.com/file/d/1uzfmvuHnjkSfXG8dKDA6j7UV0y_BeW0s/view?usp=sharing",
  TIZA: "https://drive.google.com/file/d/1pmjJm0rsGT2OpOTAEBOOl25guBqm_z34/view?usp=drive_link",
  SOBERANIA: "https://drive.google.com/file/d/1-7tHcxkoQ3R5f_UJFXKKdVUMeZRt7kJI/view?usp=drive_link",
  DISCAPACIDAD: "https://drive.google.com/file/d/1bUHvt6neusN2ZezJMWmds1vpQoy_XyAL/view?usp=drive_link"
};

const home = document.getElementById("home");
const explorer = document.getElementById("explorer");
const features = [...document.querySelectorAll(".feature")];
const cards = [...document.querySelectorAll(".feature-card")];

function openExplorer(feature = "about") {
  home.classList.remove("active");
  explorer.classList.add("active");
  activateFeature(feature);
}

function activateFeature(name) {
  features.forEach(btn => btn.classList.toggle("active", btn.dataset.feature === name));
  cards.forEach(card => card.classList.toggle("visible", card.dataset.card === name));
}

document.querySelectorAll("[data-open]").forEach(btn => {
  btn.addEventListener("click", () => openExplorer(btn.dataset.open));
});

document.querySelectorAll("[data-close]").forEach(btn => {
  btn.addEventListener("click", () => {
    explorer.classList.remove("active");
    home.classList.add("active");
  });
});

features.forEach(btn => {
  btn.addEventListener("click", () => activateFeature(btn.dataset.feature));
});

document.querySelectorAll(".work-link, .papers a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const key = link.dataset.link;
    const url = LINKS[key];
    if (!url) return;
    const match = url.match(/\/d\/([^/]+)/);
    if (!match) return;
    document.getElementById("pdfFrame").src =
      `https://drive.google.com/file/d/${match[1]}/preview`;
    document.getElementById("pdfModal").hidden = false;
  });
});

document.getElementById("pdfClose").addEventListener("click", closePdf);
document.getElementById("pdfModal").addEventListener("click", e => {
  if (e.target.id === "pdfModal") closePdf();
});

function closePdf() {
  document.getElementById("pdfModal").hidden = true;
  document.getElementById("pdfFrame").src = "";
}

document.getElementById("playVideo").addEventListener("click", () => {
  alert("Este espacio está preparado para incorporar tu video de presentación.");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (!document.getElementById("pdfModal").hidden) closePdf();
    else if (explorer.classList.contains("active")) {
      explorer.classList.remove("active");
      home.classList.add("active");
    }
  }
});
