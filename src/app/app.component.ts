import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from './interface/products';
import { CardsComponent } from "./ui/cards/cards.component";
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
