import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor(private httpClient: HttpClient) { }

  public getUserInformation(): Observable<User[]>{
    return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}
