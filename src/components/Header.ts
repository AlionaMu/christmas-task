import { BaseComponent } from './BaseComponent';
import { locationResolver } from '../index';
import { getStorageData } from './../utils/getStorageData';


class HomeLink extends BaseComponent {

  constructor() {
    super('li', ['header__menu-link']);
    this.element.setAttribute('data-link', 'home');
    this.element.innerHTML = 'home';
  }
}

class ToysLink extends BaseComponent {

  constructor() {
    super('li', ['header__menu-link']);
    this.element.setAttribute('data-link', 'toys');
    this.element.innerHTML = 'игрушки';
  }
}

class TreeLink extends BaseComponent {

  constructor() {
    super('li', ['header__menu-link']);
    this.element.setAttribute('data-link', 'tree');
    this.element.innerHTML = 'ёлка';
  }
}

class HeaderMenu extends BaseComponent {

  constructor() {
    super('ul', ['header__menu']);
 
    const homeLink = new HomeLink();
    this.element.appendChild(homeLink.element);

    const toysLink = new ToysLink();
    this.element.appendChild(toysLink.element);

    const treeLink = new TreeLink();
    this.element.appendChild(treeLink.element);
    
    this.element.addEventListener('click', (e: Event) => this.clickMenu(e));
  }

  clickMenu(e: Event) {
    const target = e.target as HTMLElement;
    if (typeof(target.dataset.link) === 'string') {locationResolver(target.dataset.link);}
  }
}

class InputField extends BaseComponent {

  constructor() {
    super('input', ['header__input']);

    this.element.setAttribute('type', 'text');
    this.element.setAttribute('placeholder', 'искать здесь');
  }
}

class InputButton extends BaseComponent {

  constructor() {
    super('span', ['header__input__button']);
  }
}

class HeaderInput extends BaseComponent {

  constructor() {
    super('form', ['header__form']);

    const inputField = new  InputField();
    this.element.appendChild(inputField.element);

    const inputButton = new  InputButton();
    this.element.appendChild(inputButton.element);
  }
}

export class FavResult extends BaseComponent {

  constructor() {
    super('div', ['header__result']);
  
    if ( getStorageData('fav').length !== 0) {
      this.element.innerHTML = getStorageData('fav').length;
    } else { this.element.innerHTML = '0'; }
  } 
}

class HeaderSearch extends BaseComponent {

  constructor() {
    super('div', ['header__search']);

    const headerInput = new  HeaderInput();
    this.element.appendChild(headerInput.element);

    const favResult = new FavResult();
    this.element.appendChild(favResult.element);
  }
}

export class Header extends BaseComponent {

  constructor() {
    super('header', ['header']);

    const headerMenu = new HeaderMenu();
    this.element.appendChild(headerMenu.element);

    const headerSearch = new HeaderSearch();
    this.element.appendChild(headerSearch.element);
  }
}
