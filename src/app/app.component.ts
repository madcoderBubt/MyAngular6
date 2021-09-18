import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  desc = "ASP.NET API v5 with StoreProcedure, Angular.io v6, BootStrap v4 with jQuery v3"
}
