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