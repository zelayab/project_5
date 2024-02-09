import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private fs: Firestore) {}

  addProduct(product: Product) {
    const productRef = collection(this.fs, 'products');
    return addDoc(productRef, product);
  }
}
