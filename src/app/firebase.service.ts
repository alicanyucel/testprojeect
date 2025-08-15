import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: AngularFireDatabase) {}

  getBookingTrips(): Observable<any[]> {
  return this.db.list('booking_trips').valueChanges() as unknown as Observable<any[]>;
  }

  getDataFromNode(node: string): Observable<any[]> {
  return this.db.list(node).valueChanges() as unknown as Observable<any[]>;
  }
}
