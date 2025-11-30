import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverAndStorage } from './receiver-and-storage';

describe('ReceiverAndStorage', () => {
  let component: ReceiverAndStorage;
  let fixture: ComponentFixture<ReceiverAndStorage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiverAndStorage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverAndStorage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
