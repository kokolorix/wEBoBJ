import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anlage4Component } from './anlage4.component';

describe('Anlage4Component', () => {
  let component: Anlage4Component;
  let fixture: ComponentFixture<Anlage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anlage4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anlage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
