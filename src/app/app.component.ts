import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {Trip} from "./shared/interfaces/trip";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'travel-planner';

  tripLogs: string[] = [];
  tripData = {
    start: '',
    end: ''
  };

  // The main array containing all trips
  trips: Trip[] = [];

  onAddTrip(form: any) {
    if (!form.valid) {
      return;
    }

    const newTrip: Trip = {
      start: this.tripData.start,
      end: this.tripData.end,
      shortStart: this.tripData.start.substring(0, 3).toUpperCase(),
      shortEnd: this.tripData.end.substring(0, 3).toUpperCase(),
    };

    // Determine line type & level
    this.assignTripProperties(newTrip);

    // Push to trips array
    this.trips.push(newTrip);
    this.tripLogs.push(`${newTrip.start} to ${newTrip.end} trip added`);

    // Reset the form
    form.resetForm();
  }

  currentEditIndex: number | null = null;
  isEdit: boolean = false;
  editTrip(index: number) {
    this.currentEditIndex = index;
    this.isEdit = true;
    const tripToEdit = this.trips[index];
    this.tripData.start = tripToEdit.start;
    this.tripData.end = tripToEdit.end;
  }

  saveTrip(form: any) {
    if (this.currentEditIndex === null) {
      return;
    }

    const updatedTrip: Trip = {
      start: this.tripData.start,
      end: this.tripData.end,
      shortStart: this.tripData.start.substring(0, 3).toUpperCase(),
      shortEnd: this.tripData.end.substring(0, 3).toUpperCase(),
    };

    // Update the trip in the array
    this.tripLogs.push(`${this.trips[this.currentEditIndex].start} to ${this.trips[this.currentEditIndex].end} trip updated to ${updatedTrip.start} to ${updatedTrip.end}`);
    this.trips[this.currentEditIndex] = updatedTrip;

    this.refreshTrips();
    form.resetForm();

    // Reset the form
    this.currentEditIndex = null;
    this.isEdit = false;
  }

  deleteTrip(index: number) {
    this.tripLogs.push(`Trip from ${this.trips[index].start} to ${this.trips[index].end} deleted!`);
    // Remove the trip from the array
    this.trips.splice(index, 1);

    // Refresh trips to reassign properties
    this.refreshTrips();
  }

  assignTripProperties(trip: Trip) {
    // Default to level 1
    trip.level = 1;

    if (this.trips.length === 0) {
      // First trip, let's set lineType to "arrow" or "straight"
      // Depending on your preference, often the very first is just "straight"
      trip.lineType = 'straight';
      return;
    }

    // Last trip in the array
    const prevTrip = this.trips[this.trips.length - 1];

    // Rule 1: If it’s a continued trip => start of current === end of previous => line is "straight"
    // Rule 2: If not continued => line is "arrow"
    // Rule 3: If consecutive trips have the same pickup & drop => that is on Level 2

    if (trip.start === prevTrip.end) {
      // Continued trip
      trip.lineType = 'straight';
    } else {
      // Not continued trip
      trip.lineType = 'arrow';
    }

    // Check for repeated pickup-drop with the last trip => if exactly same, place on level 2
    if (trip.start === prevTrip.start && trip.end === prevTrip.end) {
      trip.level = 2;
      prevTrip.level = 2;
    }
  }

  refreshTrips() {
    const tempTrips = this.trips;
    this.trips = [];
    for(let trip of tempTrips) {
      this.assignTripProperties(trip);
      this.trips.push(trip);
    }
  }
}
