import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let trip of bookingTrips">
      {{ trip | json }}
    </div>
  `
})
export class AppComponent implements OnInit {
  bookingTrips: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getBookingTrips().subscribe(
      data => this.bookingTrips = data,
      err => console.error(err)
    );
  }
}
