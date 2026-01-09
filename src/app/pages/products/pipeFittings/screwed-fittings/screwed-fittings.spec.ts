import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrewedFittings } from './screwed-fittings';

describe('ScrewedFittings', () => {
  let component: ScrewedFittings;
  let fixture: ComponentFixture<ScrewedFittings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrewedFittings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrewedFittings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
