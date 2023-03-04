import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: any;

  constructor() { }
  public UserFromRemote(user :User):Observable<any>{
    return this.http.post('${baseUrl} users/login', user)
      }
}
