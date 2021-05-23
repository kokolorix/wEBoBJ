import { Guid } from 'guid-typescript'

export type PropertyValue = string | string[] | number | number[] | boolean | boolean[] | Object | Object[];
export interface Property {
   [key: string]: PropertyValue;
   // name: string;
   // value?: PropertyValue;
}
export interface Object {
   id: Guid;
   properties: Property;
   type?: Object;
   parent?: Object;
   // readonly indent?: number;
   readonly name?: string;
   // values?: { [key: string]: PropertyValue;
}

export const rootBaseT: Object = {
   id: Guid.parse('7B6361C0-474D-449B-8833-AEC0C4D0BDE6'),
   properties: {},
   // get indent() {return 0;},
   get name() {return 'rootBase';},
}

export const baseObjT: Object = {
   id: Guid.parse('B9E51B23-EB78-40EB-A00C-7E4F08DC2BA7'),
   type: rootBaseT,
   properties: {},
   // get indent() {return 1;},
   get name() {return 'baseObj';},
};

export const baseTypeT: Object = {
   id: Guid.parse('BDA13BED-A88D-4138-86DF-5C8519036D45'),
   type: baseObjT,
   properties: {},
   // get indent() {return 1;},
   get name() {return 'baseType';},
};

export class Obj implements Object {
   id: Guid;
   properties: Property;
   type: Object;
   parent?:Object;
   constructor(type?: Object, properties?: Property, parent?:Object, id?: string) {
      this.id = id ? Guid.parse(id) : Guid.create();
      this.properties = properties ? properties : {};
      this.type = type ? type : baseObjT;
      this.parent = parent;
   }
   // get indent() {
   //    let i = 0;
   //    let p = this.parent;
   //    while(p){
   //       ++i;
   //       p = p.parent;
   //    }
   //    return i;
   // }
   get name(){
      const n = this.properties['Name'] as string;
      return n;
   }
}
