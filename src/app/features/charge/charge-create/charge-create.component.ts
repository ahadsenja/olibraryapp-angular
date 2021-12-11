import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { BookreturnService } from '../../../services/bookreturn/bookreturn.service';
import { ChargeService } from '../../../services/charge/charge.service';

import { Bookreturn } from '../../../shared/models/bookreturn/bookreturn';
import { Charge } from '../../../shared/models/charge/charge';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private chargeService: ChargeService,
    private bookreturnService: BookreturnService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      date: [null],
      cost: [0],
      book_return_id: [0]
    });

    this.getBookreturns();
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

}
