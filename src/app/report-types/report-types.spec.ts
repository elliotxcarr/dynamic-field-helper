import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTypes } from './report-types';

describe('ReportTypes', () => {
  let component: ReportTypes;
  let fixture: ComponentFixture<ReportTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportTypes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTypes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
