import { Injectable } from '@angular/core';
import { Object, Property, Obj, rootBaseT, baseObjT, baseTypeT } from 'src/app/shared/object';
@Injectable({
  providedIn: 'root'
})
export class ObjsService {
  private _root = new Obj(new Obj(rootBaseT));
  private _types = new Obj(new Obj(rootBaseT),[{name:'Name',value:'Types'}], this._root,'13AE090A-C9C9-4B95-8298-99AFADD31CF1');
  private _textT = new Obj(new Obj(baseTypeT),[{name:'Name',value:'Text'}], this._types,'0E75ED14-318F-4197-A8F1-57026D4DFE17');
  private _numberT = new Obj(new Obj(baseTypeT),[{name:'Name',value:'Number'}], this._types,'B4C724E8-1BCC-46E5-A8C0-A64A4E4F8A11');
 
  private _objects = new Obj(new Obj(rootBaseT),[{name:'Name',value:'Objects'}], this._root,'A3A56E5E-956D-4687-92B8-ED21D2B462ED');
  private _data = new Obj(new Obj(baseObjT),[{name:'Name',value:'Data'}], this._objects,'75D6C656-1BB0-446A-91E5-3FCD3DBC393B');

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
    ];
  }  

  public getRandomStructrue(): Object[] {
    return [];
  }

}

