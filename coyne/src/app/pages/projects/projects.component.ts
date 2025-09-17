import { Component } from '@angular/core';
import { NavButtonsComponent } from '../nav-buttons/nav-buttons.component';


@Component({
  selector: 'app-projects',
  imports: [NavButtonsComponent], 
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
fullText = "My Projects";
  typedText = "";
  private index = 0;

  ngOnInit(): void {
    this.typeWriter();
  }

  private typeWriter() {
    if (this.index < this.fullText.length) {
      this.typedText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), 100); // 100ms per character
    }
  }
}
