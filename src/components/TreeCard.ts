import { BaseComponent } from './BaseComponent';


export class TreeCard extends BaseComponent {

  constructor(imageNumber: number) {
   
    super('div', ['tree-card']);
    
    this.element.innerHTML = `
      <img src="tree/${imageNumber}.png" class="tree-card__img" data-num="${imageNumber}"></img>
    `;
  }
}
