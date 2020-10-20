import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projekt4Component } from './projekt4.component';

describe('Projekt4Component', () => {
  let component: Projekt4Component;
  let fixture: ComponentFixture<Projekt4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projekt4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projekt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
