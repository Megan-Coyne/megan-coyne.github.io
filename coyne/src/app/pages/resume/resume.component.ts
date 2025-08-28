import { Component } from '@angular/core';
import { NavButtonsComponent } from '../nav-buttons/nav-buttons.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-resume',
  imports: [NavButtonsComponent, PdfViewerModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  pdfResume = "assets/pdf/MeganCoyneResume.pdf";
  pdfCV = "assets/pdf/MeganCoyneCV.pdf";
}
