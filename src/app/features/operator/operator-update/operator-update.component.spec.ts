import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorUpdateComponent } from './operator-update.component';

describe('OperatorUpdateComponent', () => {
  let component: OperatorUpdateComponent;
  let fixture: ComponentFixture<OperatorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
