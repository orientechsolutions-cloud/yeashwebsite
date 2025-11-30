import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixerAndBlender } from './mixer-and-blender';

describe('MixerAndBlender', () => {
  let component: MixerAndBlender;
  let fixture: ComponentFixture<MixerAndBlender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixerAndBlender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixerAndBlender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
