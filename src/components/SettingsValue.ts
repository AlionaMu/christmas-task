import { BaseComponent } from './BaseComponent';
import { container } from './../view/Toys';
import { ValueSizeBlock } from './ValueSizeBlock';
import { getStorageData } from '../utils/getStorageData';
import { setDataToStorage } from '../utils/setDataToStorage';
import { deleteDataFromStorage } from '../utils/deleteDataFromStorage';
import data from './../../public/data';
import { filter } from '../utils/filter';


export class ValueTitle extends BaseComponent {
  constructor(value: string) {
    super('div', ['range-title']);

    this.element.innerHTML = `${value}`;
  }
}

class ValueFormBlock extends BaseComponent {
  constructor() {
    super('div', ['value-block']);
    
    this.element.innerHTML = `
      <a href="#" class="value-form__link">
        <img src="icons/bell.svg" class="value-form__img">
      </a>
      <a href="#" class="value-form__link">
        <img src="icons/pine.svg" class="value-form__img">
      </a>
      <a href="#" class="value-form__link">
        <img src="icons/snowflake.svg" class="value-form__img">
      </a>
      <a href="#" class="value-form__link">
        <img src="icons/bird_toy.svg" class="value-form__img">
      </a>
      <a href="#" class="value-form__link">
        <img src="icons/ball.svg" class="value-form__img">
      </a>
      <a href="#" class="value-form__link">
        <img src="icons/star.svg" class="value-form__img">
      </a>
    `;
  
    this.element.addEventListener('click', (e) => this.addValueClickHandler(e));
  }

  addValueClickHandler(e: MouseEvent) {
    console.log(e);
  }
}

export const enum Colors {
  white = 'белый',
  yellow = 'желтый',
  red = 'красный',
  blue = 'синий',
  green = 'зелёный',
}

export const arrColors = [
  {
    eng: 'white',
    ru: Colors.white,
  },
  {
    eng: 'yellow',
    ru: Colors.yellow,
  },
  {
    eng: 'red',
    ru: Colors.red,
  },
  {
    eng: 'blue',
    ru: Colors.blue,
  },
  {
    eng: 'green',
    ru: Colors.green,
  },
];

class ValueColorBlock extends BaseComponent {

  constructor() {
    super('div', ['value-block_color', 'value-block']);

    this.renderColors();
  
    this.element.addEventListener('click', (e) => this.addValueClickHandler(e));
  }

  renderColors() {
    arrColors.forEach(item => {
      const colorItem = document.createElement('div');
      colorItem.classList.add('value-form__link_color');
      this.element.append(colorItem);

      const selected = document.createElement('img');
      selected.classList.add('selected-color');
      selected.classList.add('hidden');
      colorItem.append(selected);
      selected.style.backgroundImage = 'url(icons/select.svg)';

      colorItem.style.backgroundColor = `${item.eng}`;
    });
  }

  addValueClickHandler(e: MouseEvent) {
    const target = e.target as HTMLDivElement;
    
    if ( target.classList.contains('selected-color') ) {
      const parent: Node | null = (target as Node).parentElement;

      if ( target.classList.contains('hidden')) {
        target.classList.remove('hidden');
        
        if (parent) { this.setSelectedColors((parent as HTMLElement).style.backgroundColor);}
      } else {
        target.classList.add('hidden');
        this.unsetSelectedColors((parent as HTMLElement).style.backgroundColor);
      }
    } else {
      const targetNode = e.target as Node;
      const img = targetNode.firstChild as HTMLElement;
   
      if ( img.classList.contains('hidden')) {
        img.classList.remove('hidden');
        this.setSelectedColors(target.style.backgroundColor);
      } else {
        img.classList.add('hidden');
        this.unsetSelectedColors(target.style.backgroundColor);
      }
    }
  }

  setSelectedColors(color: string) {
    const storage = getStorageData('selectedColor');
    if (!storage.includes(color)) {
      setDataToStorage(storage, 'selectedColor', color);
    } else { return; }

    filter();
  }

  unsetSelectedColors(color: string) {
    const storage = getStorageData('selectedColor');
    deleteDataFromStorage(storage, 'selectedColor', color);
    filter();
  }
}

class IsFavorite extends BaseComponent {
  constructor() {
    super('div', ['value-block', 'value-block_fav']);
    
    this.element.innerHTML = `
    <input type="checkbox" id="scales" name="scales"
           checked>
    <label for="scales">Любимые</label>
    `;
  }
}

export class SettingsValue extends BaseComponent {
  constructor() {
    super('div', ['settings__value', 'settings__item']);

    const titleForm = new ValueTitle('форма');
    this.element.appendChild(titleForm.element);

    const valueFormBlock = new ValueFormBlock();
    this.element.appendChild(valueFormBlock.element);

    const titleColor = new ValueTitle('цвет'); 
    this.element.appendChild(titleColor.element);

    const valueColorBlock = new ValueColorBlock();
    this.element.appendChild(valueColorBlock.element);

    const titleSize = new ValueTitle('размер');
    this.element.appendChild(titleSize.element);

    const valueSizeBlock = new ValueSizeBlock();
    this.element.appendChild(valueSizeBlock.element);

    const fav = new IsFavorite();
    this.element.appendChild(fav.element);
  }
}


