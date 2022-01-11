import { container } from './../view/Toys';
import data from './../../public/data'; 


export const clearStorage = () => {
  localStorage.setItem('quantity_min', '1');
  localStorage.setItem('quantity_max', '12');
  localStorage.setItem('year_min', '1940');
  localStorage.setItem('year_max', '2021');

  const selectedColor: string[] = ['white', 'yellow', 'red', 'blue', 'green'];
  localStorage.setItem('selectedColor', JSON.stringify(selectedColor));

  container.rerender(data);
};