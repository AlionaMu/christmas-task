import { BaseComponent } from './../components/BaseComponent';
import { locationResolver } from '../index';


export class HomeButton extends BaseComponent {
  constructor() {
    super('a', ['home-button']);

    this.element.innerHTML = `
    Начать
    `;

    this.element.addEventListener('click', () => locationResolver('toys'));
  }
}

export class Title extends BaseComponent {
  constructor() {
    super('div', ['title']);

    this.element.innerHTML = `
    Помогите бабушке нарядить елку
    `;
  }
}

export class HomeContainer extends BaseComponent {
  constructor() {
    super('div', ['home']);

    const title = new Title();
    this.element.appendChild(title.element);

    const homeButton = new HomeButton();
    this.element.appendChild(homeButton.element);
  }
}

export class Home extends BaseComponent {
  constructor() {
    super('main', ['main']);

    const homeContainer = new HomeContainer();
    this.element.appendChild(homeContainer.element);
  }
}