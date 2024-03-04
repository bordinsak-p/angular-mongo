import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeedbackService } from './services/feedback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularExpressMongodb';

  constructor(private serivce: FeedbackService) {
    
  }

  onSubmit(formValue: FormsModule) {
    this.serivce.getFeedBack().subscribe(res => {
      alert(JSON.stringify(res))
    })    
  }
}
