import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderGifComponent } from './loader-gif.component';

describe('LoaderGifComponent', () => {
  let component: LoaderGifComponent;
  let fixture: ComponentFixture<LoaderGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderGifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
