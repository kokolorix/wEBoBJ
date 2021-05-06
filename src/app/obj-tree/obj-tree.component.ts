import { Component, OnInit, Injectable } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { of as ofObservable, Observable, BehaviorSubject } from 'rxjs';
import { Object, Property } from 'src/app/shared/object';

export class ObjNode {
  name: string;
  object: Object;
  children?: ObjNode[];
}

export class FlatNode {
  name: string;
  level: number;
  expandable: boolean;
}

const TREE_DATA: ObjNode[] = [
  // {
  //   name: 'Objects',
  //   properties: [
  //     {name:'Type', value:'RootObject'}
  //   ],
  //   children: [
  //     {
  //       name: 'Fruit',
  //       children: [
  //         { name: 'Apple' },
  //         { name: 'Banana' },
  //         { name: 'Fruit loops' },
  //       ]
  //     }, {
  //       name: 'Vegetables',
  //       children: [
  //         {
  //           name: 'Green',
  //           children: [
  //             { name: 'Broccoli' },
  //             { name: 'Brussels sprouts' },
  //           ]
  //         }, {
  //           name: 'Orange',
  //           children: [
  //             { name: 'Pumpkins' },
  //             { name: 'Carrots' },
  //           ]
  //         },
  //       ]
  //     },
  //   ]
  // }
];

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do name or a category.
 * If a node is a category, it has children names and new names can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
  dataChange: BehaviorSubject<ObjNode[]> = new BehaviorSubject<ObjNode[]>([]);

  get data(): ObjNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `ObjNode` with nested
    //     file node as children.
    const data = TREE_DATA;

    // Notify the change.
    this.dataChange.next(data);
  }

  /** Add an name to to-do list */
  insertName(parent: ObjNode, name: string) {
    const child = <ObjNode>{ name: name };
    if (parent.children) {
      parent.children.push(child);
      this.dataChange.next(this.data);
    }
  }

  updateName(node: ObjNode, name: string) {
    node.name = name;
    this.dataChange.next(this.data);
  }
}
@Component({
  selector: 'app-obj-tree',
  templateUrl: './obj-tree.component.html',
  styleUrls: ['./obj-tree.component.scss'],
  providers: [ChecklistDatabase]
})
export class ObjTreeComponent implements OnInit {
  private _transformer = (node: ObjNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap: Map<FlatNode, ObjNode> = new Map<FlatNode, ObjNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap: Map<ObjNode, FlatNode> = new Map<ObjNode, FlatNode>();

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  /** The selection for checklist */
  checklistSelection = new SelectionModel<FlatNode>(true /* multiple */);

  getLevel = (node: FlatNode) => { return node.level; };

  isExpandable = (node: FlatNode) => { return node.expandable; };

  getChildren = (node: ObjNode): Observable<ObjNode[]> => {
    return ofObservable(node.children);
  }

  hasChild = (_: number, _nodeData: FlatNode) => { return _nodeData.expandable; };

  hasNoContent = (_: number, _nodeData: FlatNode) => { return _nodeData.name === ''; };


  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: FlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: FlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do name selection. Select/deselect all the descendants node */
  nameSelectionToggle(node: FlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    // this.checklistSelection.isSelected(node)
    //   ? this.checklistSelection.select(...descendants)
    //   : this.checklistSelection.deselect(...descendants);
    if(this.checklistSelection.isSelected(node))
    {
      const nestedNode = this.flatNodeMap.get(node);
      // this.dataSourceProperties = nestedNode.properties;
    }
    else
      this.dataSourceProperties = []
    
  }

  /** Select the category so we can insert the new name. */
  addNewName(node: FlatNode) {
    const parentNode = this.flatNodeMap.get(node);
    this.database.insertName(parentNode!, '');
    this.treeControl.expand(node);
  }

  /** Save the node to database */
  saveNode(node: FlatNode, nameValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    nestedNode.children = [];
    this.database.updateName(nestedNode!, nameValue);
  }
  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: ObjNode, level: number) => {
    let flatNode = this.nestedNodeMap.has(node) && this.nestedNodeMap.get(node)!.name === node.name
      ? this.nestedNodeMap.get(node)!
      : new FlatNode();
    flatNode.name = node.name;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    if(level  === 0)
      this.treeControl.expand(flatNode);
    return flatNode;
  }

  constructor(private database: ChecklistDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<FlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'value'];
  dataSourceProperties = []
}
