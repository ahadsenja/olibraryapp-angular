import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { OperatorService } from '../../../services/operator/operator.service';
import { Operator } from '../../../shared/models/operator/operator';

@Component({
  selector: 'app-operator-create',
  templateUrl: './operator-create.component.html',
  styleUrls: ['./operator-create.component.scss']
})
export class OperatorCreateComponent implements OnInit {

  formGroup = new FormGroup({});
  isSubmitted = false;

  operators: Operator[] = [];
  operator: Operator = new Operator();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private operatorService: OperatorService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
      username: [''],
      email: [''],
      password: [''],
      address: [''],
      handphone: [0],
    })
  }

  onCreateOperator() {
    this.operator.name = this.formGroup.value.name;
    this.operator.username = this.formGroup.value.username;
    this.operator.email = this.formGroup.value.email;
    this.operator.password = this.formGroup.value.password;
    this.operator.address = this.formGroup.value.address;
    this.operator.handphone = this.formGroup.value.handphone;

    this.operatorService.create(this.operator).subscribe(res => {
      this.isSubmitted = true;
    },
      error => console.log(error)
    );

    this.formGroup.reset();
    this.router.navigate(['/operators/operators']);
  }

}
