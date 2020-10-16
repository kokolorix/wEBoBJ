import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projektliste4Component } from './projektliste4.component';

describe('Projektliste4Component', () => {
  let component: Projektliste4Component;
  let fixture: ComponentFixture<Projektliste4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projektliste4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projektliste4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
