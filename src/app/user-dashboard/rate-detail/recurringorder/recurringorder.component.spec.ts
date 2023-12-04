import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringorderComponent } from './recurringorder.component';

describe('RecurringorderComponent', () => {
  let component: RecurringorderComponent;
  let fixture: ComponentFixture<RecurringorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
