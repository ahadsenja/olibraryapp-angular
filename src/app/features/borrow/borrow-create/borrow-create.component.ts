import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { BookService } from '../../../services/book/book.service';
import { BorrowService } from '../../../services/borrow/borrow.service';
import { CustomerService } from '../../../services/customer/customer.service';
import { OperatorService } from '../../../services/operator/operator.service';
import { ProfileService } from '../../../services/profile/profile.service';

import { Book } from '../../../shared/models/book/book';
import { Borrow } from '../../../shared/models/borrow/borrow';
import { Customer } from '../../../shared/models/customer/customer';
import { Operator } from '../../../shared/models/operator/operator';


@Component({
  selector: 'app-borrow-create',
  templateUrl: './borrow-create.component.html',
  styleUrls: ['./borrow-create.component.scss'],
  providers: [DatePipe]
})
export class BorrowCreateComponent implements OnInit {

  formGroup = new FormGroup({});
  isSubmitted = false;

  borrows: Borrow[] = [];
  borrow: Borrow = new Borrow();

  books: Book[] = [];
  customers: Customer[] = [];
  operators: Operator[] = [];

  customer_data: any = [];
  operator_data: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private borrowService: BorrowService,
    private bookService: BookService,
    private customerService: CustomerService,
    private operatorService: OperatorService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      borrow_date: [this.datePipe.transform(new Date, 'dd/mm/yyyy')],
      return_date: [this.datePipe.transform(new Date, 'dd/mm/yyyy')],
      overdue: [0],
      charge: [0],
      book_id: [0],
      customer_id: [history.state.data.cst.id],
      operator_id: [history.state.data.opr.id]
    });

    this.getBooks();
    this.getCustomers();

    this.customer_data = history.state.data.cst.name;
    this.operator_data = history.state.data.opr.name;
  }

  onCreateBorrow() {
    this.borrow.borrow_date = this.formGroup.value.borrow_date;
    this.borrow.return_date = this.formGroup.value.return_date;
    this.borrow.overdue = this.formGroup.value.overdue;
    this.borrow.charge = this.formGroup.value.charge;
    this.borrow.book_id = this.formGroup.value.book_id;
    this.borrow.customer_id = this.formGroup.value.customer_id;
    this.borrow.operator_id = this.formGroup.value.operator_id;

    this.borrowService.create(this.borrow).subscribe(res => {
      this.isSubmitted = true;
    },
      error => console.log(error)
    );

    this.formGroup.reset();
    this.router.navigate(['/borrows/borrows']);
  }

  getBooks() {
    this.bookService.getAll().subscribe(res => {
      this.books = res[0].books;
      console.log(this.books)
    });
  }

  getCustomers() {
    this.customerService.getAll().subscribe(res => {
      this.customers = res.data;
    });
  }

  onCancelSubmit(event) {
    event.preventDefault();
    this.router.navigate(['/borrows/borrows']);
  }

}
