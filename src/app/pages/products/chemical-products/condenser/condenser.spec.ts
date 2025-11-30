import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Condenser } from './condenser';

describe('Condenser', () => {
  let component: Condenser;
  let fixture: ComponentFixture<Condenser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Condenser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Condenser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
