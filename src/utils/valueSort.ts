import { container } from './../view/Toys';

export const valueSort = (data:{
  num: string,
  name: string,
  count: string
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: boolean
}[]) =>{
  data.sort((a, b)=> {
    return parseInt(a.year) - parseInt(b.year);
  });

  container.rerender(data);
};