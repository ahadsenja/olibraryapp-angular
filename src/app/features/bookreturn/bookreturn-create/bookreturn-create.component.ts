import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../../services/book/book.service';

import { BookreturnService } from '../../../services/bookreturn/bookreturn.service';
import { CustomerService } from '../../../services/customer/customer.service';
import { OperatorService } from '../../../services/operator/operator.service';

import { Book } from '../../../shared/models/book/book';
import { Bookreturn } from '../../../shared/models/bookreturn/bookreturn';
import { Customer } from '../../../shared/models/customer/customer';
import { Operator } from '../../../shared/models/operator/operator';

@Component({
  selector: 'app-bookreturn-create',
  templateUrl: './bookreturn-create.component.html',
  styleUrls: ['./bookreturn-create.component.scss']
})
export class BookreturnCreateComponent implements OnInit {

  formGroup = new FormGroup({});
  isSubmitted = false;

  bookreturns: Bookreturn[] = [];
  bookreturn: Bookreturn = new Bookreturn();

  books: Book[] = [];
  customers: Customer[] = [];
  operators: Operator[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bookreturnService: BookreturnService,
    private bookService: BookService,
    private customerService: CustomerService,
    private operatorService: OperatorService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      date: [null],
      pay_amount: [0],
      status: [''],
      borrow_id: [0]
    });

    this.getBooks();
    this.getCustomers();
    this.getOperators();
  }

  onCreateBookReturn() {
    this.bookreturn.date = this.formGroup.value.date;
    this.bookreturn.pay_amount = this.formGroup.value.pay_amount;
    this.bookreturn.status = this.formGroup.value.status;
    this.bookreturn.borrow_id = this.formGroup.value.borrow_id;

    this.bookreturnService.create(this.bookreturn).subscribe(res => {
      this.isSubmitted = true;
    });

    this.formGroup.reset();
    this.router.navigate(['/bookreturns/bookreturns']);
  }

  // GET BOOKS DATA
  getBooks() {
    this.bookService.getAll().subscribe(res => {
      this.books = res.data;
    });
  }

  // GET CUSTOMERS DATA
  getCustomers() {
    this.customerService.getAll().subscribe(res => {
      this.customers = res.data;
    });
  }

  // GET OPERATOS DATA
  getOperators() {
    this.operatorService.getAll().subscribe(res => {
      this.operators = res.data;
    });
  }

  onCancelSubmit(event) {
    event.preventDefault();
    this.router.navigate(['/bookreturns/bookreturns']);
  }

}
