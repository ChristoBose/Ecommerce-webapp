import { Component } from '@angular/core';
import { CardsComponent } from "../../ui/cards/cards.component";
import { products } from '../../interface/products';
import { Router } from '@angular/router';
import { NgFor, NgOptimizedImage, } from '@angular/common';
import { CapitalizePipe } from '../../capitalize.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent, NgFor, NgOptimizedImage, CapitalizePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  title = 'project2';
  categorizedProducts: { [key: string]: products[] } = {};

  async ngOnInit() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      this.categorizeProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  categorizeProducts(products: products[]) {
    this.categorizedProducts = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {} as { [key: string]: products[] });
  }

  getCategories(): string[] {
    return Object.keys(this.categorizedProducts);
  }

  getProductsByCategory(category: string): products[] {
    return this.categorizedProducts[category];
  }

  handleButton(productId: number) {
    this.router.navigate(['/products', productId]);
  }


}
