import { Injectable } from '@angular/core';
import { Object, Property } from 'src/app/shared/object';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  private _objects : Object[];
  constructor() { }

  generateObjectTree(): Object[] {
    return [];
  }
}
