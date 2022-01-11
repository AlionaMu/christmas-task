import { BaseComponent } from './BaseComponent';
import { alphabetSort } from '../utils/alphabetSort';
import { alphabetReverseSort } from '../utils/alphabetReverseSort';
import data from './../../public/data';
import { valueSort } from '../utils/valueSort';
import { valueReverseSort } from '../utils/valueReverseSort';
import { clearStorage } from '../utils/clearStorage';


class SortTitle extends BaseComponent {
  constructor() {
    super('div', ['range-title']);

    this.element.innerHTML = 'Сортировать';
  }
}

export class SortForm extends BaseComponent {
  constructor() {
    super('form', ['settings__sort__form']);
    this.element.innerHTML = `

    <select name="sort-type" id="sort-type">
    <option selected disabled ></option>
      <option value="alphabet" selected>по названию от А до Я</option>
      <option value="alphabet-reverse">по названию от Я до А</option>
      <option value="count-up">по году выпуска по возрастанию</option>
      <option value="count-down">по году выпуска по убыванию</option>
    </select>
    `;

    this.element.onchange = (e) => this.chooseSort(e);
  }

  chooseSort(e: Event) {
    const target = e.target as HTMLInputElement;

    switch (target.value) {

      case 'alphabet':
        alphabetSort(data);
        break;

      case 'alphabet-reverse':
        alphabetReverseSort(data);
        break;

      case 'count-up':
        valueSort(data); 
        break;

      case 'count-down':
        valueReverseSort(data);
        break;
    }
  }
}

export class ResetButton extends BaseComponent {
  constructor() {
    super('button', ['sort__button', 'button']);
    this.element.innerHTML = 'сбросить фильтры';

    this.element.addEventListener('click', () => alphabetSort(data));
  }
}

export class ResetSettingsButton extends BaseComponent {
  constructor() {
    super('button', ['sort__button', 'button']);
    this.element.innerHTML = 'сбросить настройки';

    this.element.addEventListener('click', () => clearStorage());
  }
}

export class ButtonsContainer extends BaseComponent {
  constructor() {
    super('div', ['buttons-container']);
    
    const resetButton = new ResetButton();
    this.element.appendChild(resetButton.element);

    const resetSettingsButton = new ResetSettingsButton();
    this.element.appendChild(resetSettingsButton.element);
  }
}

export class SettingsSort extends BaseComponent {
  constructor() {
    super('div', ['settings__sort', 'settings__item']);

    const title = new SortTitle();
    this.element.appendChild(title.element);

    const form = new SortForm();
    this.element.appendChild(form.element);

    const buttons = new ButtonsContainer();
    this.element.appendChild(buttons.element);
  }
}
