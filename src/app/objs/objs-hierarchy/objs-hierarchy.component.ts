import { Component, OnInit } from '@angular/core';
import { Object, rootBaseT } from 'src/app/shared/object';
import { ObjsService } from 'src/app/shared/objs.service';

interface ObjTreeNode{
  name:string;
  object:Object;
  children:ObjTreeNode[];
}
@Component({
  selector: 'app-objs-hierarchy',
  templateUrl: './objs-hierarchy.component.html',
  styleUrls: ['./objs-hierarchy.component.scss']
})
export class ObjsHierarchyComponent implements OnInit {

  objects: Object[] = [];
  objTree: ObjTreeNode[] = [];

  constructor(
    private readonly objs_service: ObjsService,
  ) 
  {
  }

  private makeTree(objects:Object[], o:Object):ObjTreeNode{
    let val = o.properties[0].value;
    let name:string = (val != undefined) ? val.toString() : '';
    let children = objects.filter(
      o1 => o1.parent === o
      ).map( o2 => this.makeTree(objects, o2));
    let node:ObjTreeNode = {name:name, object:o, children:children}
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
  }
  onClear() {
    this.objects = [];
    this.objTree = [];
  }

}
