import { Injectable } from '@angular/core';
import {Status, Projekt} from 'src/app/shared/projekt.interface'
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
const LEIST_DEFS: string[] = [
  'TAG', 'IA', 'AB', 'SiNa','MPP','Schema','Beilage',
];
const STATI: string[] = [
  'stWorking','stSent','stReceived','stApproved',
]

function erstelleProjekt(id: number) : Projekt
{
  const strasse : string  = STRASSEN[Math.round(Math.random() * (STRASSEN.length - 1))];
  const ort: string = ORTE[Math.round(Math.random() * (ORTE.length - 1))];
  const nr : string = Math.round(Math.random() * (STRASSEN.length - 1) + 1).toString();
  const vnb : string = VNBs[Math.round(Math.random() * (VNBs.length - 1))];
  const art : string = AUFTRAG_DEFS[Math.round(Math.random() * (AUFTRAG_DEFS.length - 1))];

  var status : Status[] = [];
  var classes = new Set();

  for(let i = 0; i < LEIST_DEFS.length; ++i) {
    let x = Math.round(Math.random() * 9) ;
    let def = LEIST_DEFS[i];

    if(x && (x % 2)){
      const cls : string = STATI[Math.round(Math.random() * (STATI.length - 1))];
      status.push({titel:`${def}`, icon:`filter_${x}`, class: cls});
      classes.add(cls);
    }
  }

  let statusText:string;

    if(classes.has('stWorking'))
      statusText = 'In Arbeit';
    else if(classes.has('stReceived'))
      statusText = 'Rückmeldung';
    else if(classes.has('stSent'))
      statusText = 'Gesendet';
    else if(classes.has('stApproved'))
      statusText = 'Abgeschlossen';
    else
      statusText = 'Neu'

  return {
    id: id,
    titel: strasse + ' ' + nr + ', ' + ort,
    vnb: vnb,
    art: art,
    statusText: statusText,
    status: status,
  }
}