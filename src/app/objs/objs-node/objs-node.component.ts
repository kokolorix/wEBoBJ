import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ObjTreeNode } from 'src/app/objs/objs-hierarchy/objs-hierarchy.component';

@Component({
  selector: 'app-objs-node',
  templateUrl: './objs-node.component.html',
  styleUrls: ['./objs-node.component.scss']
})
export class ObjsNodeComponent implements OnInit {
  @Input() node? : ObjTreeNode;
  @Output() selected = new EventEmitter<ObjTreeNode>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick( node:ObjTreeNode){
    this.selected.emit(node);
  }

}
