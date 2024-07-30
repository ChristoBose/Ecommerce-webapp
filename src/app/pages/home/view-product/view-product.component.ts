import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-view-product',
  standalone:true,
  imports:[NgIf],
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],

})
export class ViewProductComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

   ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://dummyjson.com/products/${productId}`).subscribe(data => {
      this.product = data;
    });
  }
}


