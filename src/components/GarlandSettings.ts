import { BaseComponent } from './../components/BaseComponent';


class GarlandSwitchButton extends BaseComponent {
 
  private input;

  constructor() {
    super('label', ['switch']);
   
    this.element.innerHTML = `
    <input type="checkbox">
    <span class="slider round"></span>
    `;

    const input = this.element.querySelector('input');
    this.input = input as HTMLInputElement;

    if (this.input) {
      this.input.addEventListener('change', () => {
        const garlandContainer = document.querySelector('.garland-container') as HTMLElement;
        if (this.input.checked) {
          garlandContainer?.classList.toggle('hidden');
        } else {
          garlandContainer?.classList.toggle('hidden');
        }
      });
    }
  }
}
 
class SwitchText extends BaseComponent {

  constructor(text: string) {
    super('div', ['switch__text']);

    this.element.innerHTML = `${text}`;
  }
}

class SwitchContainer extends BaseComponent {

  private text;

  private button;

  constructor() {
    super('div', ['switch-container']);

    this.text = new SwitchText('Off');
    this.element.append(this.text.element);

    this.button = new GarlandSwitchButton();
    this.element.append(this.button.element);

    this.text = new SwitchText('On');
    this.element.append(this.text.element);
  }
}

export const arrGarland = [ 'pink', 'darkorange', 'blueviolet', 'chartreuse', 'multi' ];

export class GarlandBlock extends BaseComponent {
  constructor() {
    super('div', ['garland-block']);

    this.render();
  
    this.element.addEventListener('click', (e) => this.addColorClickHandler(e));
  }

  render() {
    arrGarland.forEach(item  => {
      const colorItem = document.createElement('div');
      colorItem.classList.add('garland__link_color');
      colorItem.setAttribute('id', `${item}`);
      this.element.append(colorItem);

      colorItem.style.backgroundColor = `${item}`;
      colorItem.style.animation = `${item}`;
    });
  }

  addColorClickHandler(e: MouseEvent) {
    const target = e.target as HTMLDivElement;
    const animation = target.getAttribute('id');
    const garlandContainer = document.querySelector('.garland-container') as HTMLElement;
    const garlandItemsArr = garlandContainer.querySelectorAll('.garland-item');

    garlandItemsArr.forEach(item => {
      (item as HTMLElement).style.animationName = `${animation}`;
    });
  }
}

export class GarlandSettings extends BaseComponent {
  constructor() {
    super('div', ['garland-settings']);

    const switchButton = new SwitchContainer();
    this.element.appendChild(switchButton.element);

    const block = new GarlandBlock();
    this.element.appendChild(block.element);
  }
}