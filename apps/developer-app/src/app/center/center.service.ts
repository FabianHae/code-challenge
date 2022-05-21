import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Center } from './center';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  private apiURL = "http://localhost:3400/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/center-matrix/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(center:Center): Observable<any> {

    return this.httpClient.post(this.apiURL + '/center-matrix/', JSON.stringify(center), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id:number): Observable<any> {

    console.log(id);

    return this.httpClient.get(this.apiURL + '/center-matrix/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id:number, center:Center): Observable<any> {

    return this.httpClient.put(this.apiURL + '/center-matrix/' + id, JSON.stringify(center), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/center-matrix/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
