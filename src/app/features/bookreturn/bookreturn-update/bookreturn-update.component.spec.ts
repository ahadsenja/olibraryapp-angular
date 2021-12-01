import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookreturnUpdateComponent } from './bookreturn-update.component';

describe('BookreturnUpdateComponent', () => {
  let component: BookreturnUpdateComponent;
  let fixture: ComponentFixture<BookreturnUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookreturnUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookreturnUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
