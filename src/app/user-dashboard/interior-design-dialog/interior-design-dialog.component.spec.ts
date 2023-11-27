import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorDesignDialogComponent } from './interior-design-dialog.component';

describe('InteriorDesignDialogComponent', () => {
  let component: InteriorDesignDialogComponent;
  let fixture: ComponentFixture<InteriorDesignDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorDesignDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorDesignDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
