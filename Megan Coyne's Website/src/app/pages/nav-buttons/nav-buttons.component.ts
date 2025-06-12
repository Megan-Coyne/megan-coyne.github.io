// src/app/pages/nav-buttons/nav-buttons.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-nav-buttons',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.css']
})
export class NavButtonsComponent {
  pages = [
    { name: "Home", url: "/" },
    { name: "Resume/CV", url: "/resume" },
    { name: "Projects", url: "/projects" },
    { name: "Interests", url: "/interests" },
    { name: "Fun", url: "/fun" }
  ];

  constructor(public router: Router) {}

  getLinkClasses(url: string): string {
    return this.router.url === url
      ? 'btn nav-link active-link'
      : 'btn nav-link';
  }
}