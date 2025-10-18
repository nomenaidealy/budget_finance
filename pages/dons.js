document.addEventListener("DOMContentLoaded", () => {
  const zoneContenu = document.getElementById("contenu");

  fetch("http://localhost:3000/api/dons")
    .then(reponse => {
      if (!reponse.ok) {
        throw new Error("Erreur réseau : " + reponse.status);
      }
      return reponse.json();
    })
    .then(informations => {
      
      const paragrapheDescription = document.createElement("p");
      paragrapheDescription.textContent = informations.description;
      paragrapheDescription.style.whiteSpace = "pre-line";
      zoneContenu.appendChild(paragrapheDescription);

     
      const titreDuTableau = document.createElement("h2");
      titreDuTableau.className = "titre-tableau";
      titreDuTableau.textContent = informations.titreTableau;
      zoneContenu.appendChild(titreDuTableau);

     
      const tableauDons = document.createElement("table");
      tableauDons.className = "tableau";

     
      const enTete = document.createElement("thead");
      const ligneEnTete = document.createElement("tr");
      informations.entetes.forEach(nomColonne => {
        const celluleEntete = document.createElement("th");
        celluleEntete.textContent = nomColonne;
        ligneEnTete.appendChild(celluleEntete);
      });
      enTete.appendChild(ligneEnTete);
      tableauDons.appendChild(enTete);

     
      const corpsTableau = document.createElement("tbody");
      informations.lignes.forEach(ligne => {
        const ligneTableau = document.createElement("tr");
        ligne.forEach(valeurCellule => {
          const cellule = document.createElement("td");
          cellule.textContent = valeurCellule;
          ligneTableau.appendChild(cellule);
        });
        corpsTableau.appendChild(ligneTableau);
      });
      tableauDons.appendChild(corpsTableau);

      zoneContenu.appendChild(tableauDons);
    })
    .catch(erreur => {
      console.error("Erreur lors du chargement des dons :", erreur);
      zoneContenu.textContent = "Impossible de charger les données pour le moment.";
    });
});
