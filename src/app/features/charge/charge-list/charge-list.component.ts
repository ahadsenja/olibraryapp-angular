import { Component, OnInit } from '@angular/core';
import { ChargeService } from '../../../services/charge/charge.service';
import { Charge } from '../../../shared/models/charge/charge';

@Component({
  selector: 'app-charge-list',
  templateUrl: './charge-list.component.html',
  styleUrls: ['./charge-list.component.scss']
})
export class ChargeListComponent implements OnInit {

  charges: Charge[] = [];

  constructor(private chargeService: ChargeService) { }

  ngOnInit(): void {
    this.onGetCharges();
  }

  onGetCharges(): void {
    this.chargeService.getAll().subscribe(data => {
      this.charges = data.data;
      console.log(this.charges);
    });
  }

}
