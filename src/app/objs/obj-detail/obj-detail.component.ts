import { Component, Input, OnInit } from '@angular/core';
import { ObjTreeNode } from '../objs-hierarchy/objs-hierarchy.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-obj-detail',
  templateUrl: './obj-detail.component.html',
  styleUrls: ['./obj-detail.component.scss']
})
export class ObjDetailComponent implements OnInit {
  @Input() selectedNode? : ObjTreeNode;
  constructor() { }

  ngOnInit(): void {
  }

}
