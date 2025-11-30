import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reboilers } from './reboilers';

describe('Reboilers', () => {
  let component: Reboilers;
  let fixture: ComponentFixture<Reboilers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reboilers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reboilers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
