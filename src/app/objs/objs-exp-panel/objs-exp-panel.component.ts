import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ObjTreeNode } from 'src/app/objs/objs-hierarchy/objs-hierarchy.component';

@Component({
  selector: 'app-objs-exp-panel',
  templateUrl: './objs-exp-panel.component.html',
  styleUrls: ['./objs-exp-panel.component.scss']
})
export class ObjsExpPanelComponent implements OnInit {
  @Input() objTree?: ObjTreeNode[];
  @Output() selected = new EventEmitter<ObjTreeNode>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick( node:ObjTreeNode){
    this.selected.emit(node);
  }
}
