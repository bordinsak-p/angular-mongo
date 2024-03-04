import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  getFeedBack(): Observable<any> {
    return this.http.get<any>('/api/feedback')
  }
}
