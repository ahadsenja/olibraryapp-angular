import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Borrow } from '../../shared/models/borrow/borrow';
import { BorrowService } from '../../services/borrow/borrow.service';
import { CustomerService } from '../../services/customer/customer.service';
import { ProfileService } from '../../services/profile/profile.service';

import { ModalComponent } from '../modal/modal.component';

import $ from 'jquery';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {
  formGroup = new FormGroup({
    borrow_date: new FormControl(null),
    return_date: new FormControl(null),
    overdue: new FormControl(0),
    charge: new FormControl(0),
    paid: new FormControl(0),
    book_id: new FormControl(0),
    customer_id: new FormControl(0),
    operator_id: new FormControl(0)
  });

  customer: any = [];
  operator: any = [];
  borrowedBooks: any = [];
  charges: any = [];
  charge: number = 0;
  paid: boolean = false;
  borrowId: number = 0;

  borrow: Borrow = new Borrow();
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private borrowService: BorrowService,
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.getCustomerData(id);
    this.getBorrowedBookByCustomerId(id);
    this.getOperatorProfile();
    this.checkPaidButtonStatus();
  }

  openModal(id: number) {
    const modalRef = this.modalService.open(ModalComponent);

    const borrowData = this.borrowService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        borrow_date: new FormControl(res.data.borrow_date),
        return_date: new FormControl(res.data.return_date),
        overdue: new FormControl(res.data.overdue),
        charge: new FormControl(res.data.charge),
        paid: new FormControl(res.data.paid),
        book_id: new FormControl(res.data.book_id),
        customer_id: new FormControl(res.data.customer_id),
        operator_id: new FormControl(res.data.operator_id)
      });
      console.log(this.formGroup.value);
    });

    modalRef.componentInstance.borrowData = borrowData;
  }

  checkPaidButtonStatus() {
    this.borrowService.getAll().subscribe(res => {
      this.paid = res.data[0].paid;
    });
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
      console.log('Borrowd Book:', this.borrowedBooks);
    })
  }

  continueToBorrowingBook() {
    this.router.navigateByUrl('/borrows/borrow-create', { state: { data: { cst: this.customer, opr: this.operator } } });
  }

  onChangePaidStatus(id: number) {
    this.borrowService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        borrow_date: new FormControl(res.data.borrow_date),
        return_date: new FormControl(res.data.return_date),
        overdue: new FormControl(res.data.overdue),
        charge: new FormControl(res.data.charge),
        paid: new FormControl(res.data.paid),
        book_id: new FormControl(res.data.book_id),
        customer_id: new FormControl(res.data.customer_id),
        operator_id: new FormControl(res.data.operator_id)
      });
      console.log(this.formGroup.value);
    });

    // this.borrow.borrow_date = this.formGroup.value.borrow_date;
    // this.borrow.return_date = this.formGroup.value.return_date;
    // this.borrow.overdue = this.formGroup.value.overdue;
    // this.borrow.charge = this.formGroup.value.charge;
    // this.borrow.book_id = this.formGroup.value.book_id;
    // this.borrow.customer_id = this.formGroup.value.customer_id;
    // this.borrow.operator_id = this.formGroup.value.operator_id;

    // this.borrowService.update(id, this.borrow).subscribe(res => {
    //   this.isSubmitted = true;
    // });

    // this.formGroup.reset();
  }

  // let btnStatus = $('#paid-btn');
  // btnStatus.prop('disabled', false);

}
