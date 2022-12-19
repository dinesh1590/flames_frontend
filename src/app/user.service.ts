import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/flames";


  constructor(private httpClient: HttpClient) { }

  getFlames(user: User): Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}`, user);
  }


}
