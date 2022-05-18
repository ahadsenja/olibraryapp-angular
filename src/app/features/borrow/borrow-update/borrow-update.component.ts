import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BookService } from '../../../services/book/book.service';
import { BorrowService } from '../../../services/borrow/borrow.service';
import { CustomerService } from '../../../services/customer/customer.service';
import { OperatorService } from '../../../services/operator/operator.service';

import { Book } from '../../../shared/models/book/book';
import { Borrow } from '../../../shared/models/borrow/borrow';
import { Customer } from '../../../shared/models/customer/customer';
import { Operator } from '../../../shared/models/operator/operator';

@Component({
  selector: 'app-borrow-update',
  templateUrl: './borrow-update.component.html',
  styleUrls: ['./borrow-update.component.scss']
})
export class BorrowUpdateComponent implements OnInit {

  formGroup = new FormGroup({
    borrow_date: new FormControl(null),
    return_date: new FormControl(null),
    book_id: new FormControl(0),
    customer_id: new FormControl(0),
    operator_id: new FormControl(0)
  });

  isSubmitted = false;

  books: Book[] = [];
  customers: Customer[] = [];
  operators: Operator[] = [];

  borrow: Borrow = new Borrow();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private borrowService: BorrowService,
    private bookService: BookService,
    private customerService: CustomerService,
    private operatorService: OperatorService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.borrowService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        borrow_date: new FormControl(res.data.borrow_date),
        return_date: new FormControl(res.data.return_date),
        overdue: new FormControl(res.data.overdue),
        charge: new FormControl(res.data.charge),
        book_id: new FormControl(res.data.book_id),
        customer_id: new FormControl(res.data.customer_id),
        operator_id: new FormControl(res.data.operator_id)
      });
    });

    this.getBooks();
    this.getCustomers();
    this.getOperators();
  }

  onUpdateBorrow() {
    this.borrow.borrow_date = this.formGroup.value.borrow_date;
    this.borrow.return_date = this.formGroup.value.return_date;
    this.borrow.overdue = this.formGroup.value.overdue;
    this.borrow.charge = this.formGroup.value.charge;
    this.borrow.book_id = this.formGroup.value.book_id;
    this.borrow.customer_id = this.formGroup.value.customer_id;
    this.borrow.operator_id = this.formGroup.value.operator_id;

    const id = this.activatedRoute.snapshot.params.id;

    this.borrowService.update(id, this.borrow).subscribe(res => {
      this.isSubmitted = true;
    });

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

  onCancelSubmit(event) {
    event.preventDefault();
    this.router.navigate(['/borrows/borrows']);
  }

}
