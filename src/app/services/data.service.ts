import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // For active page
  private activePageSource = new BehaviorSubject<string>('about');
  activePage$ = this.activePageSource.asObservable();

  // Sidebar toggle
  private sidebarOpenSource = new BehaviorSubject<boolean>(false);
  sidebarOpen$ = this.sidebarOpenSource.asObservable();

  // Testimonials modal data
  private testimonialDataSource = new BehaviorSubject<any>(null);
  testimonialData$ = this.testimonialDataSource.asObservable();

  constructor() { }

  setActivePage(page: string) {
    this.activePageSource.next(page);
  }

  toggleSidebar(state: boolean) {
    this.sidebarOpenSource.next(state);
  }

  setTestimonialData(data: any) {
    this.testimonialDataSource.next(data);
  }
}
