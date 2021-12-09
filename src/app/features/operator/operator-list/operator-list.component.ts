import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OperatorService } from '../../../services/operator/operator.service';
import { Operator } from '../../../shared/models/operator/operator';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss']
})
export class OperatorListComponent implements OnInit {

  operators: Operator[] = [];

  constructor(
    private operatorService: OperatorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetOperators();
  }

  onGetOperators(): void {
    this.operatorService.getAll().subscribe(data => {
      this.operators = data.data;
    });
  }

  onSelectOperator(id: number) {
    this.router.navigate(['/operators/operator-update', id]);
  }

  onDeleteOperator(operator: Operator) {
    this.operatorService.delete(operator).subscribe(res => {
      this.operators = this.operators.filter(id => id !== operator);
      alert('WARNING! \n The data you choose will be deleted.');
    });
  }

}
