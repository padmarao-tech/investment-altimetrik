import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { Header } from './core/components/header/header';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,

    // Materials
    MatButtonModule,
    Header

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('financial-portfolio');
}
