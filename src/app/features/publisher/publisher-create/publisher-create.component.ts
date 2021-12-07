import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PublihserService } from '../../../services/publisher/publihser.service';
import { Publihser } from '../../../shared/models/publisher/publihser';

@Component({
  selector: 'app-publisher-create',
  templateUrl: './publisher-create.component.html',
  styleUrls: ['./publisher-create.component.scss']
})
export class PublisherCreateComponent implements OnInit {

  formGroup = new FormGroup({});
  isSubmitted = false;

  publishers: Publihser[] = [];
  publisher: Publihser = new Publihser();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private publisherService: PublihserService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
      city: [''],
      address: ['']
    });
  }

  onCreatePublihser() {
    this.publisher.name = this.formGroup.value.name;
    this.publisher.city = this.formGroup.value.city;
    this.publisher.address = this.formGroup.value.address;

    this.publisherService.create(this.publisher).subscribe(res => {
      this.isSubmitted = true;
      console.log('Data publisher created: ', res)
    });

    this.formGroup.reset();
    this.router.navigate(['/publishers/publishers']);
  }

}
