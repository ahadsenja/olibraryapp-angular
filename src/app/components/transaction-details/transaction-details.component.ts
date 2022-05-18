import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BorrowService } from '../../services/borrow/borrow.service';

import { CustomerService } from '../../services/customer/customer.service';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {
  customer: any = [];
  operator: any = [];
  borrowedBooks: any = [];
  charges: any = [];
  charge: number = 0;

  constructor(
    private customerService: CustomerService,
    private borrowService: BorrowService,
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.getCustomerData(id);
    this.getBorrowedBookByCustomerId(id);
    this.getOperatorProfile();
  }

  getCustomerData(id: number) {
    this.customerService.getById(id).subscribe(result => {
      this.customer = result.data;
      console.log(result.data);
    });
  }

  getOperatorProfile() {
    this.profileService.getProfile().subscribe(result => {
      this.operator = result;
      console.log(this.operator);
    });
  }

  getBorrowedBookByCustomerId(id: number) {
    this.borrowService.getBorrowedBookByCustomerId(id).subscribe(result => {
      this.borrowedBooks = result.data;
    })
  }

  continueToBorrowingBook() {
    this.router.navigateByUrl('/borrows/borrow-create', { state: { data: { cst: this.customer, opr: this.operator } } });
  }

}
