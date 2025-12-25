import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type1 } from './type1';

describe('Type1', () => {
  let component: Type1;
  let fixture: ComponentFixture<Type1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Type1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
