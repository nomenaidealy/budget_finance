document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/recettes") 
    .then(response => response.json())
    .then(data => {
      const texteContainer = document.getElementById("texte");
      const tableauxContainer = document.getElementById("tableaux");


      const para = document.createElement("p");
      para.textContent = data.texte;
      para.style.whiteSpace = "pre-line";
      texteContainer.appendChild(para);

      
      data.figures.forEach(fig => {
        const titre = document.createElement("h5");
        titre.className = "figure-title";
        titre.textContent = fig.titre;
        tableauxContainer.appendChild(titre);

        const canvas = document.createElement("canvas");
        canvas.id = fig.id; 
        tableauxContainer.appendChild(canvas);

        
      });

      
      data.tableaux.forEach(tab => {
        const titre = document.createElement("h4");
        titre.className = "table-title";
        titre.textContent = tab.titre;
        tableauxContainer.appendChild(titre);

        const table = document.createElement("table");
        table.className = "tableau";

       
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        tab.header.forEach(h => {
          const th = document.createElement("th");
          th.textContent = h;
          trHead.appendChild(th);
        });
        thead.appendChild(trHead);
        table.appendChild(thead);

     
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
