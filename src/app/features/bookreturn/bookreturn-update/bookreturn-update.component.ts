import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BorrowService } from '../../../services/borrow/borrow.service';
import { BookreturnService } from '../../../services/bookreturn/bookreturn.service';

import { Borrow } from '../../../shared/models/borrow/borrow';
import { Bookreturn } from '../../../shared/models/bookreturn/bookreturn';

@Component({
  selector: 'app-bookreturn-update',
  templateUrl: './bookreturn-update.component.html',
  styleUrls: ['./bookreturn-update.component.scss']
})
export class BookreturnUpdateComponent implements OnInit {

  formGroup = new FormGroup({
    date: new FormControl(null),
    book_id: new FormControl(0),
    customer_id: new FormControl(0),
    operator_id: new FormControl(0)
  });

  isSubmitted = false;

  bookreturn: Bookreturn = new Bookreturn();

  borrows: Borrow[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookreturnService: BookreturnService,
    private borrowService: BorrowService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.bookreturnService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        date: new FormControl(res.data.date),
        pay_amount: new FormControl(res.data.pay_amount),
        status: new FormControl(res.data.status),
        borrow_id: new FormControl(res.data.borrow_id)
      });
    });

    this.getBorrowedData();
  }

  onUpdateBookReturn() {
    this.bookreturn.date = this.formGroup.value.date;
    this.bookreturn.pay_amount = this.formGroup.value.pay_amount;
    this.bookreturn.status = this.formGroup.value.status;
    this.bookreturn.borrow_id = this.formGroup.value.borrow_id;

    const id = this.activatedRoute.snapshot.params.id;

    this.bookreturnService.update(id, this.bookreturn).subscribe(res => {
      this.isSubmitted = true;
    });

    this.formGroup.reset();
    this.router.navigate(['/bookreturns/bookreturns']);
  }

  getBorrowedData() {
    this.borrowService.getAll().subscribe(res => {
      this.borrows = res.data;
    });
  }

  onCancelSubmit(event) {
    event.preventDefault();
    this.router.navigate(['/bookreturns/bookreturns']);
  }

}
