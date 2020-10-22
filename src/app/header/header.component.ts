import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	languages: string[] = [
		"Deutsch", "Français", "Italiano", "English"
	];
	language: string = null;

  constructor() { }

  ngOnInit(): void {
  }

	changeLanguage(item): void {
		this.language = item;
	}

}
