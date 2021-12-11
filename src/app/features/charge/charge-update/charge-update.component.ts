import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookreturnService } from '../../../services/bookreturn/bookreturn.service';
import { ChargeService } from '../../../services/charge/charge.service';
import { Bookreturn } from '../../../shared/models/bookreturn/bookreturn';
import { Charge } from '../../../shared/models/charge/charge';

@Component({
  selector: 'app-charge-update',
  templateUrl: './charge-update.component.html',
  styleUrls: ['./charge-update.component.scss']
})
export class ChargeUpdateComponent implements OnInit {

  formGroup = new FormGroup({
    date: new FormControl(null),
    cost: new FormControl(0),
    book_return_id: new FormControl(0)
  });

  isSubmitted = false;

  charge: Charge = new Charge();

  bookreturns: Bookreturn[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private chargeService: ChargeService,
    private bookreturnService: BookreturnService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.chargeService.getById(id).subscribe(res => {
      this.formGroup = new FormGroup({
        date: new FormControl(res.data.date),
        cost: new FormControl(res.data.cost),
        book_return_id: new FormControl(res.data.book_return_id)
      })
    });

    this.getBookreturns();
  }

  // UPDATE CHARGE DATA
  onUpdateCharge() {
    this.charge.date = this.formGroup.value.date;
    this.charge.cost = this.formGroup.value.cost;
    this.charge.book_return_id = this.formGroup.value.book_return_id;

    const id = this.activatedRoute.snapshot.params.id;

    this.chargeService.update(id, this.charge).subscribe(res => {
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
