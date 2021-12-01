import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowUpdateComponent } from './borrow-update.component';

describe('BorrowUpdateComponent', () => {
  let component: BorrowUpdateComponent;
  let fixture: ComponentFixture<BorrowUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
