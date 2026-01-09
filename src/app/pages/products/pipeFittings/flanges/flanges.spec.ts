import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flanges } from './flanges';

describe('Flanges', () => {
  let component: Flanges;
  let fixture: ComponentFixture<Flanges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flanges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flanges);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
