import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketweldandscrewedFittings } from './socketweldandscrewed-fittings';

describe('SocketweldandscrewedFittings', () => {
  let component: SocketweldandscrewedFittings;
  let fixture: ComponentFixture<SocketweldandscrewedFittings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocketweldandscrewedFittings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocketweldandscrewedFittings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
