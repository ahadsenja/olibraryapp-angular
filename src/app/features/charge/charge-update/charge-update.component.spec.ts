import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeUpdateComponent } from './charge-update.component';

describe('ChargeUpdateComponent', () => {
  let component: ChargeUpdateComponent;
  let fixture: ComponentFixture<ChargeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
