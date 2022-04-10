import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from '../../../services/category/category.service';
import { Category } from '../../../shared/models/category/category';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  isSubmitted = false;

  category: Category = new Category();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.categoryService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        name: new FormControl(res.data.name),
        description: new FormControl(res.data.description)
      });
    });
  }

  onUpdateCategory() {
    this.category.name = this.formGroup.value.name;
    this.category.description = this.formGroup.value.description;

    const id = this.activatedRoute.snapshot.params.id;

    this.categoryService.update(id, this.category).subscribe(res => {
      this.isSubmitted = true;
    },
      error => console.log(error)
    );

    this.formGroup.reset();
    this.router.navigate(['/categories/categories']);
  }

  onCancelSubmit(event) {
    event.preventDefault();
    this.router.navigate(['/categories/categories']);
  }

}
