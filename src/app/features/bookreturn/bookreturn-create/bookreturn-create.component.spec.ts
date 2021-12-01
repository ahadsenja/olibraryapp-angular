import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookreturnCreateComponent } from './bookreturn-create.component';

describe('BookreturnCreateComponent', () => {
  let component: BookreturnCreateComponent;
  let fixture: ComponentFixture<BookreturnCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookreturnCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookreturnCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
