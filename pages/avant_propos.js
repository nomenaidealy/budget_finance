// Exemple de contenu statique en attendant la base de données
/*const data = {
  texte: `
Le Ministère de l’Économie et des Finances présente le Budget des Citoyens 2025,
une version simplifiée et facilement accessible de la Loi de Finances. Ce document a
été conçu pour permettre à tous les citoyens de comprendre les grandes orientations
budgétaires de l’État.
Avec un langage clair et des explications simples, le Budget des Citoyens reflète l’engagement
du gouvernement à promouvoir la transparence et à rapprocher les citoyens de la gestion
des finances publiques. Il met en lumière les priorités économiques et sociales définies pour 2025
et de passage, met en exergue comment les ressources publiques sont utilisées pour répondre
aux besoins de la population.
Au fil des années, des efforts constants ont permis d’améliorer ce document, notamment
en simplifiant les termes complexes et en présentant les informations essentielles
comme les grandes catégories de dépenses de manière compréhensible pour tous.
Disponible en malagasy et en français, ce Budget des Citoyens sera diffusé largement
sur les plateformes numériques et dans des espaces publics dans tout Madagascar.
Ainsi, tout un chacun est sollicité de partager ce Budget.
  `
};

const container = document.getElementById('contenu');
const paragraph = document.createElement('p');
paragraph.textContent = data.texte;
paragraph.style.whiteSpace = "pre-line"; // pour garder les retours à la ligne
container.appendChild(paragraph);  */

  document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/avantpropos")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('contenu');
      const paragraph = document.createElement('p');
      paragraph.textContent = data.texte;
      paragraph.style.whiteSpace = "pre-line";
      container.appendChild(paragraph);
    })
    .catch(error => console.error("Erreur :", error));
});

