import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: AngularFireDatabase) {}

  getBookingTrips() {
    return this.db.list('booking_trips').valueChanges();
  }

  getDataFromNode(node: string) {
    return this.db.list(node).valueChanges();
  }
}
