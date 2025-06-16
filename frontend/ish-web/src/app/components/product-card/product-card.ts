import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})
export class ProductCard {
  @Input() product!: Product;
}
