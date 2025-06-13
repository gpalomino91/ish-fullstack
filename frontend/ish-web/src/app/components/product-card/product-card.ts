import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone:true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})
export class ProductCard {
  @Input() product!: Product;
}
