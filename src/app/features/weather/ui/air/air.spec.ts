import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Air } from './air';

describe('Air', () => {
  let component: Air;
  let fixture: ComponentFixture<Air>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Air],
    }).compileComponents();

    fixture = TestBed.createComponent(Air);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
