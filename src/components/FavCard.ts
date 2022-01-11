import { BaseComponent } from './BaseComponent';
import { mouseEventHandler } from './../utils/dragg'; 


export class FavCardCount extends BaseComponent {

  constructor(num: string) {
   
    super('span', ['fav-card__count']);
    
    this.element.innerHTML = `${num}`;
  }
}

export class FavImg extends BaseComponent {

  constructor(num: string, i: number) {
   
    super('img', ['fav-card__img']);
    
    this.element.setAttribute('src', `toys/${num}.png`);
    this.element.setAttribute('alt', 'fav');
    this.element.setAttribute('draggable', 'true');
    this.element.setAttribute('data-num', `${num}`);
    this.element.setAttribute('id', `fav-${num}-${i}`); 
    
    this.element.addEventListener('mousedown', (event) => mouseEventHandler(event));
  }
}

export class FavCard extends BaseComponent {

  private count;

  constructor(num: string, count: string) {
   
    super('div', ['fav-card', 'droppable']);
    
    this.renderFavCards(num, count);

    this.count = new FavCardCount(count);
    this.element.append(this.count.element);
  }

  renderFavCards(num: string, count: string) {
    for ( let i = 0; i < +count; i++) {
      const img = new FavImg(num, i);
      this.element.append(img.element);
    }
  }
}
