import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipesandfittings } from './pipesandfittings';

describe('Pipesandfittings', () => {
  let component: Pipesandfittings;
  let fixture: ComponentFixture<Pipesandfittings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipesandfittings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipesandfittings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
