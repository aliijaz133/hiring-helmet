import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringHelmetComponent } from './hiring-helmet.component';

describe('HiringHelmetComponent', () => {
  let component: HiringHelmetComponent;
  let fixture: ComponentFixture<HiringHelmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringHelmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringHelmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
