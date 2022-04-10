import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PublihserService } from '../../../services/publisher/publihser.service';
import { Publihser } from '../../../shared/models/publisher/publihser';

@Component({
  selector: 'app-publisher-update',
  templateUrl: './publisher-update.component.html',
  styleUrls: ['./publisher-update.component.scss']
})
export class PublisherUpdateComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl('')
  });

  isSubmitted = false;

  publisher: Publihser = new Publihser();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private publisherService: PublihserService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.publisherService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        name: new FormControl(res.data.name),
        city: new FormControl(res.data.city),
        address: new FormControl(res.data.address)
      });
    });
  }

  // UPDATE PUBLISHER
  onUpdatePublisher() {
    this.publisher.name = this.formGroup.value.name;
    this.publisher.city = this.formGroup.value.city;
    this.publisher.address = this.formGroup.value.address;

    const id = this.activatedRoute.snapshot.params.id;
    this.publisherService.update(id, this.publisher).subscribe(res => {
      this.isSubmitted = true;
      this.formGroup.reset();
      this.router.navigate(['/publishers/publishers']);
    }, error => console.log(error));
  }

  onCancelSubmit(event) {
    event.preventDefault();
    this.router.navigate(['/publishers/publishers']);
  }

}
