import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface ObjNode {
  name: string;
  children?: ObjNode[];
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: ObjNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];


@Component({
  selector: 'app-obj-tree',
  templateUrl: './obj-tree.component.html',
  styleUrls: ['./obj-tree.component.scss']
})
export class ObjTreeComponent implements OnInit {
  private _transformer = (node: ObjNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

    treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

constructor() {
  this.dataSource.data = TREE_DATA;
 }

  ngOnInit(): void {
  }
  hasChild = (_: number, node: FlatNode) => node.expandable;

}
