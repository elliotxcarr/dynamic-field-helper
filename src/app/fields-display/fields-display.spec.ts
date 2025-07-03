import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsDisplay } from './fields-display';

describe('FieldsDisplay', () => {
  let component: FieldsDisplay;
  let fixture: ComponentFixture<FieldsDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldsDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldsDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
