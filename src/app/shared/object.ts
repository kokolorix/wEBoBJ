import { Guid } from 'guid-typescript'
export interface Property{
  name: string;
  value?: string|string[]|number|number[]|boolean|boolean[]|Object|Object[];
}
export interface Object {
   id  : Guid;
   type? : Object;
   properties? :Property[];
}

export class EmptyT implements Object {
   id  : Guid = Guid.parse('7B6361C0-474D-449B-8833-AEC0C4D0BDE6');
}
export class Obj implements Object {
   id  : Guid = Guid.create();
   type : Object = new EmptyT();
}
