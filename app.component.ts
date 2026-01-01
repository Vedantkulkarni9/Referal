import { Component } from '@angular/core';
import { AppPostListComponent } from './app-post-list/app-post-list.component'; // Import the standalone component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    AppPostListComponent // Add the component here
  ],
})
export class AppComponent {
  title = 'Referal';
}