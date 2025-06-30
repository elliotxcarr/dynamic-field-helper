import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Operational } from './operational';

describe('Operational', () => {
  let component: Operational;
  let fixture: ComponentFixture<Operational>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Operational]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Operational);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
