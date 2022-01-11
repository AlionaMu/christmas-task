import { BaseComponent } from './BaseComponent';
import { setDataToStorage } from './../utils/setDataToStorage';
import { getStorageData } from './../utils/getStorageData';
import { deleteDataFromStorage } from './../utils/deleteDataFromStorage';


export class ToyCard extends BaseComponent {
  el: {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
  } | undefined;

  private fav = document.querySelector('.header__result') as HTMLElement;

  constructor(el: { name: string; num: string; count: string; year: string; shape: string; color: string; size: string; }) {
   
    super('div', ['toy-card']);
    
    this.element.innerHTML = `
      <div class="toy-name">${el.name}</div>
      <div class="card-wrapper">
      <div class="toy-card__img__wrapper">
        <img src="toys/${el.num}.png" class="toy-card__img"></img>
        <div class="toy-card__info__item favorite"></div> 
      </div>
      <div class="toy-card__info__wrapper">
        <div class="toy-card__info__item">количество: ${el.count}</div>
        <div class="toy-card__info__item">год выпуска: ${el.year}</div>
        <div class="toy-card__info__item">форма: ${el.shape}</div>
        <div class="toy-card__info__item">цвет: ${el.color}</div>
        <div class="toy-card__info__item">размер: ${el.size}</div>
      </div>
      </div>
    `;

    this.element.addEventListener('click', () => this.switchFav(el.num));
  }

  switchFav(num: string) {
    let storage = getStorageData('fav');
    
    if ( this.element.classList.contains('fav') ) {
      this.element.classList.remove('fav');
      deleteDataFromStorage(storage, 'fav', num);
      storage = getStorageData('fav');
      this.fav.innerHTML = storage.length;
    } else {
      this.element.classList.add('fav');
      setDataToStorage(storage, 'fav', num);
      storage = getStorageData('fav');
      this.fav.innerHTML = storage.length;
    }
  }
}