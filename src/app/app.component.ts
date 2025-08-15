import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "./firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testprojeect';
  bookingTrips: any[] = [];
  authError: string | null = null;
  authUser: any = null;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getBookingTrips().subscribe({
      next: (data: any[]) => this.bookingTrips = data || [],
      error: (error) => console.error('Error fetching trips:', error),
      complete: () => console.log('Booking trips subscription completed')
    });
    this.firebaseService.getAuthError$().subscribe(err => {
      this.authError = err ? err.message || String(err) : null;
    });
    this.firebaseService.getAuthState$().subscribe(u => this.authUser = u);
  }
}
