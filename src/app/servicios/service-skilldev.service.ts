import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skilldev } from '../model/skilldev';

@Injectable({
  providedIn: 'root'
})
export class ServiceSkilldevService {
  skilldevURL = 'https://portfolioapbackend.herokuapp.com/skilldeveloper/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skilldev[]>{
    return this.httpClient.get<Skilldev[]>(this.skilldevURL + 'lista');
  }

  public detail(id: number): Observable<Skilldev>{
    return this.httpClient.get<Skilldev>(this.skilldevURL + `detail/${id}`);
  }

  public save(skilldev: Skilldev): Observable<any>{
    return this.httpClient.post<any>(this.skilldevURL + 'create', skilldev);
  }

  public update(id: number, skilldev: Skilldev): Observable<any>{
    return this.httpClient.put<any>(this.skilldevURL + `update/${id}`, skilldev);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.skilldevURL + `delete/${id}`);
  }
}
