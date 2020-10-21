import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Status, Projekt} from 'src/app/shared/projekt.interface'
import {ProjektService} from 'src/app/shared/projekt.service'
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-projekt4',
  templateUrl: './projekt4.component.html',
  styleUrls: ['./projekt4.component.scss']
})
export class Projekt4Component implements OnInit {

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
      let ids = params.projektIds.split(',').map(x => parseInt(x));
      this.gefilterteProjekte = this.projektService.getProjekte(ids);
      this.filter = params.filter;
    });
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
