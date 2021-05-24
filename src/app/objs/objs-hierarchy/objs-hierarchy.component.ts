import { Component, Input, OnInit } from '@angular/core';
import { Object, PropertyValue } from 'src/app/shared/object';

export interface ObjTreeNodeProperty{
  name: string;
  value?: PropertyValue;
}
export interface ObjTreeNode{
  readonly name:string;
  readonly properties: ObjTreeNodeProperty[];
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

  @Input() objects?: Object[];
  @Input() objTree?: ObjTreeNode[];
  
  selectedNode? : ObjTreeNode;

  constructor(
  ) 
  {
  }

  ngOnInit(): void {
  }

  onSelect(node:ObjTreeNode){
    if(this.selectedNode)
      this.selectedNode.selected = false;
      
    if (this.selectedNode === node)
      this.selectedNode = undefined;
    else
      this.selectedNode = node;

    if (this.selectedNode)
      this.selectedNode.selected = true;
  }

  onSelectList(obj:Object)
  {
    if (this.objTree)
    {
      let node = this.findObjTreeNode(obj, this.objTree);
      if(node)
        this.onSelect(node);
    }
  }

  private findObjTreeNode(obj:Object, nodes:ObjTreeNode[]):ObjTreeNode|undefined
  {
    let node : ObjTreeNode|undefined = nodes.find(n => n.object === obj);
    if(node)
      return node;

    for(let n of nodes)
    {
      let node = this.findObjTreeNode(obj, n.children);
      if(node)
        return node;      
    }
    return undefined;
  }

}
