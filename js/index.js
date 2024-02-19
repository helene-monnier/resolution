// import resolutions from ('../data/resolutions');
const resolutions = [
  {
      id: 1,
      texte: 'Collectionner les chaussettes orphelines et organiser une cérémonie annuelle pour leur rendre hommage.'
  },
  {
      id: 2,
      texte: 'Devenir un expert en jonglage avec des objets de la vie quotidienne.'
  },
  {
      id: 3,
      texte: 'Savoir jouer la Valse d’Amélie au piano.'
  },
  {
      id: 4,
      texte: 'Organiser une compétition de chasse aux trésors dans ma ville, avec des énigmes cachées dans les endroits les plus insolites.'
  },
  {
      id: 5,
      texte: 'Apprendre quelque chose de nouveau chaque mois.'
  },
  {
      id: 6,
      texte: 'Consacrer du temps à la méditation ou à la pleine conscience'
  },
  {
      id: 7,
      texte: 'Lire au moins un livre par mois pour nourrir mon esprit.'
  },
  {
      id: 8,
      texte: 'Réduire ma consommation de viande.'
  },
  {
      id: 9,
      texte: 'Organiser une soirée cinéma en regardant uniquement des films des années 80 en mangeant des snacks cosmiques.'
  },
  {
      id: 10,
      texte: 'Avoir un setup incroyable.'
  },
  {
      id: 11,
      texte: 'Développer une application mobile pour traduire les miaulements de mon chat en messages codés.'
  },
  {
      id: 12,
      texte: 'Faire un projet d’apothéose qui déchire.'
  },
  {
      id: 13,
      texte: 'Créer un portfolio pour présenter mes compétences'
  },
  {
      id: 14,
      texte: 'Participer à des hackathons pour résoudre des problèmes technologiques intéressants.'
  },
  {
      id: 15,
      texte: 'Suivre des cours en ligne pour me tenir au courant des dernières tendances et technologies.'
  },
  {
      id: 16,
      texte: 'Obtenir mon titre pro'
  },
  {
      id: 17,
      texte: 'Trouver une entreprise sympa pour faire CDA en contrat de pro'
  },
];

const app = {
  init: () => {
    app.container = document.querySelector("#app");

    app.containerResolution();
    app.containerActive();
    app.h1Elm();
    app.buttonElm();
  },

  containerResolution: () => {
    app.containerReso = document.createElement('div');
    app.containerReso.id = 'containerResolution';
    app.container.append(app.containerReso)
  },

  resolution: () => {
    const randomIndex = Math.floor(Math.random() * resolutions.length);
    const randomResolution = resolutions[randomIndex];
    app.resolutionElm = document.createElement('p');
    app.resolutionElm.textContent = randomResolution.texte;
    app.resolutionElm.classList.add('resolution-item'); 
    parentElm = document.querySelector('#containerResolution');
    parentElm.append(app.resolutionElm);
  },

  containerActive: () => {
    app.containerActive = document.createElement('div');
    app.containerActive.id = 'containerActive';
    app.container.append(app.containerActive);
  },

  h1Elm: () => {
    app.h1Elm = document.createElement('h1');
    app.h1Elm.textContent = 'Découvre ta nouvelle résolution';
    parentElm = document.querySelector('#containerActive');
    parentElm.append(app.h1Elm);
  },

  buttonElm: () => {
    app.buttonElm = document.createElement('button');
    app.buttonElm.id = 'button';
    app.buttonElm.textContent = 'Résolution';
    parentElm = document.querySelector('#containerActive');
    parentElm.append(app.buttonElm);

    // écouteur d'évent au click sur le button
    app.buttonElm.addEventListener('click', () => {
      if (app.resolutionElm) {
        app.resolutionElm.remove();
      }
      app.resolution();
    })
  },

}

document.addEventListener('DOMContentLoaded', app.init)