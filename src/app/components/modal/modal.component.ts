import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Borrow } from '../../shared/models/borrow/borrow';

import { BorrowService } from '../../services/borrow/borrow.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() borrowData;

  formGroup = new FormGroup({
    borrow_date: new FormControl(null),
    return_date: new FormControl(null),
    overdue: new FormControl(0),
    charge: new FormControl(0),
    paid: new FormControl(0),
    book_id: new FormControl(0),
    customer_id: new FormControl(0),
    operator_id: new FormControl(0)
  });

  borrow: Borrow = new Borrow();
  isSubmitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private borrowService: BorrowService
  ) { }

  ngOnInit(): void {
  }

  onUpdateBorrow(id: number) {
    this.borrowService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        borrow_date: new FormControl(res.data.borrow_date),
        return_date: new FormControl(res.data.return_date),
        overdue: new FormControl(res.data.overdue),
        charge: new FormControl(res.data.charge),
        paid: new FormControl(res.data.paid),
        book_id: new FormControl(res.data.book_id),
        customer_id: new FormControl(res.data.customer_id),
        operator_id: new FormControl(res.data.operator_id)
      });
      console.log(this.formGroup.value);
    });

    // this.borrow.borrow_date = this.formGroup.value.borrow_date;
    // this.borrow.return_date = this.formGroup.value.return_date;
    // this.borrow.overdue = this.formGroup.value.overdue;
    // this.borrow.charge = this.formGroup.value.charge;
    // this.borrow.book_id = this.formGroup.value.book_id;
    // this.borrow.customer_id = this.formGroup.value.customer_id;
    // this.borrow.operator_id = this.formGroup.value.operator_id;

    // this.borrowService.update(id, this.borrow).subscribe(res => {
    //   this.isSubmitted = true;
    // });

    // this.formGroup.reset();
  }

}
