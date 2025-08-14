import { Injectable, inject } from '@angular/core';
import { Database, ref, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private database: Database = inject(Database);

  getBookingTrips() {
    return new Observable(subscriber => {
      const bookingRef = ref(this.database, 'booking_trips');
      onValue(bookingRef, (snapshot) => {
        const data = snapshot.val();
        subscriber.next(data ? Object.values(data) : []);
      });
    });
  }

  getDataFromNode(node: string) {
    return new Observable(subscriber => {
      const nodeRef = ref(this.database, node);
      onValue(nodeRef, (snapshot) => {
        const data = snapshot.val();
        subscriber.next(data ? Object.values(data) : []);
      });
    });
  }
}
