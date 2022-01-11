import { container } from './../view/Toys';

export const alphabetReverseSort = (data:{
  num: string,
  name: string,
  count: string
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: boolean
}[]) =>{
  const res = data.sort((a, b)=> {
    const a1 = a.name.toLowerCase();
    const b1 = b.name.toLowerCase();
    const end = a1 < b1 ? -1 : a1 > b1 ? 1 : 0;

    return end;
  });
  const reverse = res.reverse();
  data = reverse;
 
  container.rerender(data);
}; 