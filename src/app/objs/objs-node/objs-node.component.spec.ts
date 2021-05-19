import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjsNodeComponent } from './objs-node.component';

describe('ObjsNodeComponent', () => {
  let component: ObjsNodeComponent;
  let fixture: ComponentFixture<ObjsNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjsNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjsNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
