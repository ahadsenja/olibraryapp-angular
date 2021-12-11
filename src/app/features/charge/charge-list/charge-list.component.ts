import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChargeService } from '../../../services/charge/charge.service';
import { Charge } from '../../../shared/models/charge/charge';

@Component({
  selector: 'app-charge-list',
  templateUrl: './charge-list.component.html',
  styleUrls: ['./charge-list.component.scss']
})
export class ChargeListComponent implements OnInit {

  charges: Charge[] = [];

  constructor(
    private chargeService: ChargeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetCharges();
  }

  onGetCharges(): void {
    this.chargeService.getAll().subscribe(data => {
      this.charges = data.data;
      console.log(this.charges);
    });
  }

  onSelectCharge(id: number) {
    this.router.navigate(['/charges/charge-update', id]);
  }

  onDeleteCharge(charge: Charge) {
    this.chargeService.delete(charge).subscribe(res => {
      this.charges = this.charges.filter(id => id !== charge);
      alert('WARNING!! \n The data you choose will be deleted!');
    });
  }

}
