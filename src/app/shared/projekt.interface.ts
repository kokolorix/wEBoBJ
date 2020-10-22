export interface Status
{
  titel:string;
  icon:string;
  class:string;
}
export interface Standort{
  strasse:string;
  strasse2?:string;
  strasseNr?:number;
  strasseNrZusatz?:string;
  plz:number;
  postOrt:string;
  gemeinde?:string;
}
export interface Adresse{
  name:string;
  name2?:string;
  standort?:Standort;
  email?:string;
  telefonNr?:string;
}
export interface Datum
{
  tag:number;
  monat:number;
  jahr:number;
}
export interface Anlage{
  gebaeudeteil:string;
  gebaeudenutzung:string;
  zaehlerNr?:string;
  zaehlerNr2?:string;
  vnbMeldungsNr?:string;
  eigentümer?:Adresse;
  stromkunde?:Adresse;
  installateur?:Adresse;
  sachbearbeiter?:Adresse;
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
  anlagen?:Anlage[];
  statusText:string;
  status:Status[];
}
