import { Injectable } from '@angular/core';
import { Database, ref, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: Database) {}

  getBookingTrips() {
    return new Observable<any[]>(subscriber => {
      const bookingRef = ref(this.db, 'booking_trips');
      const unsubscribe = onValue(bookingRef, (snapshot) => {
        const data = snapshot.val();
        subscriber.next(data ? Object.values(data) : []);
      });
      return () => unsubscribe();
    });
  }

  getDataFromNode(node: string) {
    return new Observable<any[]>(subscriber => {
      const nodeRef = ref(this.db, node);
      const unsubscribe = onValue(nodeRef, (snapshot) => {
        const data = snapshot.val();
        subscriber.next(data ? Object.values(data) : []);
      });
      return () => unsubscribe();
    });
  }
}
