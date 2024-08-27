import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularPractice';

  biggestCarInfo: string = 'The biggest car in the world is - \'American Dream\'';
  biggestPlaneInfo: string = 'The biggest plane in the world is - \'Мрія\'';
  biggestShipInfo: string = 'The biggest ship in the world is - \'Seawise Giant\' oil tanker';

  displayText: string = 'Empty text';

  updateInfoText(info: string) {
    this.displayText = info;
  }
}
