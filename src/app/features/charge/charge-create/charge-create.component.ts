import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { BookreturnService } from '../../../services/bookreturn/bookreturn.service';
import { ChargeService } from '../../../services/charge/charge.service';
import { CustomerService } from '../../../services/customer/customer.service';
import { OperatorService } from '../../../services/operator/operator.service';

import { Bookreturn } from '../../../shared/models/bookreturn/bookreturn';
import { Charge } from '../../../shared/models/charge/charge';
import { Customer } from '../../../shared/models/customer/customer';
import { Operator } from '../../../shared/models/operator/operator';

@Component({
  selector: 'app-charge-create',
  templateUrl: './charge-create.component.html',
  styleUrls: ['./charge-create.component.scss']
})
export class ChargeCreateComponent implements OnInit {

  formGroup = new FormGroup({});
  isSubmitted = false;

  charges: Charge[] = [];
  charge: Charge = new Charge();

  bookreturns: Bookreturn[] = [];
  customers: Customer[] = [];
  operators: Operator[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private chargeService: ChargeService,
    private bookreturnService: BookreturnService,
    private customerService: CustomerService,
    private operatorService: OperatorService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      date: [null],
      cost: [0],
      book_return_id: [0]
    });

    this.getBookreturns();
    this.getCustomers();
    this.getOperators();
  }

  onCreateCharge() {
    this.charge.date = this.formGroup.value.date;
    this.charge.cost = this.formGroup.value.cost;
    this.charge.book_return_id = this.formGroup.value.book_return_id;

    this.chargeService.create(this.charge).subscribe(res => {
      this.isSubmitted = true;
    });

    this.formGroup.reset();
    this.router.navigate(['/charges/charges']);
  }

  // GET BOOK RETURNS DATA
  getBookreturns() {
    this.bookreturnService.getAll().subscribe(res => {
      this.bookreturns = res.data;
    });
  }

  getCustomers() {
    this.customerService.getAll().subscribe(result => {
      this.customers = result.data;
      console.log(this.customers);
    })
  }

  getOperators() {
    this.operatorService.getAll().subscribe(result => {
      this.operators = result.data;
      console.log(this.operators);
    })
  }

  onCancelSubmit(event) {
    event.preventDefault();
    this.router.navigate(['/charges/charges']);
  }

}
