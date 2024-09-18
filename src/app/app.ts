// app.ts
import { Component } from '@angular/core';
import { SurveyComponent } from './survey-component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './main.html',
  imports: [SurveyComponent] // Import SurveyComponent
})
export class App {
  name = 'Angular';
}