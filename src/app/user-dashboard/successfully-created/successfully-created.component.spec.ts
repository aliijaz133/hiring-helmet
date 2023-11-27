import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyCreatedComponent } from './successfully-created.component';

describe('SuccessfullyCreatedComponent', () => {
  let component: SuccessfullyCreatedComponent;
  let fixture: ComponentFixture<SuccessfullyCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullyCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullyCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
