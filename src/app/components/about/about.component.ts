import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private dataService: DataService) {}

  openTestimonial(data: any) {
    this.dataService.setTestimonialData(data);
  }
}
