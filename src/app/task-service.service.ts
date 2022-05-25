import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }

  all_tasks():Observable<any>
    {
      return this.http.get<any>('example.com/api/tasks');
    }
}
