import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Status, Projekt} from 'src/app/shared/projekt.interface'
import {ProjektService} from 'src/app/shared/projekt.service'
import { ResizeEvent } from 'angular-resizable-element';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
// import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-projekt4',
  templateUrl: './projekt4.component.html',
  styleUrls: ['./projekt4.component.scss']
})
export class Projekt4Component implements OnInit {

  allExpanded: boolean = true;
  navOpen: boolean = true;

	contentDrawerStyles: object = {};
	contentDrawerContentStyles: object = {};

	navigationDrawerStyles: object = {};
	navigationDrawerContentStyles: object = {};

  public filter: string;
  public gefilterteProjekte : Projekt[];
  public aktuellesProjekt : Projekt;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly projektService: ProjektService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.aktuellesProjekt = this.projektService.getProjektById(parseInt(params.id));
      if (params.filter && params.projektIds) {
        this.filter = params.filter;
        let ids: number[] = params.projektIds.split(',').map(x => parseInt(x));
        this.gefilterteProjekte = this.projektService.getProjekte(ids);
      }
      else{
        this.gefilterteProjekte = this.projektService.getAllProjekte()
      }
    });
  }

  selectItem(e:HTMLElement, p:Projekt) : void{
    this.aktuellesProjekt = p;
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
