import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distillationcolumns } from './distillationcolumns';

describe('Distillationcolumns', () => {
  let component: Distillationcolumns;
  let fixture: ComponentFixture<Distillationcolumns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Distillationcolumns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Distillationcolumns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
