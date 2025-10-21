import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  activePage = 'about';
  title = 'portfolio-website';

  constructor(private dataService: DataService) {
    this.dataService.activePage$.subscribe((page) => (this.activePage = page));
  }
}
