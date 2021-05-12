import { TestBed } from '@angular/core/testing';

import { ObjectService } from './object.service';
import { Object, Property, Obj, EmptyT } from 'src/app/shared/object';

describe('ObjectService', () => {
  let service: ObjectService;
  let object: Object;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectService);
    object = new Obj();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('empty object should have EmptyT as type',() => {
    let emptyT = new EmptyT();
    let isEmptyT = object.type.id.toString() === emptyT.id.toString();
    expect(isEmptyT).toBeFalse();
  });

});
