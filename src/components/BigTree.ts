import { BaseComponent } from './../components/BaseComponent';
import { Garland } from './Garland';


export class TreeForDeco extends BaseComponent {
  constructor() {
    super('img', ['tree-deco']);
    this.element.setAttribute('draggable', 'true'); 
    this.element.setAttribute('usemap', '#imagemap');
    const treeFromStorage = localStorage.getItem('tree');
    this.element.setAttribute('src', `tree/${treeFromStorage}.png`);
  }
}

export class Area extends BaseComponent {
  constructor() {
    super('area', ['droppable']);
 
    this.element.setAttribute('coords', '23,617,249,21,477,624,413,665,353,686,232,680,100,681');
    this.element.setAttribute('shape', 'poly');
  }
}

export class ImgMap extends BaseComponent {
  constructor() {
    super('map', ['map']);
    this.element.setAttribute('name', 'imagemap');
   
    const area = new Area();
    this.element.appendChild(area.element);
  }
}

export class BigTree extends BaseComponent {
  constructor() {
    super('div', ['big-tree']);
    
    const bgFromStorage = localStorage.getItem('bg');
    this.element.style.backgroundImage = `url('bg/${bgFromStorage}.jpg')`;

    const garland = new Garland();
    this.element.appendChild(garland.element);

    const map = new ImgMap();
    this.element.appendChild(map.element);

    const tree = new TreeForDeco();
    this.element.appendChild(tree.element);
  }
}


