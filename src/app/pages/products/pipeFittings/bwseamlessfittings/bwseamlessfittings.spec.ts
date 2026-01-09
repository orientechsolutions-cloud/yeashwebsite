import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwseamlessfittings } from './bwseamlessfittings';

describe('Bwseamlessfittings', () => {
  let component: Bwseamlessfittings;
  let fixture: ComponentFixture<Bwseamlessfittings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bwseamlessfittings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bwseamlessfittings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
