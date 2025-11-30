import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heatexchangers } from './heatexchangers';

describe('Heatexchangers', () => {
  let component: Heatexchangers;
  let fixture: ComponentFixture<Heatexchangers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heatexchangers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Heatexchangers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
