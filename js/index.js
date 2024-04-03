const pranks = [
  {
      id: 1,
      text: 'Aller dans les paramètres de l\'ordi et inverser le sens de l\'écran.'
  },
  {
      id: 2,
      text: 'Modifier la disposition des icones du bureau.'
  },
  {
      id: 3,
      text: 'Modifier la langue du clavier.'
  },
  {
      id: 4,
      text: 'Un petit bout de scotch sur la lentille de la souris. Classique mais efficace.'
  },
  {
      id: 5,
      text: 'Modifier l\'icône du pointeur.'
  },
  {
      id: 6,
      text: 'Faire du pixel art sur les fenêtres avec des post-it.'
  },
  {
      id: 7,
      text: 'Modifier la disposition des bureaux dans l\'open space.'
  },
  {
      id: 8,
      text: 'Créez de faux "tickets de stationnement" avec des montants exorbitants et placez-les sous les essuie-glaces des voitures de vos collègues. Faites attention aux détails pour qu\'ils aient l\'air bien réels '
  },
  {
      id: 9,
      text: 'Mettre le clavier en qwerty.'
  },
  {
      id: 10,
      text: 'Commenter tout le code avec des blagues de dev.'
  },
  {
      id: 11,
      text: 'Dire "Okayyy" à chaque fois que quelqu\'un dit "OK" dans une conversation.'
  },
  {
      id: 12,
      text: 'Demander au client d\'ajouter des fonctionnalités inutiles. Attention à ne pas lui donner de mauvaises idées toutefois ... '
  }
];

const app = {
  init: () => {
    app.container = document.querySelector("#app");

    app.containerPrank();
    app.containerActive();
    app.h1Elm();
    app.buttonElm();
  },

  containerPrank: () => {
    app.containerP = document.createElement('div');
    app.containerP.id = 'containerPrank';
    app.container.append(app.containerP)
  },

  prank: () => {
    const randomIndex = Math.floor(Math.random() * pranks.length);
    const randomPrank = pranks[randomIndex];
    app.prankElm = document.createElement('p');
    app.prankElm.textContent = randomPrank.text;
    app.prankElm.classList.add('prank-item'); 
    parentElm = document.querySelector('#containerPrank');
    parentElm.append(app.prankElm);
  },

  containerActive: () => {
    app.containerActive = document.createElement('div');
    app.containerActive.id = 'containerActive';
    app.container.append(app.containerActive);
  },

  h1Elm: () => {
    app.h1Elm = document.createElement('h1');
    app.h1Elm.textContent = 'En rade d\'idée pour le 1er avril ?';
    parentElm = document.querySelector('#containerActive');
    parentElm.append(app.h1Elm);
  },

  buttonElm: () => {
    app.buttonElm = document.createElement('button');
    app.buttonElm.id = 'button';
    app.buttonElm.textContent = 'Cliquer ici pour une blague !';
    parentElm = document.querySelector('#containerActive');
    parentElm.append(app.buttonElm);

    // écouteur d'évent au click sur le button
    app.buttonElm.addEventListener('click', () => {
      if (app.prankElm) {
        app.prankElm.remove();
      }
      app.prank();
    })
  },

}

document.addEventListener('DOMContentLoaded', app.init)