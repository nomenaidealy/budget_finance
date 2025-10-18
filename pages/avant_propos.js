document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/avantpropos")
    .then(reponse => reponse.json())
    .then(contenuAvantPropos => {
      const conteneur = document.getElementById('contenu');
      const paragraphe = document.createElement('p');
      paragraphe.textContent = contenuAvantPropos.texte;
      paragraphe.style.whiteSpace = "pre-line"; // garde les retours à la ligne
      conteneur.appendChild(paragraphe);
    })
    .catch(erreur => console.error("Erreur lors du chargement de l'avant-propos :", erreur));
});
