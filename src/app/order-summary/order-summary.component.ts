import { Component } from '@angular/core';
import { OrderItemComponent } from '../order-item/order-item.component';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [OrderItemComponent ],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {

}
