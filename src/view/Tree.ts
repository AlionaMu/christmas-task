import { BaseComponent } from './../components/BaseComponent';
import { GarlandSettings } from './../components/GarlandSettings';
import { TreeSettings } from '../components/TreeSettings';
import { TreeCard } from '../components/TreeCard';
import { BgCard } from '../components/BgCard';
import { FavBlock } from './../components/FavBlock';
import { ValueTitle } from './../components/SettingsValue';
import { BigTree } from './../components/BigTree';


export class Trees extends BaseComponent {
  constructor() {
    super('div', ['trees-block']);
    
    this.renderBlock();

    this.element.addEventListener('click', (event) => this.chooseTree(event));
  }
  
  renderBlock(): void {
    const treesQuantity = 6;
    for (let i = 1; i <= treesQuantity; i++) {
      const treeCard = new TreeCard(i);
      this.element.append(treeCard.element);
    }
  }

  chooseTree(event: Event) {
    const target = event.target;
    const bgArray = document.querySelectorAll('.tree-card__img');
    bgArray.forEach(elem => {
      if (elem.classList.contains('bordered')) { elem.classList.remove('bordered');}
    });
    if (target) { 
      (target as HTMLElement).classList.add('bordered');
      const number = (target as HTMLElement).dataset.num;
      const treeForDeco = document.querySelector('.tree-deco') as HTMLElement;
      if (treeForDeco && number) {
        localStorage.setItem('tree', number);
        treeForDeco.setAttribute('src', `tree/${number}.png`);
      }
    }
  }
}

export class Backgrounds extends BaseComponent {
  constructor() {
    super('div', ['bg-block']);
     
    this.renderBlock();

    this.element.addEventListener('click', (event) => this.chooseBg(event));
  }
  
  renderBlock(): void {
    for (let i = 1; i <= 9; i++) {
      const bgCard = new BgCard(i);
      this.element.append(bgCard.element);
    }
  }

  chooseBg(event: Event) {
    const target = event.target;
    const bgArray = document.querySelectorAll('.bg-card__img');
    bgArray.forEach(elem => {
      if (elem.classList.contains('bordered')) { elem.classList.remove('bordered');}
    });
    if (target) { 
      (target as HTMLElement).classList.add('bordered');
      const number = (target as HTMLElement).dataset.num;
      const bigTree = document.querySelector('.big-tree') as HTMLElement;
      if (bigTree && number) {
        localStorage.setItem('bg', number);
        bigTree.style.backgroundImage = `url('bg/${number}.jpg')`;
      }
    }
  }
}

export class ChoiceBlock extends BaseComponent {

  constructor() {
    super('div', ['choice-block']);
   
    const treeSettings = new TreeSettings();
    this.element.appendChild(treeSettings.element);

    const settingsTitle = new ValueTitle('выберите ёлку');
    this.element.appendChild(settingsTitle.element);

    const trees = new Trees();
    this.element.appendChild(trees.element);

    const bgTitle = new ValueTitle('выберите фон');
    this.element.appendChild(bgTitle.element);

    const bgs = new Backgrounds();
    this.element.appendChild(bgs.element);

    const garlandTitle = new ValueTitle('гирлянда');
    this.element.appendChild(garlandTitle.element);

    const garlandSettings = new GarlandSettings();
    this.element.appendChild(garlandSettings.element);
  }
}

export class Tree extends BaseComponent {
  constructor() {
    super('main', ['main', 'main-tree']);

    const choice = new ChoiceBlock();
    this.element.appendChild(choice.element);
    
    const tree = new BigTree();
    this.element.appendChild(tree.element);

    const favBlock = new FavBlock();
    this.element.appendChild(favBlock.element);
  }
}
