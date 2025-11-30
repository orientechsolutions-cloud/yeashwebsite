import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chimney } from './chimney';

describe('Chimney', () => {
  let component: Chimney;
  let fixture: ComponentFixture<Chimney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chimney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chimney);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
