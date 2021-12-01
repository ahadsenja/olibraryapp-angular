import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookreturnListComponent } from './bookreturn-list.component';

describe('BookreturnListComponent', () => {
  let component: BookreturnListComponent;
  let fixture: ComponentFixture<BookreturnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookreturnListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookreturnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
