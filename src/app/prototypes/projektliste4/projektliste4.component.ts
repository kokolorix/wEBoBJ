import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Projekt{
  titel:string;
  vnb:string;
  art:string;
}

@Component({
  selector: 'app-projektliste4',
  templateUrl: './projektliste4.component.html',
  styleUrls: ['./projektliste4.component.scss']
})
export class Projektliste4Component implements OnInit {
  displayedColumns: string[] = ['titel', 'art', 'vnb'];
  dataSource: MatTableDataSource<Projekt>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
      // Create 100 users
      const projekte = Array.from({length: 2500}, (_, k) => erstelleProjekt(k + 1));

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
const PROEKTARTEN: string[] = [
  'Neubau', 'Umbau', 'period. Kontrolle', 'temp. Anlage'
];

function erstelleProjekt(id: number) : Projekt
{
  const strasse : string  = STRASSEN[Math.round(Math.random() * (STRASSEN.length - 1))];
  const ort: string = ORTE[Math.round(Math.random() * (ORTE.length - 1))];
  const nr : string = Math.round(Math.random() * (STRASSEN.length - 1) + 1).toString();
  const vnb : string = VNBs[Math.round(Math.random() * (VNBs.length - 1))];
  const art : string = PROEKTARTEN[Math.round(Math.random() * (PROEKTARTEN.length - 1))];

  return {
    titel : strasse + ' ' + nr + ', ' + ort,
    vnb: vnb,
    art: art,
  }
}
