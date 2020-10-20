import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Status
{
  titel:string;
  icon:string;
  class:string;
}
export interface Projekt{
  titel:string;
  vnb:string;
  art:string;
  statusText:string;
  status:Status[];
}


@Component({
  selector: 'app-projektliste4',
  templateUrl: './projektliste4.component.html',
  styleUrls: ['./projektliste4.component.scss']
})
export class Projektliste4Component implements OnInit {
  displayedColumns: string[] = ['titel', 'art', 'vnb', 'status'];
  dataSource: MatTableDataSource<Projekt>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  expandedElement:Projekt | null;

  constructor() {
      // Create 100 users
      const projekte = Array.from({length: 250}, (_, k) => erstelleProjekt(k + 1));

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(projekte);
   }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openProjektDetail() : void {

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
    titel : strasse + ' ' + nr + ', ' + ort,
    vnb: vnb,
    art: art,
    statusText: statusText,
    status: status,
  }
}
