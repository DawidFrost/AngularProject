import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {

  constructor(private http: HttpClient) {}

public getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
}
public getUser(login,password): Observable<any> {
  return this.http.post('http://localhost:3000/getUser',{login:login,password:password});
}


public addUser(login,password) : Observable<any>     
{
     return this.http.post<any>('http://localhost:3000/addUser',{login:login,password:password})
}

public deleteUser(name):Observable<any>
{
  return this.http.post<any>('http://localhost:3000/delUser',{login:name})
}
}
