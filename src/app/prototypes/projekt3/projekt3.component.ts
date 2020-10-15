import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ProjektDialogComponent } from '../projekt2/projekt-dialog/projekt-dialog.component';
import { AnlageDialogComponent } from '../projekt2/anlage-dialog/anlage-dialog.component';

export interface Zeile {
	cols: number;
	rows: number;
	text: string;
	klasse: string;
	inStyle?: string;
	icon?: String;
}

@Component({
  selector: 'app-projekt3',
  templateUrl: './projekt3.component.html',
  styleUrls: ['./projekt3.component.scss']
})
export class Projekt3Component implements OnInit {
  
  titel: Zeile[] = [
		{ text: 'Projekt', cols: 2, rows: 1, klasse: "grid1 head1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "article" },
		{ text: 'TAG', cols: 1, rows: 1, klasse: "grid1 head1" },
		{ text: 'IA', cols: 1, rows: 1, klasse: "grid1 head1" },
		{ text: 'AB', cols: 1, rows: 1, klasse: "grid1 head1" },
		{ text: 'SiNa', cols: 1, rows: 1, klasse: "grid1 head1" },
	];

  anlagen: Zeile[] = [
		{ text: 'Ganzes Gebäude\nAllegemen', cols: 2, rows: 1, klasse: "grid1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "menu" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "texture" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "texture" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "texture" },
    { text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },

 		{ text: '1. UG\nEinstellhalle', cols: 2, rows: 1, klasse: "grid1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "menu" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
    { text: '', cols: 1, rows: 1, klasse: "grid2", icon: "texture" },
     
 		{ text: 'EG links\nWohnung', cols: 2, rows: 1, klasse: "grid1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "menu" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
    { text: '', cols: 1, rows: 1, klasse: "grid2", icon: "texture" },
    
 		{ text: 'EG rechts\nBüro', cols: 2, rows: 1, klasse: "grid1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "menu" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
    { text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
    
 		{ text: '1. OG links\nWohnung', cols: 2, rows: 1, klasse: "grid1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "menu" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "texture" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "texture", inStyle: "color: red;" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "texture" },
    { text: '', cols: 1, rows: 1, klasse: "grid2", icon: "texture" },
    
 		{ text: '1. OG mitte\nWohnung', cols: 2, rows: 1, klasse: "grid1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "menu" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
    { text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
    
 		{ text: '1. OG rechts\nWohnung', cols: 2, rows: 1, klasse: "grid1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "menu" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "" },
    { text: '', cols: 1, rows: 1, klasse: "grid2", icon: "texture" },
];


  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {

  }

  istFormular(icon:string) : boolean{
    return icon === "texture";
  }

  istAnlage(icon:string) : boolean{
    return icon === "menu";
  }

	openProjektDialog() {
		this.dialog.open(ProjektDialogComponent);
	 }

  openAnlagetDialog() {
		this.dialog.open(AnlageDialogComponent);
   }
}
