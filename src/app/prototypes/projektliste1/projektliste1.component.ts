import { Component, OnInit } from '@angular/core';

export interface Kategorie {
	text: string;
}

export interface Zeile {
	cols: number;
	rows: number;
	text: string;
	klasse: string;
	inStyle?: string;
	icon?: String;
}

@Component({
	selector: 'app-projektliste1',
	templateUrl: './projektliste1.component.html',
	styleUrls: ['./projektliste1.component.scss']
})
export class Projektliste1Component implements OnInit {
	titel: Zeile[] = [
		{ text: 'Projekt', cols: 2, rows: 1, klasse: "grid1 head1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "article" },
		{ text: 'TAG', cols: 1, rows: 1, klasse: "grid1 head1" },
		{ text: 'IA', cols: 1, rows: 1, klasse: "grid1 head1" },
		{ text: 'AB', cols: 1, rows: 1, klasse: "grid1 head1" },
		{ text: 'SiNa', cols: 1, rows: 1, klasse: "grid1 head1" },
	];

	leistungen: Zeile[] = [
		{ text: 'Eine Strasse 1 \n1234 Ein Ort', cols: 2, rows: 1, klasse: "grid1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "menu" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "filter_1" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "filter_3" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2" },

		{ text: 'Strasse Zwei \nOrtschaft Zwei', cols: 2, rows: 1, klasse: "grid1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "menu" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "filter_1" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2" },

		{ text: 'Noch ne Strasse\nStadt am See', cols: 2, rows: 1, klasse: "grid1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "menu" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "filter_1" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "filter_4" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "filter_3" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "filter_9" },

		{ text: 'Strasse Vier \n1212 Ein Anderer Ort', cols: 2, rows: 1, klasse: "grid1", inStyle: "width: 100%; display: flex; align-items: center;", icon: "menu" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "filter_1" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "filter_4" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "filter_3" },
		{ text: '', cols: 1, rows: 1, klasse: "grid2", icon: "filter_9" },
	];

	kategorien: Kategorie[] = [
		{ text: "Neuste-Projekte" },
		{ text: "Dringenste-Projekte" },
		{ text: "Abgelaufene-Projekte" },
		{ text: "Älteste-Projekte" },
	];


	listen: string[] = [
		"Neuste",
		"Dringenste",
		"Abgelaufene",
		"Älteste"
	]
	constructor() { }

	ngOnInit(): void {
	}

}
