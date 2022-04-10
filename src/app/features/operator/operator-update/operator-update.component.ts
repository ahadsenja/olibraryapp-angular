import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OperatorService } from '../../../services/operator/operator.service';

import { Operator } from '../../../shared/models/operator/operator';

@Component({
  selector: 'app-operator-update',
  templateUrl: './operator-update.component.html',
  styleUrls: ['./operator-update.component.scss']
})
export class OperatorUpdateComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    handphone: new FormControl(0)
  });

  isSubmitted = false;

  operator: Operator = new Operator();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private operatorService: OperatorService
  ) { }

  ngOnInit(): void {
    // get id from url parameter
    const id = this.activatedRoute.snapshot.params.id;

    // set the data into form
    this.operatorService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        name: new FormControl(res.data.name),
        username: new FormControl(res.data.username),
        email: new FormControl(res.data.email),
        password: new FormControl(res.data.password),
        address: new FormControl(res.data.address),
        handphone: new FormControl(res.data.handphone)
      });
    });
  }

  onUpdateOperator() {
    this.operator.name = this.formGroup.value.name;
    this.operator.username = this.formGroup.value.username;
    this.operator.email = this.formGroup.value.email;
    this.operator.password = this.formGroup.value.password;
    this.operator.address = this.formGroup.value.address;
    this.operator.handphone = this.formGroup.value.handphone;

    const id = this.activatedRoute.snapshot.params.id;

    this.operatorService.update(id, this.operator).subscribe(res => {
      this.isSubmitted = true;
    },
      error => console.log(error)
    );

    this.formGroup.reset();
    this.router.navigate(['/operators/operators']);
  }

  onCancelSubmit(event) {
    event.preventDefault();
    this.router.navigate(['/operators/operators']);
  }

}
