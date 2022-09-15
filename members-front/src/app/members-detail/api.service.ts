import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token = 'Token 6d923e62d94435c080fd05c89f0859b993c748de'
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getMember(id: Number): Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  }

  updateMember(member: any): Observable<any> {
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', member,
    {headers: this.httpHeaders});
  }

  deleteMember(id: Number): Observable<any> {
    return this.http.delete(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  }
}
