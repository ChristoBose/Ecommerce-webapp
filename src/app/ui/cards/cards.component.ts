import { Component, EventEmitter, Input, Output } from '@angular/core';
import { products } from '../../interface/products';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage,],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input()
  myItem!: products;

  @Output() myEvent = new EventEmitter<number>();

  emitEvent() {
    this.myEvent.emit(this.myItem.id);
  }
}
