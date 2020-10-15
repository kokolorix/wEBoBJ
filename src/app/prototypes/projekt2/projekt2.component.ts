import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import {MatDialog} from '@angular/material/dialog';
import { ProjektDialogComponent } from './projekt-dialog/projekt-dialog.component';
import { AnlageDialogComponent } from './anlage-dialog/anlage-dialog.component';

export interface Anlage {
	gebTeil: string;
	nutzung: string;
	zaehler: string;
	eigner: string;
	kunde: string;
	tag: boolean;
	ia: boolean;
	ab: boolean;
	sina: boolean;
}

export interface Leistung{
	name: string;
}

const ELEMENT_DATA: Anlage[] = [
	{ gebTeil: "Ganzes Gebäude", nutzung: "Allgemein", zaehler: "563124", eigner: "Christen Beat", kunde: "Christen Beat", tag: true, ia: true, ab: true, sina: false },
	{ gebTeil: "1. UG", nutzung: "Einstellhalle", zaehler: "563125", eigner: "Christen Beat", kunde: "Christen Beat", tag: false, ia: false, ab: false, sina: false },
	{ gebTeil: "EG links", nutzung: "Wohnung", zaehler: "563126", eigner: "Christen Beat", kunde: "Christen Beat", tag: false, ia: false, ab: false, sina: true },
	{ gebTeil: "EG rechts", nutzung: "Büro", zaehler: "563127", eigner: "Christen Beat", kunde: "Christen Beat", tag: false, ia: false, ab: false, sina: false },
	{ gebTeil: "1. OG links", nutzung: "Wohnung", zaehler: "563128", eigner: "Christen Beat", kunde: "Christen Beat", tag: false, ia: false, ab: false, sina: true },
	{ gebTeil: "1. OG mitte", nutzung: "Wohnung", zaehler: "563129", eigner: "Christen Beat", kunde: "Christen Beat", tag: false, ia: false, ab: false, sina: false },
	{ gebTeil: "1. OG rechts", nutzung: "Wohnung", zaehler: "563130", eigner: "Christen Beat", kunde: "Christen Beat", tag: false, ia: false, ab: false, sina: false }
];

@Component({
	selector: 'app-projekt2',
	templateUrl: './projekt2.component.html',
	styleUrls: ['./projekt2.component.scss']
})
export class Projekt2Component implements OnInit {
	navOpen: boolean = false;

	contentDrawerStyles: object = {};
	contentDrawerContentStyles: object = {};

	navigationDrawerStyles: object = {};
	navigationDrawerContentStyles: object = {};
//
	displayedColumns: string[] = ['Anlage', 'TAG', 'IA', 'AB', 'SiNa'];
	dataSource = ELEMENT_DATA;

	formTypen: string[] = ['TAG', 'IA', 'AB', 'SiNa'];

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
	}

	kurz(e:Anlage) : string {
		return e.gebTeil + ', ' + e.nutzung;
	}

	onResizseContentDrawer(event: ResizeEvent): void {
		this.contentDrawerStyles = {
			width: `${event.rectangle.width}px`
		};

		this.contentDrawerContentStyles = {
			"margin-left": `${event.rectangle.width}px`
		}
	}

	onResizeNavigationDrawer(event: ResizeEvent): void {
		this.navigationDrawerStyles = {
			width: `${event.rectangle.width}px`
		};

		this.navigationDrawerContentStyles = {
			"margin-right": `${event.rectangle.width}px`
		}
	}

	openProjektDialog() {
		this.dialog.open(ProjektDialogComponent);
	 }

	openAnlagetDialog() {
		this.dialog.open(AnlageDialogComponent);
	 }

  }
