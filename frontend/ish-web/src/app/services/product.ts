import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [ {
      id: 1,
      name: 'NerdMiner',
      price: 29.99,
      description: 'Bitcoin Miner',
      imageUrl: '',
      category: 'Miners',
      stock: 50,
      rating: 5
    },
    {
      id: 2,
      name: 'Smart WiFi Light Switch',
      price: 17.99,
      description: 'Control your lights remotely with Alexa and Google Home support.',
      imageUrl: '',
      category: 'Smart Switches',
      stock: 80,
      rating: 4.5
    },
    {
      id: 3,
      name: 'Tuya Motion Sensor',
      price: 12.50,
      description: 'Infrared sensor for smart automation routines.',
      imageUrl: '',
      category: 'Sensors',
      stock: 120,
      rating: 4.7
    } 
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
