
const app = {
  init: () => {
    app.container = document.querySelector("#app");

    app.containerResolution();
    app.resolution();
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
    app.resolution = document.createElement('p');
    app.resolution.textContent = 'Développer une application mobile pour traduire les miaulements de mon chat en messages codés. ';
    parentElm = document.querySelector('#containerResolution');
    parentElm.append(app.resolution);
  },

  containerActive: () => {
    app.containerActive = document.createElement('div');
    app.containerActive.id = 'containerActive';
    app.container.append(app.containerActive);
  },

  h1Elm: () => {
    app.h1Elm = document.createElement('h1');
    app.h1Elm.textContent = 'Chiche de tenir cette résolution ?';
    parentElm = document.querySelector('#containerActive');
    parentElm.append(app.h1Elm);
  },

  buttonElm: () => {
    app.buttonElm = document.createElement('button');
    app.buttonElm.id = 'button';
    app.buttonElm.textContent = 'Résolution';
    parentElm = document.querySelector('#containerActive');
    parentElm.append(app.buttonElm);
  },

}



document.addEventListener('DOMContentLoaded', app.init)