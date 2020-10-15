import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface FormularTyp {
  name: string;
  creatable: boolean;
  deletable: boolean;
}
@Component({
  selector: 'app-projekt1',
  templateUrl: './projekt1.component.html',
  styleUrls: ['./projekt1.component.scss']
})
export class Projekt1Component implements OnInit {
	navOpen: boolean = true;
	allExpanded: boolean = false;

	contentDrawerStyles: object = {};
	contentDrawerContentStyles: object = {};

	navigationDrawerStyles: object = {};
	navigationDrawerContentStyles: object = {};

	alleFormularTypen: string[] = ['TAG', 'IA', 'AB', 'SiNa', 'MPP', 'SpezSpez'];

	// allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
	// fruits: string[] = ['Lemon'];

	separatorKeysCodes: number[] = [ENTER, COMMA];
	fruitCtrl = new FormControl();
	filteredFruits: Observable<string[]>;

	@ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
	@ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
	this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
		startWith(null),
		map((fruit: string | null) => fruit ? this._filter(fruit) : this.alleFormularTypen.slice()));
  }

  ngOnInit(): void {
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

formularTypen: FormularTyp[] = [
  {name: 'TAG', creatable: true, deletable: false},
  {name: 'IA', creatable: true, deletable: false},
  {name: 'AB', creatable: true, deletable: false},
  {name: 'SiNa', creatable: true, deletable: false},
];

anlagen: string[]=[
	"UG",
	"EG",
	"1. OG",
	"2. OG links",
]

add(event: MatChipInputEvent): void {
	const input = event.input;
	const value = event.value;

	// Add our fruit
	if ((value || '').trim()) {
	  this.formularTypen.push({name: value.trim(), creatable: true, deletable: false});
	}

	// Reset the input value
	if (input) {
	  input.value = '';
	}

	this.fruitCtrl.setValue(null);
 }

addFormular(formularTyp: FormularTyp): void {
	formularTyp.creatable = false;
	formularTyp.deletable = true;
}

deleteFormular(formularTyp: FormularTyp): void {
	formularTyp.creatable = true;
	formularTyp.deletable = false;
}

selected(event: MatAutocompleteSelectedEvent): void {
	// this.fruits.push(event.option.viewValue);
	this.formularTypen.push({name: event.option.viewValue, creatable: true, deletable: false});
	this.fruitInput.nativeElement.value = '';
	this.fruitCtrl.setValue(null);
 }

 private _filter(value: string): string[] {
	const filterValue = value.toLowerCase();

	return this.alleFormularTypen.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
 }

}
