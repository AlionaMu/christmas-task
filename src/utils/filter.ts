import { container } from './../view/Toys';
import data from './../../public/data'; 
import { getStorageData } from '../utils/getStorageData';
import { arrColors } from './../components/SettingsValue';


export const filter = () => {
  const ruColors: string[] = [];
  const storageColors: string[] = getStorageData('selectedColor');

  Object.values(arrColors).forEach(el => {
    if (storageColors.includes(el.eng)) {
      ruColors.push(el.ru);
    }
  });

  const filtered = data.filter((el) => 
    el.year > getStorageData('year_min') && el.year < getStorageData('year_max') &&
    el.count > getStorageData('quantity_min') && el.count < getStorageData('quantity_max') &&
    ruColors.includes(el.color),
  );

  container.rerender(filtered);
};