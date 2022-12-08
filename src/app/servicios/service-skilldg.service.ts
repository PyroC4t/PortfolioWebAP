import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skilldg } from '../model/skilldg';

@Injectable({
  providedIn: 'root'
})
export class ServiceSkilldgService {
  skillURL = 'http://localhost:8080/skilldiseno/'
  //skillURL = 'https://portfolioapbackend.herokuapp.com/skilldiseno/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skilldg[]>{
    return this.httpClient.get<Skilldg[]>(this.skillURL + 'lista');
  }

  public detail(id: number): Observable<Skilldg>{
    return this.httpClient.get<Skilldg>(this.skillURL + `detail/${id}`);
  }

  public save(skilldg: Skilldg): Observable<any>{
    return this.httpClient.post<any>(this.skillURL + 'create', skilldg);
  }

  public update(id: number, skilldg: Skilldg): Observable<any>{
    return this.httpClient.put<any>(this.skillURL + `update/${id}`, skilldg);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.skillURL + `delete/${id}`);
  }
}
