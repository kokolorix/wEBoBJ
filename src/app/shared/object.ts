import { Guid } from 'guid-typescript'
export interface Property {
   name: string;
   value?: string | string[] | number | number[] | boolean | boolean[] | Object | Object[];
}
export interface Object {
   id: Guid;
   properties: Property[];
   type?: Object;
   parent?: Object;
}

export const rootBaseT: Object = {
   id: Guid.parse('7B6361C0-474D-449B-8833-AEC0C4D0BDE6'),
   properties: []
}

export const baseObjT: Object = {
   id: Guid.parse('B9E51B23-EB78-40EB-A00C-7E4F08DC2BA7'),
   type: rootBaseT,
   properties: []
};

export const baseTypeT: Object = {
   id: Guid.parse('BDA13BED-A88D-4138-86DF-5C8519036D45'),
   type: baseObjT,
   properties: []
};

export class Obj implements Object {
   id: Guid;
   properties: Property[];
   type: Object;
   parent?:Object;
   constructor(type?: Object, properties?: Property[], parent?:Object, id?: string) {
      this.id = id ? Guid.parse(id) : Guid.create();
      this.properties = properties ? properties : [];
      this.type = type ? type : baseObjT;
      this.parent = parent;
   }
}
