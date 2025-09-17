import { Component, OnInit } from '@angular/core';
import { NavButtonsComponent } from '../nav-buttons/nav-buttons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavButtonsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fullText = "Hello, I'm Megan Coyne!";
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
