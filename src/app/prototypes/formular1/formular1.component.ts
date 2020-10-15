import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
	selector: 'app-formular1',
	templateUrl: './formular1.component.html',
	styleUrls: ['./formular1.component.scss']
 })
 export class Formular1Component implements OnInit {

	 contentDrawerStyles: object = { };
	contentDrawerContentStyles: object = { };

	navigationDrawerStyles: object = { };
	navigationDrawerContentStyles: object = { };

	ortAnlageTyp: string;
	anlageGebaeudeTyp: string;

	hatWaermePumpe: boolean = false;
	hatEnergieErugungsanlage: boolean = false;
	hatNetzrueckwirkung: boolean = false;
	hatEnergiespeicher: boolean = false;
	hatLadestation: boolean = false;

	currentNavigation: string;
	allowMulti: boolean;

	elektrischeWaermepumpeZusatzheitzung: string = 'nein';

	constructor(
		private scroller: ViewportScroller
	) { }

	ngOnInit(): void {
	}

	scroll(anchor: string): void {
		this.currentNavigation = anchor;
		this.scroller.scrollToAnchor(anchor);
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
}
