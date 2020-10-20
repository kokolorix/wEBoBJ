import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Status, Projekt} from 'src/app/shared/projekt.interface'
import {ProjektService} from 'src/app/shared/projekt.service'

@Component({
  selector: 'app-projekt4',
  templateUrl: './projekt4.component.html',
  styleUrls: ['./projekt4.component.scss']
})
export class Projekt4Component implements OnInit {

  public projekt : Projekt;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly projektService: ProjektService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.projekt = this.projektService.getProjektById(parseFloat(params.id));
    });
  }
}
