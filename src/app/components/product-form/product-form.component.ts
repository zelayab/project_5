import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  form!: FormGroup;
  image!: string;
  constructor(
    private formBuilder: FormBuilder,
    protected dialogRef: MatDialogRef<ProductFormComponent>
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: '',
      description: '',
      price: '',
      image: null,
    });
  }

  saveImageSelected(event: any) {
    const image = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      this.image = reader.result as string;
    };
  }

  saveProductData() {
    const item: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      image: this.image,
    };
    this.dialogRef.close(item);
  }
}
