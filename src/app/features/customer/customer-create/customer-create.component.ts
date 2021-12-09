import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer/customer.service';
import { Customer } from '../../../shared/models/customer/customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  formGroup = new FormGroup({});
  isSubmitted = false;

  customers: Customer[] = [];
  customer: Customer = new Customer();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      born_date: new FormControl(null),
      born_place: new FormControl(''),
      address: new FormControl(''),
      handphone: new FormControl(0)
    });
  }

  onCreateCustomer() {
    this.customer.name = this.formGroup.value.name;
    this.customer.username = this.formGroup.value.username;
    this.customer.email = this.formGroup.value.email;
    this.customer.password = this.formGroup.value.password;
    this.customer.born_date = this.formGroup.value.born_date;
    this.customer.born_place = this.formGroup.value.born_place;
    this.customer.address = this.formGroup.value.address;
    this.customer.handphone = this.formGroup.value.handphone;

    this.customerService.create(this.customer).subscribe(res => {
      this.isSubmitted = true;
    },
      error => console.log(error)
    );

    this.formGroup.reset();
    this.router.navigate(['/customers/customers']);
  }

}
