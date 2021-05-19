import { Component, Input, OnInit } from '@angular/core';
import { ObjTreeNode } from 'src/app/objs/objs-hierarchy/objs-hierarchy.component';

@Component({
  selector: 'app-objs-exp-panel',
  templateUrl: './objs-exp-panel.component.html',
  styleUrls: ['./objs-exp-panel.component.scss']
})
export class ObjsExpPanelComponent implements OnInit {
  @Input() objTree?: ObjTreeNode[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
