import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// Import rxjs map operator
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test project with MEAN (Angular2) and Docker!';

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of people
  people: any[] = [];

  constructor(private http: Http) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllMessages();
  }

  // Add one person to the API
  addMessage(fLid, driverId) {
    const endTime = Date.now();
    const startTime = endTime - 86400000; // remove one day from the end time to set start time
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    this.http.post(`${this.API}/messages`, {fLid, driverId, startDate, endDate})
      .map(res => res.json())
      .subscribe(() => {
        this.getAllPeople();
      }, error => console.log(error))
  }

  // Get all users from the API
  getAllMessages() {
    this.http.get(`${this.API}/messages`)
      .map(res => res.json())
      .subscribe(messages => {
        console.log(messages)
        this.messages = messages
      }, error => console.log(error))
  }
}
