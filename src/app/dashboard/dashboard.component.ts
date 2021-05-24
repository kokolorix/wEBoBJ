import { Component, Inject, OnInit } from '@angular/core';
import { ObjTreeNode, ObjTreeNodeProperty } from '../objs/objs-hierarchy/objs-hierarchy.component';
import { ObjsService } from '../shared/objs.service';
import { Object, rootBaseT } from 'src/app/shared/object';
import { DOCUMENT } from '@angular/common';

class ObjTreeNodeImpl implements ObjTreeNode {
  object: Object;
  children: ObjTreeNode[];
  selected: boolean;
  constructor(object: Object, children:ObjTreeNode[]) {
    this.object = object;
    this.children = children;
    this.selected = false;
  }
  get name() {
    return this.object.name ? this.object.name : '';
  }
  get properties()
  {
    let props:ObjTreeNodeProperty[] = [];
    for(let p in this.object?.properties)
    {
      props.push({name: p, value: this.object?.properties[p]});
    }
    return props;
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private readonly objs_service: ObjsService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.theme = this.document.documentElement.classList.contains(DashboardComponent.DARK_THEME_CLASS) ? DashboardComponent.DARK_THEME_DARK : DashboardComponent.DARK_THEME_LIGHT;
    this.onNew();
  }

  private static readonly DARK_THEME_CLASS = 'dark-theme';
  private static readonly DARK_THEME_LIGHT = 'light';
  private static readonly DARK_THEME_DARK = 'dark';

  public theme: string;

  objects: Object[] = [];
  objTree: ObjTreeNode[] = [];

  ngOnInit(): void {
  }

  public toggleTheme() {
    if (this.theme === DashboardComponent.DARK_THEME_DARK) {
      this.document.documentElement.classList.remove(DashboardComponent.DARK_THEME_CLASS);
      this.theme = DashboardComponent.DARK_THEME_LIGHT;
    }
    else {
      this.document.documentElement.classList.add(DashboardComponent.DARK_THEME_CLASS);
      this.theme = DashboardComponent.DARK_THEME_DARK;
    }

  }

  private makeTree(objects:Object[], o:Object):ObjTreeNode{
    let val = o.name;
    let name:string = (val != undefined) ? val.toString() : '';
    let children = objects.filter(
      o1 => o1.parent === o
      ).map( o2 => this.makeTree(objects, o2));
    let node:ObjTreeNode = new ObjTreeNodeImpl(o, children);
    return node;
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
}
