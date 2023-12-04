import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonewiseorderComponent } from './milestonewiseorder.component';

describe('MilestonewiseorderComponent', () => {
  let component: MilestonewiseorderComponent;
  let fixture: ComponentFixture<MilestonewiseorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilestonewiseorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestonewiseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
