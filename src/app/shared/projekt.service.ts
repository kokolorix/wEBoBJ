import { Injectable } from '@angular/core';
import { Status, Projekt, Standort, Adresse, Anlage, Datum } from 'src/app/shared/projekt.interface'
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjektService {

  private projekte : Projekt[];

  constructor() {
    this.projekte = Array.from({length: 250}, (_, k) => erstelleProjekt(k + 1));
   }

  public getAllProjekte$(): Observable<Projekt[]> {
    return of(this.projekte);
  }

  public getAllProjekte(): Projekt[] {
    return this.projekte;
  }

  public getProjektById(id:number){
    return this.projekte.find(projekt => projekt.id === id);
  }

  public getProjekte(ids: number[]): Projekt[] {
    return this.projekte.filter(x => ids.indexOf(x.id) >= 0);
  }
}



const STRASSEN: string[] = [
  'Eigerstrasse', 'Hügelweg', 'Poststrasse', 'Industrie', 'Bergweg', 'Lindenweg', 'Wurstelstrasse'
];
const VNBs: string[] = [
  'logo-bkw.png', 'logo-groupee.png', 'logo-wald.png',
];
const ORTE: string[] = [
  '3257 Walddorf', '6587 Strandstadt', '4587 Hauptstadt', '4107 Hinterwald'
];
const AUFTRAG_DEFS: string[] = [
  'Neubau', 'Umbau', 'period. Kontrolle', 'temp. Anlage'
];
const GEB_ARTEN: string[] = [
  'EFH', 'MFH', 'Gewerbe', 'Blockhütte', 'Trump Tower'
];
const LEIST_DEFS: string[] = [
  'TAG', 'IA', 'AB', 'SiNa','MPP','Schema','Beilage',
];
const STATI: string[] = [
  'stWorking','stSent','stReceived','stApproved',
]
const GEB_TEILE: string[] = [
  'Ganzes Gebäude', '1. OG links', '1. OG rechts', 'Dachstock', 'Hauptgebäude', 'Economie', 'Aula', 'Halle xy',];

const GEB_NUTZUNGEN: string[] = [
  'Wohnung', 'Einstellhalle', 'Büro', 'Gewerbe', 'Schreinerei', 'Schlosserei', 'Produktion', 'Praxis', 'Verwaltung', 'EDV-Anlage', 'Verkaufslokal', 'Stall', 'Materiallager', 'Allgemein',
];
// const XXX   : string[] = [];

function erstelleProjekt(id: number) : Projekt
{
  const strasse : string  = STRASSEN[Math.round(Math.random() * (STRASSEN.length - 1))];
  const ort: string = ORTE[Math.round(Math.random() * (ORTE.length - 1))];
  const plz: number = parseInt(ort.substr(0,4));  
  const nr : string = Math.round(Math.random() * (STRASSEN.length - 1) + 1).toString();
  const vnb : string = VNBs[Math.round(Math.random() * (VNBs.length - 1))];
  const art : string = AUFTRAG_DEFS[Math.round(Math.random() * (AUFTRAG_DEFS.length - 1))];

  const tag:number = Math.round(Math.random() * 30) + 1;
  const monat:number = Math.round(Math.random() * 12) + 1;
  const jahr:number = Math.round(Math.random() * 10) + 2015;

  const parzellenNr:number = Math.round(Math.random() * 1000) + 101;
  const versicherungsNr:number = Math.round(Math.random() * 1000000) + 5478;
  const gebaeudeArt:string = GEB_ARTEN[Math.round(Math.random() * (GEB_ARTEN.length - 1))];

  let status =  erstelleSatus();
  let anlagen =  erstelleAnlagen();

  return {
    id: id,
    titel: strasse + ' ' + nr + ', ' + ort,
    standort: {
      strasse:strasse,
      strasseNr:parseFloat(nr),
      plz:plz,
      postOrt:ort.substr(5).trim(),
      gemeinde:plz > 6000 ? 'Küste':'',
    },
    inbetriebnahme:{tag:tag,monat:monat,jahr:jahr},
    parzellenNr:parzellenNr,
    versicherungsNr:versicherungsNr,
    gebaeudeArt:gebaeudeArt,
    vnb: vnb,
    art: art,
    statusText: status.text,
    status: status.stati,
    anlagen: anlagen,
  }
}

function erstelleSatus()  : {stati:Status[],  text:string}{
  let stati : Status[] = [];
  let classes = new Set();

  for(let i = 0; i < LEIST_DEFS.length; ++i) {
    let x = Math.round(Math.random() * 9) ;
    let def = LEIST_DEFS[i];

    if(x && (x % 2)){
      const cls : string = STATI[Math.round(Math.random() * (STATI.length - 1))];
      stati.push({titel:`${def}`, icon:`filter_${x}`, class: cls});
      classes.add(cls);
    }
  }

  let text:string;

    if(classes.has('stWorking'))
      text = 'In Arbeit';
    else if(classes.has('stReceived'))
      text = 'Rückmeldung';
    else if(classes.has('stSent'))
      text = 'Gesendet';
    else if(classes.has('stApproved'))
      text = 'Abgeschlossen';
    else
      text = 'Neu'

  return { stati: stati, text: text };
}

function erstelleAnlagen(): Anlage[] {
  let anlagen:Anlage[]  = [];
  const anzahl = Math.round(Math.random() * (GEB_TEILE.length));
  
  for(let i = 0; i < anzahl; i++){
    const teil: string = GEB_TEILE[i];
    const nutzung: string = GEB_NUTZUNGEN[Math.round(Math.random() * (GEB_NUTZUNGEN.length - 1))];
    const zaehlerNr: number = Math.round(Math.random() * 1000000) + 2222;
    const zaehlerNr2: number = (i % 4 === 0) ? Math.round(Math.random() * 1000000) + 3333 : null;
    const vnbMeldungsNr: number = (i % 3 === 0) ? Math.round(Math.random() * 1000000) + 4444 : 0;
    
    anlagen.push({
      gebaeudeteil: teil,
      gebaeudenutzung: nutzung,
      zaehlerNr:zaehlerNr.toString(),
      zaehlerNr2: zaehlerNr2 ? zaehlerNr2.toString() : '',
      vnbMeldungsNr: vnbMeldungsNr ? vnbMeldungsNr.toString() : '',
    });
  }

  return anlagen;
}
