import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../services/customer/customer.service';

import { Customer } from '../../../shared/models/customer/customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    born_date: new FormControl(null),
    born_place: new FormControl(''),
    address: new FormControl(''),
    handphone: new FormControl(0)
  });

  isSubmitted = false;

  customer: Customer = new Customer();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    // get id from url parameter
    const id = this.activatedRoute.snapshot.params.id;

    // set the data into form
    this.customerService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        name: new FormControl(res.data.name),
        username: new FormControl(res.data.username),
        email: new FormControl(res.data.email),
        password: new FormControl(res.data.password),
        born_date: new FormControl(res.data.born_date),
        born_place: new FormControl(res.data.born_place),
        address: new FormControl(res.data.address),
        handphone: new FormControl(res.data.handphone)
      });
    });
  }

  onUpdateCustomer() {
    this.customer.name = this.formGroup.value.name;
    this.customer.username = this.formGroup.value.username;
    this.customer.email = this.formGroup.value.email;
    this.customer.password = this.formGroup.value.password;
    this.customer.born_date = this.formGroup.value.born_date;
    this.customer.born_place = this.formGroup.value.born_place;
    this.customer.address = this.formGroup.value.address;
    this.customer.handphone = this.formGroup.value.handphone;

    const id = this.activatedRoute.snapshot.params.id;

    this.customerService.update(id, this.customer).subscribe(res => {
      this.isSubmitted = true;
    },
      error => console.log(error)
    );

    this.formGroup.reset();
    this.router.navigate(['/customers/customers']);
  }

}
