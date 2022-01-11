import { container } from './../view/Toys';

export const valueReverseSort = (data:{
  num: string,
  name: string,
  count: string
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: boolean
}[]) =>{
  const res = data.sort(( a, b)=> {
    return parseInt(a.year) - parseInt(b.year);
  });
  const reverse = res.reverse();
  data = reverse;

  container.rerender(data);
};