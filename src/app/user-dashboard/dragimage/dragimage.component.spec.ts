import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragimageComponent } from './dragimage.component';

describe('DragimageComponent', () => {
  let component: DragimageComponent;
  let fixture: ComponentFixture<DragimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
