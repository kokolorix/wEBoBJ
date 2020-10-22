import { Component, OnInit, Input } from '@angular/core';
import { Projekt } from 'src/app/shared/projekt.interface';

@Component({
  selector: 'projekt-daten',
  templateUrl: './projekt-daten.component.html',
  styleUrls: ['./projekt-daten.component.scss']
})
export class ProjektDatenComponent implements OnInit {
  @Input() aktuellesProjekt:Projekt;

  public editProjekt: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  editStandort(e:any):void{
    this.editProjekt = true;
		// this.dialog.open(StandortDialogComponent);
  }

}
