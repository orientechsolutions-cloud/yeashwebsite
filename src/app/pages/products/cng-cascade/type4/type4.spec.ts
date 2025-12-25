import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type4 } from './type4';

describe('Type4', () => {
  let component: Type4;
  let fixture: ComponentFixture<Type4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Type4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
