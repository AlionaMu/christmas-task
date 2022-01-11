import { BaseComponent } from './BaseComponent';


export class BgCard extends BaseComponent {

  constructor(imageNumber: number) {
   
    super('div', ['bg-card']);
    
    this.element.innerHTML = `
      <img src="bg/${imageNumber}.jpg" class="bg-card__img" data-num="${imageNumber}"></img>
    `;
  }
}