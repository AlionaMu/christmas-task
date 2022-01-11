import './style.scss';
import { App } from './app';

import { Toys } from './view/Toys';
import { Tree } from './view/Tree';
import { Home } from './view/Home';
import { Footer } from './components/Footer';


const appElement = document.getElementById('app');


const initApp = () => {
  if (!localStorage.getItem('fav')) {
    const fav: string[] = [];
    localStorage.setItem('fav', JSON.stringify(fav));
  }
  if (!appElement) throw Error('App root element not found');
  new App(appElement);
  localStorage.setItem('quantity_min', '1');
  localStorage.setItem('quantity_max', '12');
  localStorage.setItem('year_min', '1940');
  localStorage.setItem('year_max', '2021');

  if (!localStorage.getItem('bg')) {
    localStorage.setItem('bg', '1');
  }
  if (!localStorage.getItem('tree')) {
    localStorage.setItem('tree', '1');
  }

  if (!localStorage.getItem('selectedColor')) {
    const selectedColor: string[] = ['white', 'yellow', 'red', 'blue', 'green'];
    localStorage.setItem('selectedColor', JSON.stringify(selectedColor));
  }
};

window.addEventListener('load', () => initApp());

export const locationResolver = (location: string) => {

  const home = new Home();
  const toys = new Toys();
  const tree = new Tree();
  const footer = new Footer();
  const main = document.querySelector('main');
  const footerElem = document.querySelector('footer') as HTMLElement;

  if (appElement && main) {  
    appElement.removeChild(main);
    appElement.removeChild(footerElem);

    switch (location) {
      case 'home':

        appElement.appendChild(home.element);
        break;
      case 'toys':
       
        appElement.appendChild(toys.element);
        break;
      case 'tree':
   
        appElement.appendChild(tree.element);
        break;
    }
    appElement.appendChild(footer.element);
  }
};
