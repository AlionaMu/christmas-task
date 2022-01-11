import { BaseComponent } from './../components/BaseComponent';
import { FavCard } from './../components/FavCard';
import data from './../../public/data'; 
import { getStorageData } from './../utils/getStorageData';
import { ValueTitle } from './../components/SettingsValue';


export class FavContainer extends BaseComponent {
 
  constructor() {
    super('div', ['fav-container']);

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
    const storage = getStorageData('fav');
    if (storage.length) {
      storage.forEach((el: string) => {
        const fav = data.find(item => item.num === el);
      
        if (fav) {
          const favCard = new FavCard(el, fav.count);
          this.element.append(favCard.element);
        }
      });
    } else {
      const FAV = 20;
      for (let i = 1; i <= FAV; i++) {
        const elem = data.find(item => item.num === i.toString());
        if (elem) {
          const favCard = new FavCard(i + '', elem.count);
          this.element.append(favCard.element);
        }
      }
    }
  }
}

export class DecoratedContainer extends BaseComponent {
  constructor() {
    super('div', ['decorated-container']);
   
  }
}

export class FavBlock extends BaseComponent {
  constructor() {
    super('div', ['fav-block']);

    const favTitle = new ValueTitle('игрушки');
    this.element.appendChild(favTitle.element);

    const container = new FavContainer();
    this.element.appendChild(container.element);

    const decoTitle = new ValueTitle('вы нарядили');
    this.element.appendChild(decoTitle.element);

    const decoContainer = new DecoratedContainer();
    this.element.appendChild(decoContainer.element);
  }
}

