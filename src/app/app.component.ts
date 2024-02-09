import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from './services/storage.service';
import { ProductFormComponent } from './components/product-form/product-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task05';
  constructor(
    private dialog: MatDialog,
    private storageService: StorageService
  ) {}

  openProductModal() {
    const dialogRef = this.dialog.open(ProductFormComponent);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.storageService.addProduct(data).then((response) => {
          if (response) {
            alert('Producto guardado con exito!');
          }
        });
      }
    });
  }
}
