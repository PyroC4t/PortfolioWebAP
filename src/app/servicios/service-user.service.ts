import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {
  useURL = 'http://localhost:8080/usuario/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.useURL + 'lista');
  }

  public detail(id: number): Observable<User>{
    return this.httpClient.get<User>(this.useURL + `detail/${id}`);
  }

  public save(user: User): Observable<any>{
    return this.httpClient.post<any>(this.useURL + 'create', user);
  }

  public update(id: number, user: User): Observable<any>{
    return this.httpClient.put<any>(this.useURL + `update/${id}`, user);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.useURL + `delete/${id}`);
  }
}
