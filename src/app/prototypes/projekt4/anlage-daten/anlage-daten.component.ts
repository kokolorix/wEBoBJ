import { Component, OnInit, Input } from '@angular/core';
import { Anlage, Projekt } from 'src/app/shared/projekt.interface';

@Component({
  selector: 'projekt-anlage-daten',
  templateUrl: './anlage-daten.component.html',
  styleUrls: ['./anlage-daten.component.scss']
})
export class AnlageDatenComponent implements OnInit {
  @Input() aktuellesProjekt:Projekt;

  public editAnlage: boolean = false;
  public aktuelleAnlage: Anlage;

  constructor() { }

  ngOnInit(): void {
  }

  openAnlageDetail(a:Anlage):void{

  }
}
