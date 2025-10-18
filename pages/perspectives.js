document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/perspectives")
    .then(reponse => reponse.json())
    .then(contenuPerspectives => {
      const conteneurTexte = document.getElementById("texte");
      const paragraphe = document.createElement("p");
      paragraphe.textContent = contenuPerspectives.texte;
      paragraphe.style.whiteSpace = "pre-line";
      conteneurTexte.appendChild(paragraphe);

      const conteneurTableaux = document.getElementById("tableaux");
      contenuPerspectives.tableaux.forEach(tableauData => {
        const titreTableau = document.createElement("h4");
        titreTableau.className = "titre-tableau";
        titreTableau.textContent = tableauData.titre;
        conteneurTableaux.appendChild(titreTableau);

        const tableau = document.createElement("table");
        tableau.className = "tableau";

        const entete = document.createElement("thead");
        const ligneEntete = document.createElement("tr");
        tableauData.header.forEach(enteteCellule => {
          const th = document.createElement("th");
          th.textContent = enteteCellule;
          ligneEntete.appendChild(th);
        });
        entete.appendChild(ligneEntete);
        tableau.appendChild(entete);

        const corpsTableau = document.createElement("tbody");
        tableauData.rows.forEach(ligneData => {
          const ligne = document.createElement("tr");
          ligneData.forEach(cellule => {
            const td = document.createElement("td");
            td.textContent = cellule;
            ligne.appendChild(td);
          });
          corpsTableau.appendChild(ligne);
        });
        tableau.appendChild(corpsTableau);

        conteneurTableaux.appendChild(tableau);
      });
    })
    .catch(erreur => console.error("Erreur lors du chargement des perspectives :", erreur));
});
