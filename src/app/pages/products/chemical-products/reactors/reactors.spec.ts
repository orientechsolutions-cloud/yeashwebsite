import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactors } from './reactors';

describe('Reactors', () => {
  let component: Reactors;
  let fixture: ComponentFixture<Reactors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
