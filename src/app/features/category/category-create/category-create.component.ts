import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
import { Category } from '../../../shared/models/category/category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  formGroup = new FormGroup({});
  isSubmitted = false;

  categories: Category[] = [];
  category: Category = new Category();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
      description: ['']
    });
  }

  onCreateCategory() {
    this.category.name = this.formGroup.value.name;
    this.category.description = this.formGroup.value.description;

    this.categoryService.create(this.category).subscribe(res => {
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
