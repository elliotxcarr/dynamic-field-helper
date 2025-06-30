import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bunker } from './bunker';

describe('Bunker', () => {
  let component: Bunker;
  let fixture: ComponentFixture<Bunker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bunker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bunker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
