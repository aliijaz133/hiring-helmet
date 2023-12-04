import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetimepaymentComponent } from './onetimepayment.component';

describe('OnetimepaymentComponent', () => {
  let component: OnetimepaymentComponent;
  let fixture: ComponentFixture<OnetimepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnetimepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetimepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
