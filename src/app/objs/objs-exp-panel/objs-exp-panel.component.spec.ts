import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjsExpPanelComponent } from './objs-exp-panel.component';

describe('ObjsExpPanelComponent', () => {
  let component: ObjsExpPanelComponent;
  let fixture: ComponentFixture<ObjsExpPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjsExpPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjsExpPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
