export interface Status
{
  titel:string;
  icon:string;
  class:string;
}
export interface Standort{
  strasse:string;
  strasseNr:number;
  strasseNrZusatz?:string;
  plz:number;
  postOrt:string;
  gemeinde?:string;
}
export interface Datum
{
  tag:number;
  monat:number;
  jahr:number;
}
export interface Projekt{
  id:number;
  titel:string;
  standort:Standort;
  inbetriebnahme:Datum;
  parzellenNr:number;
  versicherungsNr:number;
  gebaeudeArt:string;
  vnb:string;
  art:string;
  statusText:string;
  status:Status[];
}
