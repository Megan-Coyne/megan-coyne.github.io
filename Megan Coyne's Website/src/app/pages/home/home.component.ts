import { Component } from '@angular/core';
import { NavButtonsComponent } from '../nav-buttons/nav-buttons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavButtonsComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
