import { Component, OnInit } from '@angular/core';
import { Object, rootBaseT } from 'src/app/shared/object';
import { ObjsService } from 'src/app/shared/objs.service';
import { ObjsNodeComponent } from 'src/app/objs/objs-node/objs-node.component';

export interface ObjTreeNode{
  name:string;
  object:Object;
  children:ObjTreeNode[];
  selected:boolean;
}
@Component({
  selector: 'app-objs-hierarchy',
  templateUrl: './objs-hierarchy.component.html',
  styleUrls: ['./objs-hierarchy.component.scss']
})
export class ObjsHierarchyComponent implements OnInit {

  objects: Object[] = [];
  objTree: ObjTreeNode[] = [];
  selectedNode? : ObjTreeNode;

  constructor(
    private readonly objs_service: ObjsService,
  ) 
  {
    this.onNew();
  }

  private makeTree(objects:Object[], o:Object):ObjTreeNode{
    let val = o.name;
    let name:string = (val != undefined) ? val.toString() : '';
    let children = objects.filter(
      o1 => o1.parent === o
      ).map( o2 => this.makeTree(objects, o2));
    let node:ObjTreeNode = {name:name, object:o, children:children, selected:false}
    return node;
  }

  ngOnInit(): void {
  }

  onNew() {
  this.objects = this.objs_service.getNewStructrue();
    this.objTree = this.objects.filter(
      o => o.parent === this.objs_service.root
    ).map(o1 => this.makeTree(this.objects, o1));
  }
  onRandom() {
    this.objects = this.objs_service.getRandomStructrue();
    this.objTree = this.objects.filter(
      o => o.parent === this.objs_service.root
    ).map(o1 => this.makeTree(this.objects, o1));
  }
  onClear() {
    this.objects = [];
    this.objTree = [];
  }
  onSelect(node:ObjTreeNode){
    if(this.selectedNode)
      this.selectedNode.selected = false;
    this.selectedNode = node;
    if(this.selectedNode)
      this.selectedNode.selected = true;
  }

}
