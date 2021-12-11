import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { BookService } from '../../../services/book/book.service';
import { BorrowService } from '../../../services/borrow/borrow.service';
import { CustomerService } from '../../../services/customer/customer.service';
import { OperatorService } from '../../../services/operator/operator.service';

import { Book } from '../../../shared/models/book/book';
import { Borrow } from '../../../shared/models/borrow/borrow';
import { Customer } from '../../../shared/models/customer/customer';
import { Operator } from '../../../shared/models/operator/operator';


@Component({
  selector: 'app-borrow-create',
  templateUrl: './borrow-create.component.html',
  styleUrls: ['./borrow-create.component.scss']
})
export class BorrowCreateComponent implements OnInit {

  formGroup = new FormGroup({});
  isSubmitted = false;

  borrows: Borrow[] = [];
  borrow: Borrow = new Borrow();

  books: Book[] = [];
  customers: Customer[] = [];
  operators: Operator[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private borrowService: BorrowService,
    private bookService: BookService,
    private customerService: CustomerService,
    private operatorService: OperatorService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      borrow_date: [null],
      return_date: [null],
      book_id: [0],
      customer_id: [0],
      operator_id: [0]
    });

    this.getBooks();
    this.getCustomers();
    this.getOperators();
  }

  onCreateBorrow() {
    this.borrow.borrow_date = this.formGroup.value.borrow_date;
    this.borrow.return_date = this.formGroup.value.return_date;
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
      this.books = res.data;
    });
  }

  getCustomers() {
    this.customerService.getAll().subscribe(res => {
      this.customers = res.data;
    });
  }

  getOperators() {
    this.operatorService.getAll().subscribe(res => {
      this.operators = res.data;
    });
  }

}
