import { Component, OnInit } from '@angular/core';
import { PublihserService } from '../../../services/publisher/publihser.service';
import { Publihser } from '../../../shared/models/publisher/publihser';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.scss']
})
export class PublisherListComponent implements OnInit {

  publishers: Publihser[] = [];

  constructor(private publisherService: PublihserService) { }

  ngOnInit(): void {
    this.onGetPublishers();
  }

  onGetPublishers(): void {
    this.publisherService.getAll().subscribe(data => {
      this.publishers = data.data;
    })
  }

}
