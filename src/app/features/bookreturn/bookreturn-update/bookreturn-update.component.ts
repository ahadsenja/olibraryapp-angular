import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BookService } from '../../../services/book/book.service';
import { BookreturnService } from '../../../services/bookreturn/bookreturn.service';
import { CustomerService } from '../../../services/customer/customer.service';
import { OperatorService } from '../../../services/operator/operator.service';

import { Book } from '../../../shared/models/book/book';
import { Bookreturn } from '../../../shared/models/bookreturn/bookreturn';
import { Customer } from '../../../shared/models/customer/customer';
import { Operator } from '../../../shared/models/operator/operator';

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

  books: Book[] = [];
  customers: Customer[] = [];
  operators: Operator[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookreturnService: BookreturnService,
    private bookService: BookService,
    private customerService: CustomerService,
    private operatorService: OperatorService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.bookreturnService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        date: new FormControl(res.data.date),
        book_id: new FormControl(res.data.book_id),
        customer_id: new FormControl(res.data.customer_id),
        operator_id: new FormControl(res.data.operator_id)
      });
    });

    this.getBooks();
    this.getCustomers();
    this.getOperators();
  }

  onUpdateBookReturn() {
    this.bookreturn.date = this.formGroup.value.date;
    this.bookreturn.book_id = this.formGroup.value.book_id;
    this.bookreturn.customer_id = this.formGroup.value.customer_id;
    this.bookreturn.operator_id = this.formGroup.value.operator_id;

    const id = this.activatedRoute.snapshot.params.id;

    this.bookreturnService.update(id, this.bookreturn).subscribe(res => {
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
