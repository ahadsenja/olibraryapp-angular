import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { cilSearch } from '@coreui/icons';

import { PublihserService } from '../../../services/publisher/publihser.service';
import { Publihser } from '../../../shared/models/publisher/publihser';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.scss']
})
export class PublisherListComponent implements OnInit {

  icons = { cilSearch }

  publishers: Publihser[] = [];

  constructor(
    private publisherService: PublihserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetPublishers();
  }

  onGetPublishers(): void {
    this.publisherService.getAll().subscribe(data => {
      this.publishers = data.data;
    })
  }

  onSelectedPublisher(id: number) {
    this.router.navigate(['/publishers/publisher-update', id]);
  }

  onDeletePublisher(publisher: Publihser) {
    this.publisherService.delete(publisher).subscribe(res => {
      this.publishers = this.publishers.filter(id => id !== publisher);
      alert('Data successfully deleted');
    })
  }

}
