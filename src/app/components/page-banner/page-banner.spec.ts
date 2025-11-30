import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBanner } from './page-banner';

describe('PageBanner', () => {
  let component: PageBanner;
  let fixture: ComponentFixture<PageBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
