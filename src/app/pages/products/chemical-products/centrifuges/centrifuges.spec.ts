import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centrifuges } from './centrifuges';

describe('Centrifuges', () => {
  let component: Centrifuges;
  let fixture: ComponentFixture<Centrifuges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Centrifuges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Centrifuges);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
