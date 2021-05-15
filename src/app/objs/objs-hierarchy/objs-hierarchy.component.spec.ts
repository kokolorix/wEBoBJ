import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjsHierarchyComponent } from './objs-hierarchy.component';

describe('ObjsHierarchyComponent', () => {
  let component: ObjsHierarchyComponent;
  let fixture: ComponentFixture<ObjsHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjsHierarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjsHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
