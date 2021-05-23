import { Injectable } from '@angular/core';
import { Object, Property, Obj, rootBaseT, baseObjT, baseTypeT } from 'src/app/shared/object';
import * as ntw from 'number-to-words';
@Injectable({
  providedIn: 'root'
})
export class ObjsService {
  private _root = new Obj(rootBaseT);
  private _types = new Obj(rootBaseT, { 'Name': 'Types' }, this._root, '13AE090A-C9C9-4B95-8298-99AFADD31CF1');
  private _textT = new Obj(baseTypeT, { 'Name': 'Text' }, this._types, '0E75ED14-318F-4197-A8F1-57026D4DFE17');
  private _numberT = new Obj(baseTypeT, { 'Name': 'Number' }, this._types, 'B4C724E8-1BCC-46E5-A8C0-A64A4E4F8A11');

  private _objects = new Obj(rootBaseT, { 'Name': 'Objects' }, this._root, 'A3A56E5E-956D-4687-92B8-ED21D2B462ED');
  private _data = new Obj(baseObjT, { 'Name': 'Data' }, this._objects, '75D6C656-1BB0-446A-91E5-3FCD3DBC393B');

  constructor() { }

  public get root() { return this._root; }
  public get types() { return this._types; }

  public get objects() { return this._objects; }
  public get data() { return this._data; }

  public getNewStructrue(): Object[] {
    return [
      this.types,
      this._textT,
      this._numberT,
      this.objects,
      this.data,
      new Obj(baseObjT, { 'Name' : 'a Thing' }, this.data),
    ];
  }

  private generateProperties(obj:  Object)
  {
    let cnt = Math.round(Math.random() * 10);
     for (let i = 0; i < cnt; ++i) {
      let value = ntw.toWords(i);
      let name = value.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
      obj.properties[name] = value;
     }
  }

  private generateChildren(parent: Object, objs: Object[], indent: number) {
    if (indent > 2)
      return;
    let cnt = Math.round(Math.random() * 4);

    for (let i = 0; i < cnt; ++i) {
      let name = ntw.toWords(objs.length);
      name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
      let child = new Obj(new Obj(baseObjT), { 'Name' : name }, parent);
      this.generateProperties(child);
      objs.push(child);
      this.generateChildren(child, objs, indent + 1);
    }
  }

  public getRandomStructrue(): Object[] {
    let objs: Object[] = this.getNewStructrue();

    this.generateChildren(this.data, objs, 1);

    return objs;
  }

}

