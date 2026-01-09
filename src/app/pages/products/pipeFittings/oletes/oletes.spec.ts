import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oletes } from './oletes';

describe('Oletes', () => {
  let component: Oletes;
  let fixture: ComponentFixture<Oletes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oletes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oletes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
