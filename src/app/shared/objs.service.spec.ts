import { TestBed } from '@angular/core/testing';

import { ObjsService } from './objs.service';
import { Object as Object, Obj, rootBaseT, baseObjT } from 'src/app/shared/object';

describe('ObjsServiceService', () => {
  let service: ObjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('empty object should have rootBaseT as type', () => {
    let object: Object = new Obj();
    let isEmptyT = object.type === rootBaseT;
    expect(isEmptyT).toBeFalse();
  });

});
