import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooComponent, ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularPractice';
  items = ["Pizza", "Bomb", "Candy", "Pudding"]
}
