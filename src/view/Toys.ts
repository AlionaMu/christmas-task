import { BaseComponent } from './../components/BaseComponent';
import data from './../../public/data'; 
import { SettingsSort } from './../components/SettingsSort';
import { SettingsValue } from './../components/SettingsValue';
import { ToyCard }  from './../components/ToyCard';

import { filter }  from './../utils/filter';


export class RangeQuantityTitle extends BaseComponent {
  constructor() {
    super('div', ['range-title']);

    this.element.innerHTML = 'Количество экземпляров';
  }
}

export class SettingsRangeQuantity extends BaseComponent {

  lower: HTMLInputElement;

  upper: HTMLInputElement;

  wrapper: HTMLDivElement;

  rangeMin: HTMLDivElement;

  rangeMax: HTMLDivElement;

  rangeInfoWrapper: HTMLDivElement;

  constructor() {
    super('div', ['settings__range__quantity-wrapper']);

    const titleQuantity = new RangeQuantityTitle();
    this.element.appendChild(titleQuantity.element);

    const rangeInfoWrapper = document.createElement('div');
    this.rangeInfoWrapper = rangeInfoWrapper;
    this.rangeInfoWrapper.classList.add('range-info-wrapper');

    const rangeMin = document.createElement('div');
    this.rangeMin = rangeMin;
    this.rangeMin.classList.add('range_min');
    this.rangeMin.innerText = '1';

    const rangeMax = document.createElement('div');
    this.rangeMax = rangeMax;
    this.rangeMax.classList.add('range_max');
    this.rangeMax.innerText = '12';

    const wrapper = document.createElement('div');
    this.wrapper = wrapper;
    this.wrapper.classList.add('range__wrapper');

    const lower = document.createElement('input');
    this.lower = lower;

    this.lower.setAttribute('type', 'range');
    this.lower.setAttribute('id', 'lower');
    this.lower.setAttribute('min', '0');
    this.lower.setAttribute('max', '12');
    this.lower.setAttribute('value', '0');

    const upper = document.createElement('input');
    this.upper = upper;

    this.upper.setAttribute('type', 'range');
    this.upper.setAttribute('id', 'upper');
    this.upper.setAttribute('min', '0');
    this.upper.setAttribute('max', '12');
    this.upper.setAttribute('value', '12');

    this.wrapper.append(this.lower);
    this.wrapper.append(this.upper);

    this.rangeInfoWrapper.append(this.rangeMin);
    this.rangeInfoWrapper.append(this.rangeMax);

    this.element.append(this.rangeInfoWrapper);
    this.element.append(this.wrapper);

    this.upper.oninput = () => {
      const upperVal = (this.upper as HTMLInputElement).value;
      this.setUpperValue(upperVal);
    };
 
    this.lower.oninput = () => {
      const lowerVal = (this.lower as HTMLInputElement).value;
      this.setLowerValue(lowerVal);
    };
  }

  setUpperValue(upperVal: string) {
    (this.rangeMax as HTMLDivElement).innerText = upperVal;
    localStorage.setItem('quantity_max', `${upperVal}`);
    filter();
  }

  setLowerValue(lowerVal: string) {
    (this.rangeMin as HTMLDivElement).innerText = lowerVal;
    localStorage.setItem('quantity_min', `${lowerVal}`);
    filter();
  }
}

export class RangeYearTitle extends BaseComponent {
  constructor() {
    super('div', ['range-title']);

    this.element.innerHTML = 'Год выпуска';
  }
}

export class SettingsRangeYear extends BaseComponent {

  lower: HTMLInputElement;

  upper: HTMLInputElement;

  wrapper: HTMLDivElement;

  rangeMin: HTMLDivElement;

  rangeMax: HTMLDivElement;

  rangeInfoWrapper: HTMLDivElement;

  constructor() {
    super('div', ['settings__range__year-wrapper']);

    const titleYear = new RangeYearTitle();
    this.element.appendChild(titleYear.element);

    const rangeInfoWrapper = document.createElement('div');
    this.rangeInfoWrapper = rangeInfoWrapper;
    this.rangeInfoWrapper.classList.add('range-info-wrapper');

    const rangeMin = document.createElement('div');
    this.rangeMin = rangeMin;
    this.rangeMin.classList.add('range_min');
    this.rangeMin.classList.add('year_min');
    this.rangeMin.innerText = '1940';

    const rangeMax = document.createElement('div');
    this.rangeMax = rangeMax;
    this.rangeMax.classList.add('range_max');
    this.rangeMax.classList.add('year_max');
    this.rangeMax.innerText = '2021';

    const wrapper = document.createElement('div');
    this.wrapper = wrapper;
    this.wrapper.classList.add('range__wrapper');

    const lower = document.createElement('input');
    this.lower = lower;

    this.lower.setAttribute('type', 'range');
    this.lower.setAttribute('id', 'lower');
    this.lower.setAttribute('min', '1940');
    this.lower.setAttribute('max', '2021');
    this.lower.setAttribute('value', '1940');

    const upper = document.createElement('input');
    this.upper = upper;

    this.upper.setAttribute('type', 'range');
    this.upper.setAttribute('id', 'upper');
    this.upper.setAttribute('min', '1940');
    this.upper.setAttribute('max', '2021');
    this.upper.setAttribute('value', '2021');

    this.wrapper.append(this.lower);
    this.wrapper.append(this.upper);

    this.rangeInfoWrapper.append(this.rangeMin);
    this.rangeInfoWrapper.append(this.rangeMax);

    this.element.append(this.rangeInfoWrapper);
    this.element.append(this.wrapper);

    this.upper.oninput = () => {
      const upperVal = (this.upper as HTMLInputElement).value;
      this.setUpperValue(upperVal);
    };
 
    this.lower.oninput = () => {
      const lowerVal = (this.lower as HTMLInputElement).value;
      this.setLowerValue(lowerVal);
    };
  }

  setUpperValue(upperVal: string) {
    (this.rangeMax as HTMLDivElement).innerText = upperVal;
    localStorage.setItem('year_max', `${upperVal}`);
    filter();
  }

  setLowerValue(lowerVal: string) {
    (this.rangeMin as HTMLDivElement).innerText = lowerVal;
    localStorage.setItem('year_min', `${lowerVal}`);
    filter();
  }
}

export class SettingsRange extends BaseComponent {
  constructor() {
    super('div', ['settings__range', 'settings__item']);

    const rangeQuantity = new SettingsRangeQuantity();
    this.element.appendChild(rangeQuantity.element);

    const rangeYear = new SettingsRangeYear();
    this.element.appendChild(rangeYear.element);
  }
}

export class Settings extends BaseComponent {
  constructor() {
    super('div', ['settings']);
 
    const settingsSort = new SettingsSort();
    this.element.appendChild(settingsSort.element);

    const settingsValue = new SettingsValue();
    this.element.appendChild(settingsValue.element);

    const settingsRange = new SettingsRange();
    this.element.appendChild(settingsRange.element);
  }
}

export class ToysContainer extends BaseComponent {
  constructor() {
    super('div', ['toys__container']);
   
    this.renderBlock(data);
  }

  renderBlock(data:{
    num: string,
    name: string,
    count: string
    year: string,
    shape: string,
    color: string,
    size: string,
    favorite: boolean
  }[]): void {
  
    data.forEach((el) => {
      const toyCard = new ToyCard(el);
      this.element.append(toyCard.element);
    });
  }

  rerender(newData:{
    num: string,
    name: string,
    count: string
    year: string,
    shape: string,
    color: string,
    size: string,
    favorite: boolean
  }[]): void {
    this.element.innerHTML = '';
    newData.forEach((el) => {
      const toyCard = new ToyCard(el);
      this.element.append(toyCard.element);
    });
    console.log('container', newData.length);
  }
}

export const container = new ToysContainer();

export class Toys extends BaseComponent {
  constructor() {
    super('main', ['main']);

    const settings = new Settings();
    this.element.appendChild(settings.element);
    
    this.element.appendChild(container.element);
  }
}
