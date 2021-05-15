import { TestBed } from '@angular/core/testing';

import { ObjsServiceService } from './objs-service.service';
import { Object, Property, Obj, EmptyT } from 'src/app/shared/object';

describe('ObjsServiceService', () => {
  let service: ObjsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('empty object should have EmptyT as type',() => {
    let emptyT = new EmptyT();
    let object = new Obj();
    let isEmptyT = object.type.id.toString() === emptyT.id.toString();
    expect(isEmptyT).toBeFalse();
  });

});
