export interface Status
{
  titel:string;
  icon:string;
  class:string;
}
export interface Projekt{
  id:number;
  titel:string;
  vnb:string;
  art:string;
  statusText:string;
  status:Status[];
}
