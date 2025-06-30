import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionWeather } from './position-weather';

describe('PositionWeather', () => {
  let component: PositionWeather;
  let fixture: ComponentFixture<PositionWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionWeather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
