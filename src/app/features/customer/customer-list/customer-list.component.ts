import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from '../../../services/customer/customer.service';
import { Customer } from '../../../shared/models/customer/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  filterText: string = '';

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetCustomers();
  }

  onGetCustomers(): void {
    this.customerService.getAll().subscribe(data => {
      this.customers = data.data;
    });
  }

  onSelectCustomer(id: number) {
    this.router.navigate(['/customers/customer-update', id]);
  }

  onDeleteCustomer(customer: Customer) {
    this.customerService.delete(customer).subscribe(res => {
      this.customers = this.customers.filter(id => id !== customer);
      alert('WARNING! \n The data you choose will be deleted!');
    });
  }

  onClickDetails(id: number) {
    this.router.navigate(['/transaction-details/transaction-details', id]);
  }

}
