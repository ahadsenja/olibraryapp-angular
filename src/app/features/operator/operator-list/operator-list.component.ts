import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../../services/operator/operator.service';
import { Operator } from '../../../shared/models/operator/operator';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss']
})
export class OperatorListComponent implements OnInit {

  operators: Operator[] = [];

  constructor(private operatorService: OperatorService) { }

  ngOnInit(): void {
    this.onGetOperators();
  }

  onGetOperators(): void {
    this.operatorService.getAll().subscribe(data => {
      this.operators = data.data;
      console.log(this.operators);
    });
  }

}
