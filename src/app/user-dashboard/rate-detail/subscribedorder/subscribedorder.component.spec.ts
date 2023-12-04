import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedorderComponent } from './subscribedorder.component';

describe('SubscribedorderComponent', () => {
  let component: SubscribedorderComponent;
  let fixture: ComponentFixture<SubscribedorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribedorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribedorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
