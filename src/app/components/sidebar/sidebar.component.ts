import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
sidebarOpen = false;
  constructor(private dataService: DataService) {
    this.dataService.sidebarOpen$.subscribe(state => this.sidebarOpen = state);
  }

  toggleSidebar() {
    this.dataService.toggleSidebar(!this.sidebarOpen);
  }

  selectPage(page: string) {
    this.dataService.setActivePage(page);
  }
}
