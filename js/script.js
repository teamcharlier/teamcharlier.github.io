document.addEventListener("DOMContentLoaded", () => {
  // Mise à jour automatique de l'année
  document.getElementById("year").textContent = new Date().getFullYear();

  const links = document.querySelectorAll(".menu-link");
  const sections = document.querySelectorAll(".section");

  // Fonction pour afficher une section donnée
  function showSection(id) {
    sections.forEach((section) => {
      if (section.id === id) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });

    links.forEach((link) => {
      if (link.getAttribute("href") === "#" + id) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Gérer les clics du menu
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      showSection(targetId);
    });
  });

  // Afficher la section de présentation au chargement
  showSection("presentation");
});
document.addEventListener("DOMContentLoaded", () => {
  const filterYear = document.getElementById("filter-year");
  const galleries = document.querySelectorAll(".galerie-year");

  filterYear.addEventListener("change", () => {
    const year = filterYear.value;

    galleries.forEach(gallery => {
      if (year === "all" || gallery.dataset.year === year) {
        gallery.style.display = "block";
      } else {
        gallery.style.display = "none";
      }
    });
  });
});

// --- Agrandissement des images de la galerie ---
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".galerie img, .Entraineurs .galerie-item img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      // Créer l'overlay
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = "9999";

      // Créer l'image agrandie
      const bigImg = document.createElement("img");
      bigImg.src = img.src;
      bigImg.alt = img.alt;
      bigImg.style.maxWidth = "90%";
      bigImg.style.maxHeight = "90%";
      bigImg.style.borderRadius = "8px";
      bigImg.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";

      // Créer le bouton de fermeture
      const closeBtn = document.createElement("span");
      closeBtn.textContent = "×";
      closeBtn.style.position = "absolute";
      closeBtn.style.top = "20px";
      closeBtn.style.left = "30px";
      closeBtn.style.fontSize = "2.5rem";
      closeBtn.style.color = "white";
      closeBtn.style.cursor = "pointer";
      closeBtn.style.fontWeight = "bold";

      // Fermer quand on clique sur la croix ou hors de l'image
      function closeOverlay() {
        document.body.removeChild(overlay);
      }
      closeBtn.addEventListener("click", closeOverlay);
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeOverlay();
      });

      // Ajouter les éléments
      overlay.appendChild(bigImg);
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);
    });
  });
});