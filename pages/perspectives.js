document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/perspectives")
    .then(response => response.json())
    .then(data => {
      // Texte descriptif
      const texteContainer = document.getElementById("texte");
      const paragraph = document.createElement("p");
      paragraph.textContent = data.texte;
      paragraph.style.whiteSpace = "pre-line";
      texteContainer.appendChild(paragraph);

      // Tableaux
      const tableauxContainer = document.getElementById("tableaux");
      data.tableaux.forEach(tab => {
        // Titre
        const titre = document.createElement("h4");
        titre.className = "table-title";
        titre.textContent = tab.titre;
        tableauxContainer.appendChild(titre);

        // Tableau
        const table = document.createElement("table");
        table.className = "tableau";

        // Header
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        tab.header.forEach(h => {
          const th = document.createElement("th");
          th.textContent = h;
          trHead.appendChild(th);
        });
        thead.appendChild(trHead);
        table.appendChild(thead);

        // Body
        const tbody = document.createElement("tbody");
        tab.rows.forEach(row => {
          const tr = document.createElement("tr");
          row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        tableauxContainer.appendChild(table);
      });
    })
    .catch(error => console.error("Erreur lors du chargement de l'API :", error));
});
