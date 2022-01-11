import { BaseComponent } from './../components/BaseComponent'; 


export const enum GarlandColors {
  multi = 'multi',
  yellow = 'yellow',
  red = 'red',
  blue = 'blue',
  green = 'green',
}

export class Garland extends BaseComponent {
  constructor() {
    super('div', ['garland-container', 'hidden']);
      
    this.element.innerHTML = `
        <ul class="garland-list"  style="width: 125px; height: 135px;">
          <li class="garland-item" style="transform: rotate(68deg) translate(45px) rotate(-68deg);"></li>
          <li class="garland-item" style="transform: rotate(80deg) translate(45px) rotate(-80deg);"></li>
          <li class="garland-item" style="transform: rotate(92deg) translate(45px) rotate(-92deg);"></li>
          <li class="garland-item" style="transform: rotate(104deg) translate(45px) rotate(-104deg);"></li>
          <li class="garland-item" style="transform: rotate(116deg) translate(45px) rotate(-116deg);"></li>
        </ul>
        <ul class="garland-list"  style="width: 225px; height: 225px;">
          <li class="garland-item" style="transform: rotate(63deg) translate(65px) rotate(-63deg);"></li>
          <li class="garland-item" style="transform: rotate(73deg) translate(65px) rotate(-73deg);"></li>
          <li class="garland-item" style="transform: rotate(83deg) translate(65px) rotate(-83deg);"></li>
          <li class="garland-item" style="transform: rotate(93deg) translate(65px) rotate(-93deg);"></li>
          <li class="garland-item" style="transform: rotate(103deg) translate(65px) rotate(-103deg);"></li>
          <li class="garland-item" style="transform: rotate(113deg) translate(65px) rotate(-113deg);"></li>
          <li class="garland-item" style="transform: rotate(123deg) translate(65px) rotate(-123deg);"></li>
        </ul>
        <ul class="garland-list"  style="width: 325px; height: 325px;">
        
          <li class="garland-item" style="transform: rotate(64deg) translate(85px) rotate(-64deg);"></li>
          <li class="garland-item" style="transform: rotate(72deg) translate(85px) rotate(-72deg);"></li>
          <li class="garland-item" style="transform: rotate(80deg) translate(85px) rotate(-80deg);"></li>
          <li class="garland-item" style="transform: rotate(88deg) translate(85px) rotate(-88deg);"></li>
          <li class="garland-item" style="transform: rotate(96deg) translate(85px) rotate(-96deg);"></li>
          <li class="garland-item" style="transform: rotate(104deg) translate(85px) rotate(-104deg);"></li>
          <li class="garland-item" style="transform: rotate(112deg) translate(85px) rotate(-112deg);"></li>
          <li class="garland-item" style="transform: rotate(120deg) translate(85px) rotate(-120deg);"></li>
        </ul>
        <ul class="garland-list"  style="width: 425px; height: 425px;">
          
          <li class="garland-item" style="transform: rotate(64deg) translate(115px) rotate(-64deg);"></li>
          <li class="garland-item" style="transform: rotate(71deg) translate(115px) rotate(-71deg);"></li>
          <li class="garland-item" style="transform: rotate(78deg) translate(115px) rotate(-78deg);"></li>
          <li class="garland-item" style="transform: rotate(85deg) translate(115px) rotate(-85deg);"></li>
          <li class="garland-item" style="transform: rotate(92deg) translate(115px) rotate(-92deg);"></li>
          <li class="garland-item" style="transform: rotate(99deg) translate(115px) rotate(-99deg);"></li>
          <li class="garland-item" style="transform: rotate(106deg) translate(115px) rotate(-106deg);"></li>
          <li class="garland-item" style="transform: rotate(113deg) translate(115px) rotate(-113deg);"></li>
          <li class="garland-item" style="transform: rotate(120deg) translate(115px) rotate(-120deg);"></li>
      
        </ul>
        <ul class="garland-list"  style="width: 425px; height: 625px;">
        <li class="garland-item" style="transform: rotate(55deg) translate(130px) rotate(-55deg);"></li>
        <li class="garland-item" style="transform: rotate(60deg) translate(130px) rotate(-60deg);"></li>
        <li class="garland-item" style="transform: rotate(65deg) translate(130px) rotate(-65deg);"></li>
        <li class="garland-item" style="transform: rotate(70deg) translate(130px) rotate(-70deg);"></li>
        <li class="garland-item" style="transform: rotate(75deg) translate(130px) rotate(-75deg);"></li>
        <li class="garland-item" style="transform: rotate(80deg) translate(130px) rotate(-80deg);"></li>
        <li class="garland-item" style="transform: rotate(85deg) translate(130px) rotate(-85deg);"></li>
        <li class="garland-item" style="transform: rotate(90deg) translate(130px) rotate(-90deg);"></li>
        <li class="garland-item" style="transform: rotate(95deg) translate(130px) rotate(-95deg);"></li>
        <li class="garland-item" style="transform: rotate(100deg) translate(130px) rotate(-100deg);"></li>
        <li class="garland-item" style="transform: rotate(105deg) translate(130px) rotate(-105deg);"></li>
        <li class="garland-item" style="transform: rotate(110deg) translate(130px) rotate(-110deg);"></li>
        <li class="garland-item" style="transform: rotate(115deg) translate(130px) rotate(-115deg);"></li>
        <li class="garland-item" style="transform: rotate(120deg) translate(130px) rotate(-120deg);"></li>
        <li class="garland-item" style="transform: rotate(125deg) translate(130px) rotate(-125deg);"></li>
        <li class="garland-item" style="transform: rotate(130deg) translate(130px) rotate(-130deg);"></li>
      </ul>
      `;
  }
}